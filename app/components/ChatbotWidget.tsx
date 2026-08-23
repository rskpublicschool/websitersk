'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

/* ── Shared with page theme tokens (keep in sync, or move to a
   shared /lib/theme.ts and import in both places) ── */
const T = {
  ink: '#142822',
  ink2: '#1c362d',
  paper: '#f5f6f0',
  paperAlt: '#eeeadd',
  brass: '#a9832f',
  brassLight: '#d9b869',
  maroon: '#7a2333',
  sage: '#4f7161',
  inkMuted: '#5b6b60',
  line: '#ddd6c4',
};

const FONT_DISPLAY = "var(--font-display, 'Newsreader', ui-serif, Georgia, serif)";
const FONT_MONO = "var(--font-mono, ui-monospace, 'IBM Plex Mono', monospace)";

type MsgType = 'language' | 'mainMenu' | 'classList' | 'phoneInput' | 'feeResult' | 'facilities' | 'admission' | 'direction';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  type?: MsgType;
  classSelected?: string;
  feeData?: { monthlyFee: number; totalFee: number };
}

const CLASS_FEE_MAP: Record<string, { monthlyFee: number; totalFee: number }> = {
  'Play / Nursery': { monthlyFee: 1080, totalFee: 9630 },
  LKG: { monthlyFee: 1180, totalFee: 9730 },
  UKG: { monthlyFee: 1180, totalFee: 9730 },
  'Class 1': { monthlyFee: 1480, totalFee: 10440 },
  'Class 2': { monthlyFee: 1480, totalFee: 10440 },
  'Class 3': { monthlyFee: 1680, totalFee: 10740 },
  'Class 4': { monthlyFee: 1680, totalFee: 10740 },
  'Class 5': { monthlyFee: 1880, totalFee: 15040 },
  'Class 6': { monthlyFee: 1880, totalFee: 15040 },
  'Class 7': { monthlyFee: 2080, totalFee: 15350 },
  'Class 8': { monthlyFee: 2080, totalFee: 15350 },
  'Class 9': { monthlyFee: 2380, totalFee: 15950 },
  'Class 10': { monthlyFee: 2380, totalFee: 6450 },
  'Class 11': { monthlyFee: 2580, totalFee: 19580 },
  'Class 12': { monthlyFee: 2580, totalFee: 6580 },
};
const CLASS_LIST = Object.keys(CLASS_FEE_MAP);

/* CTA config replaces 6 hand-written buttons — brass = primary,
   maroon = WhatsApp/urgent, ink = secondary ledger-style */
const MAIN_MENU: { key: string; en: string; hi: string; icon: string; tone: 'brass' | 'maroon' | 'ink'; full?: boolean }[] = [
  { key: 'quiz', en: '60-Sec School Fit Quiz', hi: '60-सेकंड स्कूल फिट क्विज़', icon: '🎯', tone: 'brass', full: true },
  { key: 'fee', en: 'Fee', hi: 'फ़ीस', icon: '💰', tone: 'ink' },
  { key: 'facilities', en: 'Facilities', hi: 'सुविधाएं', icon: '🏫', tone: 'ink' },
  { key: 'admission', en: 'Admission', hi: 'एडमिशन', icon: '🎓', tone: 'ink' },
  { key: 'direction', en: 'Directions', hi: 'लोकेशन', icon: '📍', tone: 'ink' },
  { key: 'liveChat', en: 'WhatsApp Chat', hi: 'व्हाट्सएप चैट', icon: '💬', tone: 'maroon', full: true },
];

const toneStyle = (tone: 'brass' | 'maroon' | 'ink') =>
  tone === 'brass'
    ? { background: T.brass, color: '#fff' }
    : tone === 'maroon'
      ? { background: T.maroon, color: '#fff' }
      : { background: '#fff', color: T.ink, border: `1px solid ${T.line}` };

/* ── Small reusable pieces, kept lean ── */
function MenuBtn({
  label,
  onClick,
  tone,
  full,
}: {
  label: string;
  onClick: () => void;
  tone: 'brass' | 'maroon' | 'ink';
  full?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`py-1.5 px-2 font-bold text-[10px] rounded-md transition-opacity hover:opacity-90 cursor-pointer text-center truncate ${full ? 'col-span-2' : ''}`}
      style={toneStyle(tone)}
    >
      {label}
    </button>
  );
}

export default function ChatbotWidget() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi' | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'msg-1', sender: 'bot', text: 'Please choose your language / नमस्ते, अपनी भाषा चुनें:', type: 'language' },
  ]);
  const [phoneInput, setPhoneInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);
  const isHi = language === 'hi';

  // Defer auto-open so the widget never blocks first paint / LCP.
  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const push = useCallback((...m: ChatMessage[]) => setMessages((prev) => [...prev, ...m]), []);

  const handleSelectLanguage = useCallback((lang: 'en' | 'hi') => {
    setLanguage(lang);
    push(
      { id: `u-${Date.now()}`, sender: 'user', text: lang === 'en' ? 'English' : 'हिंदी (Hindi)' },
      {
        id: `b-${Date.now()}`,
        sender: 'bot',
        type: 'mainMenu',
        text:
          lang === 'en'
            ? 'Welcome to RSK Public School, Bastipur, Dehri. How may we help you today?'
            : 'आरएसके पब्लिक स्कूल, बस्तीपुर, डेहरी में आपका स्वागत है। आज हम आपकी क्या सहायता कर सकते हैं?',
      }
    );
  }, [push]);

  const triggerQuiz = useCallback(() => window.dispatchEvent(new Event('open-school-fit-quiz')), []);

  const handleCTA = useCallback(
    (key: string) => {
      if (key === 'liveChat') {
        window.open('https://wa.me/919631160967?text=Hello%20RSK%20Public%20School%2C%20I%20want%20to%20enquire.', '_blank');
        return;
      }
      if (key === 'quiz') triggerQuiz();

      const item = MAIN_MENU.find((m) => m.key === key)!;
      const bodies: Record<string, { text: string; type: MsgType }> = {
        quiz: {
          type: 'admission',
          text: isHi
            ? '🎯 **स्कूल फिट क्विज़ शुरू किया जा रहा है...**\nअपने बच्चे के लिए सही कक्षा एवं लर्निंग प्रोफाइल खोजें!'
            : '🎯 **Launching 60-Second School Fit Quiz...**\nDiscover the optimal learning environment tailored for your child!',
        },
        fee: { type: 'classList', text: isHi ? 'कृपया कक्षा (Class) चुनें:' : 'Please select class:' },
        facilities: {
          type: 'facilities',
          text: isHi
            ? '🏫 **आरएसके पब्लिक स्कूल सुविधाएं:**\n- 3.5 एकड़ हरा-भरा कैंपस\n- डिजिटल स्मार्ट क्लासरूम\n- कंप्यूटर एवं साइंस लैब्स\n- सीसीटीवी सुरक्षा एवं बस सुविधा'
            : '🏫 **RSK Public School Facilities:**\n- 3.5-acre Green Campus\n- Digital Smart Classrooms\n- Science & Computer Labs\n- CCTV & Safe Bus Transport',
        },
        admission: {
          type: 'admission',
          text: isHi
            ? '🎓 **सत्र 2026-27 के लिए एडमिशन खुले हैं!**\n60-सेकंड स्कूल फिट क्विज़ शुरू करें:'
            : '🎓 **Admissions OPEN for 2026-27!**\nTake our 60-second school fit quiz:',
        },
        direction: {
          type: 'direction',
          text: isHi
            ? '📍 **पता:**\nआरएसके पब्लिक स्कूल, बस्तीपुर, डेहरी-ऑन-सोन, रोहतास, बिहार - 821305 (जीटी रोड / बस्तीपुर मोड़)।'
            : '📍 **Address:**\nRSK Public School, Bastipur, Dehri-on-Sone, Rohtas, Bihar - 821305 (Near GT Road).',
        },
      };
      const body = bodies[key];
      push(
        { id: `u-${Date.now()}`, sender: 'user', text: `${item.icon} ${isHi ? item.hi : item.en}` },
        { id: `b-${Date.now()}`, sender: 'bot', ...body }
      );
    },
    [isHi, push, triggerQuiz]
  );

  const handleSelectClass = useCallback(
    (className: string) => {
      push(
        { id: `u-${Date.now()}`, sender: 'user', text: className },
        {
          id: `b-${Date.now()}`,
          sender: 'bot',
          type: 'phoneInput',
          classSelected: className,
          text: isHi
            ? `**${className}** की फ़ीस देखने के लिए 10-अंकों का मोबाइल नंबर दर्ज करें:`
            : `To view fee for **${className}**, enter 10-digit mobile number:`,
        }
      );
    },
    [isHi, push]
  );

  const handleSubmitPhone = useCallback(
    (e: React.FormEvent, targetClass: string) => {
      e.preventDefault();
      if (!phoneInput || phoneInput.length < 10) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }
      const feeInfo = CLASS_FEE_MAP[targetClass] ?? CLASS_FEE_MAP['Class 1'];
      push(
        { id: `u-${Date.now()}`, sender: 'user', text: `📱 +91 ${phoneInput}` },
        {
          id: `b-${Date.now()}`,
          sender: 'bot',
          type: 'feeResult',
          classSelected: targetClass,
          feeData: feeInfo,
          text: isHi ? `🎉 **${targetClass} फ़ीस विवरण:**` : `🎉 **${targetClass} Fee Breakdown:**`,
        }
      );
      setPhoneInput('');
    },
    [phoneInput, isHi, push]
  );

  const handleRestart = useCallback(() => {
    setLanguage(null);
    setMessages([{ id: `m-${Date.now()}`, sender: 'bot', type: 'language', text: 'Please choose your language / नमस्ते, अपनी भाषा चुनें:' }]);
  }, []);

  if (!mounted) return null; // skip SSR/hydration cost until after first paint

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end">
      {isOpen && (
        <div
          className="relative w-[290px] sm:w-[320px] h-[370px] sm:h-[410px] rounded-xl shadow-2xl flex flex-col overflow-hidden mb-2.5"
          style={{ background: T.paper, border: `1px solid ${T.line}` }}
        >
          {/* Header — ledger ink bar, brass seal avatar */}
          <div
            className="px-3 py-2.5 text-white flex items-center justify-between shrink-0"
            style={{ background: T.ink, borderBottom: `2px solid ${T.brass}` }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <div
                className="relative w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold"
                style={{ background: T.brass, color: T.ink, fontFamily: FONT_MONO }}
              >
                RSK
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full"
                  style={{ background: '#5fae86', border: `1px solid ${T.ink}` }}
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] font-semibold leading-tight truncate" style={{ fontFamily: FONT_DISPLAY }}>
                  RSK Public School, Dehri
                </h3>
                <p className="text-[9px] font-medium" style={{ color: T.brassLight }}>
                  Online • School Assistant
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button onClick={handleRestart} title="Restart Chat" className="w-6 h-6 bg-white/10 hover:bg-white/20 rounded-full text-[10px]">
                🔄
              </button>
              <button onClick={() => setIsOpen(false)} title="Minimize" className="w-6 h-6 bg-white/10 hover:bg-white/20 rounded-full text-[10px]">
                ✖
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2.5 overflow-y-auto space-y-2 text-[11px]" style={{ background: T.paperAlt }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className="max-w-[88%] p-2 rounded-lg"
                  style={
                    msg.sender === 'user'
                      ? { background: T.brass, color: '#fff', borderBottomRightRadius: 2 }
                      : { background: '#fffdf8', color: T.ink, border: `1px solid ${T.line}`, borderBottomLeftRadius: 2 }
                  }
                >
                  <p className="whitespace-pre-line leading-snug">{msg.text}</p>

                  {msg.type === 'language' && (
                    <div className="mt-2 flex gap-1.5">
                      <MenuBtn label="English 🇬🇧" tone="brass" onClick={() => handleSelectLanguage('en')} />
                      <MenuBtn label="हिंदी 🇮🇳" tone="ink" onClick={() => handleSelectLanguage('hi')} />
                    </div>
                  )}

                  {msg.type === 'mainMenu' && (
                    <div className="mt-2 grid grid-cols-2 gap-1">
                      {MAIN_MENU.map((item) => (
                        <MenuBtn
                          key={item.key}
                          label={`${item.icon} ${isHi ? item.hi : item.en}`}
                          tone={item.tone}
                          full={item.full}
                          onClick={() => handleCTA(item.key)}
                        />
                      ))}
                    </div>
                  )}

                  {msg.type === 'classList' && (
                    <div
                      className="mt-2 grid grid-cols-3 gap-1 max-h-[140px] overflow-y-auto p-1 rounded-md"
                      style={{ background: T.paper, border: `1px solid ${T.line}` }}
                    >
                      {CLASS_LIST.map((cls) => (
                        <button
                          key={cls}
                          onClick={() => handleSelectClass(cls)}
                          className="py-1 px-1 bg-white hover:text-white font-bold text-[9px] rounded text-center truncate transition-colors"
                          style={{ border: `1px solid ${T.line}`, color: T.ink }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = T.brass)}
                          onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
                        >
                          {cls}
                        </button>
                      ))}
                    </div>
                  )}

                  {msg.type === 'phoneInput' && msg.classSelected && (
                    <form onSubmit={(e) => handleSubmitPhone(e, msg.classSelected!)} className="mt-2 space-y-1.5">
                      <div className="relative">
                        <span className="absolute left-2 top-1.5 text-[9px] font-bold" style={{ color: T.inkMuted }}>
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={phoneInput}
                          onChange={(e) => setPhoneInput(e.target.value.replace(/\D/g, ''))}
                          placeholder="10-digit mobile"
                          className="w-full pl-8 pr-1.5 py-1 rounded text-[10px] outline-none font-semibold"
                          style={{ background: T.paper, border: `1px solid ${T.line}`, color: T.ink }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-1.5 text-white font-bold text-[10px] rounded"
                        style={{ background: T.maroon }}
                      >
                        {isHi ? 'फ़ोन दर्ज कर फ़ीस देखें 🔓' : 'Unlock Fee Chart 🔓'}
                      </button>
                    </form>
                  )}

                  {msg.type === 'feeResult' && msg.feeData && (
                    <div className="mt-2 space-y-1.5 p-2.5 rounded-md text-[11px]" style={{ background: '#fffdf8', border: `1px solid ${T.line}` }}>
                      <div className="flex justify-between items-center pb-1" style={{ borderBottom: `1px solid ${T.line}` }}>
                        <span style={{ color: T.inkMuted }}>{isHi ? 'चयनित कक्षा:' : 'Selected Class:'}</span>
                        <span className="font-bold" style={{ color: T.ink }}>{msg.classSelected}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 px-2 rounded" style={{ background: T.paperAlt }}>
                        <span className="font-semibold" style={{ color: T.ink }}>{isHi ? 'मासिक फ़ीस:' : 'Monthly Fee:'}</span>
                        <span className="font-extrabold" style={{ color: T.sage }}>
                          ₹{msg.feeData.monthlyFee.toLocaleString('en-IN')}/month
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-1 px-2 rounded" style={{ background: T.paperAlt }}>
                        <span className="font-semibold" style={{ color: T.ink }}>{isHi ? 'एडमिशन के समय फ़ीस:' : 'Fee During Admission:'}</span>
                        <span className="font-extrabold" style={{ color: T.brass }}>₹{msg.feeData.totalFee.toLocaleString('en-IN')}</span>
                      </div>
                      <button
                        onClick={() =>
                          window.open(
                            `https://wa.me/919631160967?text=Hi%20RSK%20Public%20School%2C%20I%20enquired%20for%20${encodeURIComponent(
                              msg.classSelected || ''
                            )}%20fees%20(Monthly%3A%20%E2%82%B9${msg.feeData?.monthlyFee}%2Fmo%2C%20Total%3A%20%E2%82%B9${msg.feeData?.totalFee}).`,
                            '_blank'
                          )
                        }
                        className="w-full mt-1.5 py-1.5 px-2 text-white font-bold text-[10px] rounded text-center"
                        style={{ background: T.maroon }}
                      >
                        💬 {isHi ? 'एडमिशन हेतु व्हाट्सएप चैट करें' : 'Chat on WhatsApp for Admission'}
                      </button>
                    </div>
                  )}

                  {msg.type === 'admission' && (
                    <button
                      onClick={triggerQuiz}
                      className="mt-2 w-full py-1.5 px-2 font-bold text-[10px] rounded-md"
                      style={{ background: T.brass, color: '#fff' }}
                    >
                      🎯 {isHi ? '60-सेकंड क्विज़ शुरू करें' : 'Take 60-Sec Quiz'}
                    </button>
                  )}

                  {msg.type === 'direction' && (
                    <a
                      href="https://maps.google.com/?q=RSK+Public+School+Bastipur+Dehri+Bihar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 w-full py-1.5 px-2 text-white font-bold text-[10px] rounded-md text-center flex items-center justify-center gap-1"
                      style={{ background: T.ink2 }}
                    >
                      🗺️ {isHi ? 'गूगल मैप्स में देखें' : 'Open Google Maps'}
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Footer */}
          <div
            className="py-1.5 px-2.5 flex items-center justify-between text-[10px] shrink-0"
            style={{ background: '#fffdf8', borderTop: `1px solid ${T.line}` }}
          >
            <button onClick={() => handleSelectLanguage(isHi ? 'en' : 'hi')} className="font-bold hover:underline" style={{ color: T.maroon }}>
              🌐 {isHi ? 'English' : 'हिंदी'}
            </button>
            <button onClick={handleRestart} className="font-medium hover:opacity-80" style={{ color: T.inkMuted }}>
              🔄 Main Menu
            </button>
          </div>
        </div>
      )}

      {/* Floating toggle — brass seal, matches hero badge */}
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="group relative flex items-center gap-1.5 px-3 py-2 rounded-full shadow-xl transform hover:scale-105 active:scale-95 transition-transform"
        style={{ background: T.ink, border: `1px solid ${T.brass}` }}
        title="RSK Public School Bot"
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
          style={{ background: T.brass, color: T.ink, fontFamily: FONT_MONO }}
        >
          RSK
        </div>
        <span className="hidden sm:inline text-[11px] font-bold" style={{ color: T.brassLight }}>
          Ask RSK
        </span>
        <span
          className="w-4 h-4 font-black text-[9px] rounded-full flex items-center justify-center"
          style={{ background: T.maroon, color: '#fff' }}
        >
          1
        </span>
      </button>
    </div>
  );
}
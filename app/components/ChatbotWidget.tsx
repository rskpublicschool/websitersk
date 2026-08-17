'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  type?: 'language' | 'mainMenu' | 'classList' | 'phoneInput' | 'feeResult' | 'facilities' | 'admission' | 'direction';
  classSelected?: string;
  feeData?: {
    monthlyFee: number;
  };
}

const CLASS_FEE_MAP: Record<string, { monthlyFee: number }> = {
  'Play / Nursery': { monthlyFee: 1080 },
  'LKG': { monthlyFee: 1180 },
  'UKG': { monthlyFee: 1180 },
  'Class 1': { monthlyFee: 1280 },
  'Class 2': { monthlyFee: 1280 },
  'Class 3': { monthlyFee: 1480 },
  'Class 4': { monthlyFee: 1480 },
  'Class 5': { monthlyFee: 1580 },
  'Class 6': { monthlyFee: 1580 },
  'Class 7': { monthlyFee: 1780 },
  'Class 8': { monthlyFee: 1780 },
  'Class 9': { monthlyFee: 2180 },
  'Class 10': { monthlyFee: 2180 },
  'Class 11': { monthlyFee: 2580 },
  'Class 12': { monthlyFee: 2580 },
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(true); // Open by default on landing
  const [language, setLanguage] = useState<'en' | 'hi' | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: 'Please choose your language / नमस्ते, अपनी भाषा चुनें:',
      type: 'language',
    },
  ]);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [phoneInput, setPhoneInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectLanguage = (lang: 'en' | 'hi') => {
    setLanguage(lang);
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: lang === 'en' ? 'English' : 'हिंदी (Hindi)',
    };

    const greetingText =
      lang === 'en'
        ? 'Welcome to RSK Public School, Bastipur, Dehri. How may we help you today?'
        : 'आरएसके पब्लिक स्कूल, बस्तीपुर, डेहरी में आपका स्वागत है। आज हम आपकी क्या सहायता कर सकते हैं?';

    const botMessage: ChatMessage = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: greetingText,
      type: 'mainMenu',
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  const handleSelectCTA = (ctaType: 'quiz' | 'fee' | 'facilities' | 'admission' | 'direction' | 'liveChat') => {
    const isHi = language === 'hi';

    if (ctaType === 'liveChat') {
      window.open('https://wa.me/919631160967?text=Hello%20RSK%20Public%20School%2C%20I%20want%20to%20enquire.', '_blank');
      return;
    }

    if (ctaType === 'quiz') {
      triggerSchoolQuiz();
    }

    const ctaLabels: Record<string, string> = {
      quiz: isHi ? '🎯 60-सेकंड स्कूल फिट क्विज़' : '🎯 60-Sec School Fit Quiz',
      fee: isHi ? '💰 फ़ीस विवरण' : '💰 Fee Structure',
      facilities: isHi ? '🏫 सुविधाएं' : '🏫 Facilities',
      admission: isHi ? '🎓 एडमिशन' : '🎓 Admission Info',
      direction: isHi ? '📍 लोकेशन पता' : '📍 Directions',
    };

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: ctaLabels[ctaType] || ctaType,
    };

    let botResponse: ChatMessage;

    if (ctaType === 'quiz') {
      botResponse = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isHi
          ? '🎯 **स्कूल फिट क्विज़ शुरू किया जा रहा है...**\nअपने बच्चे के लिए सही कक्षा एवं लर्निंग प्रोफाइल खोजें!'
          : '🎯 **Launching 60-Second School Fit Quiz...**\nDiscover the optimal learning environment tailored for your child!',
        type: 'admission',
      };
    } else if (ctaType === 'fee') {
      botResponse = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isHi
          ? 'कृपया कक्षा (Class) चुनें:'
          : 'Please select class:',
        type: 'classList',
      };
    } else if (ctaType === 'facilities') {
      botResponse = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isHi
          ? '🏫 **आरएसके पब्लिक स्कूल सुविधाएं:**\n- 3.5 एकड़ हरा-भरा कैंपस\n- डिजिटल स्मार्ट क्लासरूम\n- कंप्यूटर एवं साइंस लैब्स\n- सीसीटीवी सुरक्षा एवं बस सुविधा'
          : '🏫 **RSK Public School Facilities:**\n- 3.5-acre Green Campus\n- Digital Smart Classrooms\n- Science & Computer Labs\n- CCTV & Safe Bus Transport',
        type: 'facilities',
      };
    } else if (ctaType === 'admission') {
      botResponse = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isHi
          ? '🎓 **सत्र 2026-27 के लिए एडमिशन खुले हैं!**\n60-सेकंड स्कूल फिट क्विज़ शुरू करें:'
          : '🎓 **Admissions OPEN for 2026-27!**\nTake our 60-second school fit quiz:',
        type: 'admission',
      };
    } else {
      botResponse = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isHi
          ? '📍 **पता:**\nआरएसके पब्लिक स्कूल, बस्तीपुर, डेहरी-ऑन-सोन, रोहतास, बिहार - 821305 (जीटी रोड / बस्तीपुर मोड़)।'
          : '📍 **Address:**\nRSK Public School, Bastipur, Dehri-on-Sone, Rohtas, Bihar - 821305 (Near GT Road).',
        type: 'direction',
      };
    }

    setMessages((prev) => [...prev, userMessage, botResponse]);
  };

  const handleSelectClass = (className: string) => {
    setSelectedClass(className);
    const isHi = language === 'hi';

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: className,
    };

    const botMsg: ChatMessage = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: isHi
        ? `**${className}** की फ़ीस देखने के लिए 10-अंकों का मोबाइल नंबर दर्ज करें:`
        : `To view fee for **${className}**, enter 10-digit mobile number:`,
      type: 'phoneInput',
      classSelected: className,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleSubmitPhone = (e: React.FormEvent, targetClass: string) => {
    e.preventDefault();
    if (!phoneInput || phoneInput.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    const isHi = language === 'hi';
    const feeInfo = CLASS_FEE_MAP[targetClass] || CLASS_FEE_MAP['Class 1'];

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: `📱 +91 ${phoneInput}`,
    };

    const botMsg: ChatMessage = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: isHi
        ? `🎉 **${targetClass} फ़ीस विवरण:**`
        : `🎉 **${targetClass} Fee Breakdown:**`,
      type: 'feeResult',
      classSelected: targetClass,
      feeData: feeInfo,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setPhoneInput('');
  };

  const handleRestartChat = () => {
    setLanguage(null);
    setSelectedClass(null);
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: 'bot',
        text: 'Please choose your language / नमस्ते, अपनी भाषा चुनें:',
        type: 'language',
      },
    ]);
  };

  const triggerSchoolQuiz = () => {
    window.dispatchEvent(new Event('open-school-fit-quiz'));
  };

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end">
      {/* Chat Window Container */}
      {isOpen && (
        <div className="relative w-[290px] sm:w-[320px] h-[370px] sm:h-[410px] bg-white rounded-2xl shadow-2xl border border-blue-100 flex flex-col overflow-hidden animate-fadeIn mb-2.5 transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 px-3 py-2.5 text-white flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center text-slate-950 font-black text-xs shadow-xs border border-amber-300 shrink-0">
                🤖
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 border border-slate-900 rounded-full"></span>
              </div>
              <div className="min-w-0">
                <h3 className="text-[11px] font-black leading-tight text-white truncate">
                  RSK Public School, Dehri
                </h3>
                <p className="text-[9px] text-emerald-300 font-medium flex items-center gap-1">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full animate-ping"></span>
                  Online • AI Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={handleRestartChat}
                title="Restart Chat"
                className="w-6 h-6 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer text-[10px]"
              >
                🔄
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Minimize Chat"
                className="w-6 h-6 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer text-[10px]"
              >
                ✖
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-2.5 bg-slate-50 overflow-y-auto space-y-2 custom-scrollbar text-[11px]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-fadeIn`}
              >
                {/* Message Bubble */}
                <div
                  className={`max-w-[88%] p-2 rounded-xl ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none shadow-2xs font-medium'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-2xs'
                  }`}
                >
                  <p className="whitespace-pre-line leading-snug">{msg.text}</p>

                  {/* Language Selector Buttons */}
                  {msg.type === 'language' && (
                    <div className="mt-2 flex gap-1.5">
                      <button
                        onClick={() => handleSelectLanguage('en')}
                        className="flex-1 py-1.5 px-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] rounded-lg shadow-2xs transition-all cursor-pointer text-center"
                      >
                        English 🇬🇧
                      </button>
                      <button
                        onClick={() => handleSelectLanguage('hi')}
                        className="flex-1 py-1.5 px-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-[10px] rounded-lg shadow-2xs transition-all cursor-pointer text-center"
                      >
                        हिंदी 🇮🇳
                      </button>
                    </div>
                  )}

                  {/* Main Menu Options */}
                  {msg.type === 'mainMenu' && (
                    <div className="mt-2 grid grid-cols-2 gap-1">
                      <button
                        onClick={() => handleSelectCTA('quiz')}
                        className="col-span-2 py-1.5 px-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-[10px] rounded-lg transition-all cursor-pointer text-center flex items-center justify-center gap-1 shadow-2xs border border-amber-300"
                      >
                        🎯 {language === 'hi' ? '60-सेकंड स्कूल फिट क्विज़' : '60-Sec School Fit Quiz'}
                      </button>
                      <button
                        onClick={() => handleSelectCTA('fee')}
                        className="py-1.5 px-2 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 font-bold text-[10px] rounded-lg transition-all cursor-pointer text-left flex items-center gap-1 truncate"
                      >
                        💰 {language === 'hi' ? 'फ़ीस' : 'Fee'}
                      </button>
                      <button
                        onClick={() => handleSelectCTA('facilities')}
                        className="py-1.5 px-2 bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 font-bold text-[10px] rounded-lg transition-all cursor-pointer text-left flex items-center gap-1 truncate"
                      >
                        🏫 {language === 'hi' ? 'सुविधाएं' : 'Facilities'}
                      </button>
                      <button
                        onClick={() => handleSelectCTA('admission')}
                        className="py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-bold text-[10px] rounded-lg transition-all cursor-pointer text-left flex items-center gap-1 truncate"
                      >
                        🎓 {language === 'hi' ? 'एडमिशन' : 'Admission'}
                      </button>
                      <button
                        onClick={() => handleSelectCTA('direction')}
                        className="py-1.5 px-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold text-[10px] rounded-lg transition-all cursor-pointer text-left flex items-center gap-1 truncate"
                      >
                        📍 {language === 'hi' ? 'लोकेशन' : 'Directions'}
                      </button>
                      <button
                        onClick={() => handleSelectCTA('liveChat')}
                        className="col-span-2 py-1.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[10px] rounded-lg transition-all cursor-pointer text-center flex items-center justify-center gap-1 shadow-2xs"
                      >
                        💬 {language === 'hi' ? 'व्हाट्सएप चैट' : 'WhatsApp Chat'}
                      </button>
                    </div>
                  )}

                  {/* Class Selection Grid */}
                  {msg.type === 'classList' && (
                    <div className="mt-2 grid grid-cols-3 gap-1 max-h-[140px] overflow-y-auto p-1 bg-slate-50 rounded-lg border border-slate-100">
                      {[
                        'Play / Nursery',
                        'LKG',
                        'UKG',
                        'Class 1',
                        'Class 2',
                        'Class 3',
                        'Class 4',
                        'Class 5',
                        'Class 6',
                        'Class 7',
                        'Class 8',
                        'Class 9',
                        'Class 10',
                        'Class 11',
                        'Class 12',
                      ].map((cls) => (
                        <button
                          key={cls}
                          onClick={() => handleSelectClass(cls)}
                          className="py-1 px-1 bg-white hover:bg-blue-600 hover:text-white text-slate-800 border border-slate-200 font-bold text-[9px] rounded transition-all cursor-pointer text-center truncate"
                        >
                          {cls}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Phone Input Form */}
                  {msg.type === 'phoneInput' && msg.classSelected && (
                    <form
                      onSubmit={(e) => handleSubmitPhone(e, msg.classSelected!)}
                      className="mt-2 space-y-1.5"
                    >
                      <div className="relative">
                        <span className="absolute left-2 top-1.5 text-[9px] font-bold text-slate-500">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={phoneInput}
                          onChange={(e) => setPhoneInput(e.target.value.replace(/\D/g, ''))}
                          placeholder="10-digit mobile"
                          className="w-full pl-8 pr-1.5 py-1 bg-slate-50 border border-slate-300 rounded text-[10px] outline-none focus:ring-1 focus:ring-blue-600 font-semibold text-slate-900"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-[10px] rounded shadow-2xs transition-all cursor-pointer"
                      >
                        {language === 'hi' ? 'फ़ोन दर्ज कर फ़ीस देखें 🔓' : 'Unlock Fee Chart 🔓'}
                      </button>
                    </form>
                  )}

                  {/* Fee Result Card */}
                  {msg.type === 'feeResult' && msg.feeData && (
                    <div className="mt-2 space-y-2 bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200 text-xs">
                      <div className="flex justify-between items-center pb-1 border-b border-blue-200">
                        <span className="text-slate-600 font-medium">Selected Class:</span>
                        <span className="font-bold text-blue-900">{msg.classSelected}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 bg-white/90 px-2 rounded border border-blue-100">
                        <span className="text-slate-700 font-semibold">Monthly Tuition Fee:</span>
                        <span className="font-extrabold text-emerald-600 text-sm">₹{msg.feeData.monthlyFee.toLocaleString('en-IN')}/month</span>
                      </div>

                      <button
                        onClick={() =>
                          window.open(
                            `https://wa.me/919631160967?text=Hi%20RSK%20Public%20School%2C%20I%20enquired%20for%20${encodeURIComponent(msg.classSelected || '')}%20monthly%20tuition%20fee%20(%E2%82%B9${msg.feeData?.monthlyFee}%2Fmonth).`,
                            '_blank'
                          )
                        }
                        className="w-full mt-2 py-1.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded transition-all cursor-pointer text-center block shadow-xs"
                      >
                        💬 Chat on WhatsApp for Admission
                      </button>
                    </div>
                  )}

                  {/* Admission Action CTA */}
                  {msg.type === 'admission' && (
                    <div className="mt-2 space-y-1">
                      <button
                        onClick={triggerSchoolQuiz}
                        className="w-full py-1.5 px-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-[10px] rounded-lg shadow-2xs transition-all cursor-pointer flex items-center justify-center gap-1"
                      >
                        🎯 {language === 'hi' ? '60-सेकंड क्विज़ शुरू करें' : 'Take 60-Sec Quiz'}
                      </button>
                    </div>
                  )}

                  {/* Direction Link */}
                  {msg.type === 'direction' && (
                    <div className="mt-2">
                      <a
                        href="https://maps.google.com/?q=RSK+Public+School+Bastipur+Dehri+Bihar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 px-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[10px] rounded-lg shadow-2xs transition-all cursor-pointer text-center flex items-center justify-center gap-1"
                      >
                        🗺️ {language === 'hi' ? 'गूगल मैप्स में देखें' : 'Open Google Maps'}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Bar Options */}
          <div className="py-1.5 px-2.5 bg-white border-t border-slate-100 flex items-center justify-between text-[10px] shrink-0">
            <button
              onClick={() => handleSelectLanguage(language === 'hi' ? 'en' : 'hi')}
              className="text-blue-700 font-bold hover:underline cursor-pointer"
            >
              🌐 {language === 'hi' ? 'English' : 'हिंदी'}
            </button>
            <button
              onClick={handleRestartChat}
              className="text-slate-500 font-medium hover:text-slate-900 cursor-pointer"
            >
              🔄 Main Menu
            </button>
          </div>
        </div>
      )}

      {/* Floating Bot Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group relative flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 hover:from-blue-800 hover:to-indigo-800 text-white font-extrabold text-xs rounded-full shadow-xl hover:shadow-blue-900/40 transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-amber-300"
        title="RSK Public School Bot"
      >
        <div className="relative flex items-center justify-center text-base animate-bounce">
          🤖
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 border border-slate-900 rounded-full"></span>
        </div>
        <span className="hidden sm:inline text-[11px] font-bold text-amber-300">
          RSK Bot
        </span>
        <span className="w-4 h-4 bg-amber-400 text-slate-950 font-black text-[9px] rounded-full flex items-center justify-center shadow-2xs">
          1
        </span>
      </button>
    </div>
  );
}

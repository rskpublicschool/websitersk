import Link from 'next/link';
import Image from 'next/image';
import Button from './components/Button';
import SectionTitle from './components/SectionTitle';
import { Card, CardBody } from './components/Card';
import CounterStat from './components/CounterStat';
import VisitorCounterRobust from './components/VisitorCounterRobust';
import AdmissionPopup from './components/AdmissionPopup';
import ChatbotWidget from './components/ChatbotWidget';
import HeroCarousel from './components/HeroCarousel';
import { schoolInfo } from './lib/schoolData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best CBSE School in Dehri on Sone - RSK Public School | Top School Bihar',
  description: 'RSK Public School - Best CBSE school in Dehri on Sone, Bihar. Top-rated educational institution with excellent results, modern facilities, and holistic development. Admission open for 2026-27. Call 9631160967 for enquiry.',
  keywords: 'best CBSE school Dehri on Sone, top school Dehri on Sone, best school Dehri on Sone, RSK Public School, CBSE admission Dehri, quality education Bihar, school admission 2026-27',
  openGraph: {
    title: 'Best CBSE School in Dehri on Sone - RSK Public School',
    description: 'Top-rated CBSE school in Dehri on Sone with excellent results and modern facilities. Admission open for 2026-27.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best CBSE School in Dehri on Sone - RSK Public School',
    description: 'Top-rated CBSE school in Dehri on Sone with excellent results and modern facilities. Admission open for 2026-27.',
  },
};

/* ─────────────────────────────────────────────────────────
   DESIGN TOKENS — "Academic Record" system
   Deep forest ink + warm paper, brass & maroon crest accents.
   Every color/spacing decision on this page derives from here.
───────────────────────────────────────────────────────── */
const theme = {
  ink: '#142822',
  ink2: '#1c362d',
  ink3: '#0e1f19',
  paper: '#f5f6f0',
  paperAlt: '#eeeadd',
  brass: '#a9832f',
  brassLight: '#d9b869',
  brassDeep: '#8a6a24',
  maroon: '#7a2333',
  maroonLight: '#f4e7ea',
  sage: '#4f7161',
  inkMuted: '#5b6b60',
  line: '#ddd6c4',
};

const schoolJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'RSK Public School',
  description: 'CBSE-affiliated school in Dehri on Sone, Bihar, established in 2007, offering holistic education from foundational to senior secondary levels.',
  foundingDate: '2007',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dehri on Sone',
    addressRegion: 'Bihar',
    addressCountry: 'IN',
  },
  telephone: '+91-9631160967',
};

/* ── Signature element: scalloped "seal" badge, echoing the
   certificates and board disclosures a CBSE school issues ── */
function Seal({
  children,
  size = 56,
  tone = 'brass',
}: {
  children: React.ReactNode;
  size?: number;
  tone?: 'brass' | 'maroon' | 'paper';
}) {
  const color = tone === 'brass' ? theme.brass : tone === 'maroon' ? theme.maroon : theme.paper;
  return (
    <div style={{ width: size, height: size }} className="relative flex items-center justify-center shrink-0">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <path
          d="M50 3 L58.5 11 L70 6.5 L74 18 L86 18 L86 30 L97.5 34 L93.5 45.5 L100 53 L93.5 60.5 L97.5 72 L86 72 L86 84 L74 84 L70 95.5 L58.5 91 L50 99 L41.5 91 L30 95.5 L26 84 L14 84 L14 72 L2.5 72 L6.5 60.5 L0 53 L6.5 45.5 L2.5 34 L14 30 L14 18 L26 18 L30 6.5 L41.5 11 Z"
          fill="none"
          stroke={color}
          strokeWidth="1.4"
          opacity="0.65"
        />
        <circle cx="50" cy="50" r="38" fill="none" stroke={color} strokeWidth="0.75" opacity="0.4" />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}

/* ── Eyebrow: hairline-flanked label, used above every heading ── */
function Eyebrow({ children, tone = 'brass', invert = false }: { children: React.ReactNode; tone?: 'brass' | 'maroon'; invert?: boolean }) {
  const color = invert ? theme.brassLight : tone === 'brass' ? theme.brass : theme.maroon;
  return (
    <div className="inline-flex items-center gap-3 mb-4">
      <span style={{ width: 26, height: 1, background: color }} />
      <span
        style={{ color, fontFamily: 'var(--font-mono, ui-monospace, monospace)' }}
        className="text-[11px] font-semibold uppercase tracking-[0.28em]"
      >
        {children}
      </span>
      <span style={{ width: 26, height: 1, background: color }} />
    </div>
  );
}

/* ── FramedPhoto: photos "pinned into the register" with a brass tag ── */
function FramedPhoto({
  children,
  tag,
  className = '',
}: {
  children: React.ReactNode;
  tag?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative p-2 ${className}`}
      style={{ background: 'transparent', border: `1px solid ${theme.line}`, boxShadow: '0 24px 60px -28px rgba(14,31,25,0.45)' }}
    >
      <div className="relative overflow-hidden">{children}</div>
      {tag && (
        <div
          className="absolute -top-3 left-5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
          style={{ background: theme.brass, color: theme.ink }}
        >
          {tag}
        </div>
      )}
    </div>
  );
}

/* ── Ledger rule: thin double-line divider, echoing report-card rules ── */
function LedgerRule({ tone = theme.line }: { tone?: string }) {
  return (
    <div className="w-full" aria-hidden="true">
      <div style={{ height: 1, background: tone }} />
      <div style={{ height: 1, background: tone, marginTop: 3, opacity: 0.55 }} />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: theme.paper, fontFamily: 'var(--font-body, "Public Sans", ui-sans-serif, system-ui)' }}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }}
      />

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes gentleRise { from { opacity: 0; transform: translateY(10px) scale(0.99); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .rsk-fade { animation: fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .rsk-rise { animation: gentleRise 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .rsk-fade, .rsk-rise { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
        .rsk-display { font-family: var(--font-display, 'Newsreader', ui-serif, Georgia, serif); }
        .rsk-mono { font-family: var(--font-mono, ui-monospace, 'IBM Plex Mono', monospace); }
        .rsk-ledger-card { transition: border-color .35s ease, transform .35s ease; }
        .rsk-ledger-card:hover { transform: translateY(-3px); }
        .rsk-link-underline { background-image: linear-gradient(currentColor,currentColor); background-position: 0 100%; background-repeat: no-repeat; background-size: 0% 1px; transition: background-size .3s ease; }
        .rsk-link-underline:hover { background-size: 100% 1px; }
      `}</style>

      <AdmissionPopup />
      <ChatbotWidget />

      {/* ══════════════════════════════════════════════════════
          HERO — deep forest register, brass seal & ledger grid
      ══════════════════════════════════════════════════════ */}
      <section id="hero" className="relative text-white overflow-hidden" style={{ background: theme.ink }}>
        {/* Ledger grid texture, replacing glowing orbs */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${theme.brassLight} 1px, transparent 1px), linear-gradient(90deg, ${theme.brassLight} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 900px 500px at 15% 0%, rgba(169,131,47,0.14) 0%, transparent 60%)` }}
        />

        {/* Documentary background photograph of the school */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Rsk public school dehri model image.webp"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: 0.32 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(140deg, ${theme.ink} 0%, rgba(20,40,34,0.86) 45%, rgba(14,31,25,0.82) 100%)` }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full">

            {/* ── Left: record card copy ── */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">

              <div className="rsk-fade flex items-center gap-4 mb-7" style={{ animationDelay: '0.05s' }}>
                <Seal size={54} tone="brass">
                  <span className="rsk-mono text-[10px] font-bold tracking-wider" style={{ color: theme.brassLight }}>
                    EST.
                    <br />
                    <span className="text-sm">{schoolInfo.establishedYear}</span>
                  </span>
                </Seal>
                <div className="text-left">
                  <p className="rsk-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: theme.brassLight }}>
                    CBSE Affiliated Institution
                  </p>
                  <p className="text-xs text-[#9fb0a6] mt-0.5">Dehri on Sone, Bihar</p>
                </div>
              </div>

              {/* Achievement notice — styled as a stamped entry, not a glowing pill */}
              <div className="rsk-fade w-full" style={{ animationDelay: '0.15s' }}>
                <div
                  className="inline-flex items-center gap-3 mb-7 px-4 py-2.5 text-left"
                  style={{ border: `1px solid rgba(217,184,105,0.35)`, background: 'rgba(217,184,105,0.06)' }}
                >
                  <span className="rsk-mono text-[10px] font-bold px-1.5 py-0.5" style={{ background: theme.brass, color: theme.ink }}>
                    NEW
                  </span>
                  <span className="text-xs sm:text-sm text-[#e7ddc4]">25 students win Gold in the National Science Olympiad</span>
                </div>
              </div>

              <div className="rsk-fade" style={{ animationDelay: '0.25s' }}>
                <h1 className="rsk-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] mb-6">
                  <span className="text-white">Welcome to RSK,</span>
                  <br />
                  <span className="italic" style={{ color: theme.brassLight }}>Best CBSE School</span>
                  <br />
                  <span className="text-white">in Dehri</span>
                </h1>
              </div>

              <div className="rsk-fade" style={{ animationDelay: '0.35s' }}>
                <p className="text-base sm:text-lg text-[#a9bab0] max-w-xl mb-9 leading-relaxed">
                  Real progress, measurable performance outcome — building future leaders through
                  quality education and holistic development.
                </p>
              </div>

              <div className="rsk-fade w-full" style={{ animationDelay: '0.45s' }}>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center lg:justify-start mb-9">
                  <Link
                    href="/admissions"
                    className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: theme.brass, boxShadow: '0 14px 30px -12px rgba(169,131,47,0.55)' }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Apply for Admission
                  </Link>

                  <Link
                    href="/online-tuition"
                    className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{ border: '1px solid rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.04)' }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Want Online Tuition
                  </Link>
                </div>
              </div>
            </div>

            {/* ── Right: carousel, framed like a register photograph ── */}
            <div className="lg:col-span-6 w-full rsk-rise" style={{ animationDelay: '0.3s' }}>
              <FramedPhoto tag="RSK Public School — Bastipur, Dehri">
                <HeroCarousel />
              </FramedPhoto>
            </div>
          </div>

          {/* ── Explore strip — ledger tabs, not glass pills ── */}
          <div className="mt-14 pt-10 max-w-4xl mx-auto w-full rsk-fade" style={{ animationDelay: '0.55s' }}>
            <LedgerRule tone="rgba(255,255,255,0.12)" />
            <p className="text-center rsk-mono text-[11px] text-[#8a9a90] uppercase tracking-[0.25em] my-6">
              Explore Our School
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {[
                { href: '/teachers', label: "Teacher's Experience", icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
                { href: '/parents', label: 'Parents Experience', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                { href: '/academics', label: "Student's Experience", icon: 'M12 14l9-5-9-5-9 5 9 5z' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#dbe4dc] transition-all duration-300 hover:text-white"
                  style={{ border: '1px solid rgba(255,255,255,0.14)' }}
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke={theme.brassLight} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS — "Progress Report" ledger cells
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20" style={{ background: theme.paper }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Eyebrow>By The Numbers</Eyebrow>
            <h2 className="rsk-display text-2xl sm:text-3xl lg:text-4xl" style={{ color: theme.ink }}>
              Our Progress Report
            </h2>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
            style={{ border: `1px solid ${theme.line}`, background: '#fffdf8' }}
          >
            {[
              { endValue: 20, suffix: '+', label: 'Years of Excellence' },
              { endValue: 2500, suffix: '+', label: 'Students' },
              { endValue: 50, suffix: '+', label: 'Qualified Teachers' },
              { endValue: 100, suffix: '%', label: 'Results' },
              { endValue: 60, suffix: '%', label: 'Visible Change in 1 Year' },
              { endValue: 25, suffix: '', label: 'Olympiad Gold Medals' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="px-4 py-8 text-center"
                style={{
                  borderRight: i % 2 === 0 || (i + 1) % 3 !== 0 ? `1px solid ${theme.line}` : undefined,
                  borderTop: i >= 2 ? `1px solid ${theme.line}` : undefined,
                }}
              >
                <CounterStat
                  endValue={stat.endValue}
                  suffix={stat.suffix}
                  label={stat.label}
                  colorClass=""
                  iconClass=""
                  duration={8000}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BOARD ACHIEVERS — dark register panel
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24" style={{ background: theme.ink2 }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${theme.brassLight} 1px, transparent 1px), linear-gradient(90deg, ${theme.brassLight} 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <Eyebrow invert>CBSE Board Excellence</Eyebrow>
            <h2 className="rsk-display text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
              Our Board Achievers
            </h2>
            <p className="text-base sm:text-lg text-[#b7c2ba] max-w-3xl mx-auto leading-relaxed">
              We are thrilled to announce our CBSE Board toppers! These exceptional students have scored outstanding
              percentages in the CBSE Board examinations 2026 for both 10th and 12th standards, making us proud with
              their dedication and excellence.
            </p>
          </div>

          {/* Achievement photograph, sealed like an official result */}
          <div className="mb-16 flex justify-center">
            <FramedPhoto tag="Board Result 2026" className="max-w-4xl w-full">
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src="/achievements/schooltoppers_and_achievers_image_with_principal_group_rsk_public_school_bastipur_dehri.jpeg"
                  alt="CBSE Board toppers and achievers with principal at RSK Public School celebration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
            </FramedPhoto>
          </div>

          {/* Topper testimonial */}
          <div className="mb-4">
            <h3 className="rsk-display text-2xl sm:text-3xl text-center text-white mb-10">Hear From Our Topper</h3>
            <div className="flex justify-center">
              <FramedPhoto tag="93% — Class 12th" className="w-full max-w-[300px]">
                <div className="aspect-[9/16] bg-black flex items-center justify-center">
                  <video controls poster="/achievements/girl_topper_poster.jpg" className="w-full h-full object-contain bg-black" preload="metadata">
                    <source src="https://drive.google.com/uc?export=download&id=1HZgQEmJbJrmNW2P6o7zrJ3bYGPU7GI7w" type="video/mp4" />
                    <source src="/achievements/girl_topper_93_percent_video_rsk_public_school_bastipur_dehri.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold" style={{ color: theme.ink }}>Board Topper Testimonial</h4>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: theme.inkMuted }}>
                    Hear from our Class 12th topper about her achievement at RSK Public School.
                  </p>
                </div>
              </FramedPhoto>
            </div>
          </div>

          <div className="text-center mt-14">
            <p className="text-[#9fb0a6] text-base mb-7 max-w-2xl mx-auto">
              Join the ranks of our successful students! With dedicated faculty, comprehensive curriculum, and
              personalized attention, we nurture each student to achieve their full potential.
            </p>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2.5 px-8 py-4 font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: theme.brass, boxShadow: '0 14px 30px -12px rgba(169,131,47,0.5)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHY CHOOSE US — ledger cards
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24" style={{ background: theme.paper }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Eyebrow>Our Strengths</Eyebrow>
            <h2 className="rsk-display text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: theme.ink }}>
              Why Choose RSK Public School?
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: theme.inkMuted }}>
              What makes us the preferred choice for quality education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'CBSE Curriculum', desc: 'Following the latest CBSE guidelines with focus on holistic development and practical learning.', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
              { title: 'Safe Environment', desc: 'Secured campus with CCTV surveillance, safe transport, and trained staff ensuring student safety.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { title: 'Modern Infrastructure', desc: 'Well-equipped labs, digital classrooms, library, and sports facilities for comprehensive learning.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { title: 'Experienced Faculty', desc: "Dedicated and qualified teachers committed to nurturing each student's potential and growth.", icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { title: 'Co-Curricular Activities', desc: 'Sports, arts, music, and cultural programs to develop well-rounded personalities.', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Excellent Results', desc: 'Consistent outstanding performance in board exams and competitive examinations.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rsk-ledger-card p-8"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? `1px solid ${theme.line}` : undefined,
                  borderTop: i >= 3 ? `1px solid ${theme.line}` : undefined,
                  borderBottom: i < 3 ? `1px solid ${theme.line}` : undefined,
                }}
              >
                <div className="mb-5 flex items-center gap-4">
                  <Seal size={48} tone={i % 2 === 0 ? 'brass' : 'maroon'}>
                    <svg className="w-5 h-5" fill="none" stroke={i % 2 === 0 ? theme.brass : theme.maroon} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d={item.icon} />
                    </svg>
                  </Seal>
                </div>
                <h3 className="rsk-display text-lg mb-2" style={{ color: theme.ink }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: theme.inkMuted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT US
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24" style={{ background: theme.ink }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Eyebrow invert>Our Heritage</Eyebrow>
            <h2 className="rsk-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4">About RSK Public School</h2>
            <p className="text-base text-[#b7c2ba] max-w-xl mx-auto">Our story, leadership, and commitment to excellence</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-10">
            {/* Intro, set as a record entry with an oversized quote seal */}
            <div className="relative px-8 sm:px-14 py-10 sm:py-12 text-center" style={{ border: '1px solid rgba(217,184,105,0.25)' }}>
              <div className="flex justify-center mb-6">
                <Seal size={52} tone="brass">
                  <span className="rsk-display italic text-2xl" style={{ color: theme.brassLight }}>&ldquo;</span>
                </Seal>
              </div>
              <p className="rsk-display text-lg sm:text-xl text-white leading-relaxed mb-5">
                Established in 2007, R.S.K Public School has been a landmark of quality education in Dehri, Bihar.
                Affiliated with the Central Board of Secondary Education (CBSE), we are committed to nurturing young
                minds and shaping future leaders through holistic education.
              </p>
              <p className="text-[#9fb0a6] text-sm leading-relaxed">
                Our journey of over two decades has been marked by academic excellence, innovative teaching methods,
                and a deep commitment to student development.
              </p>
            </div>

            {/* Leadership */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { href: '/about/director', src: '/directorsir.jpg', alt: 'Director - RSK Public School', title: "Director's Message", desc: 'Read about our vision and commitment to educational excellence' },
                { href: '/about/principal', src: '/principalsir.jpeg', alt: 'Principal of RSK Public School', title: "Principal's Message", desc: 'Learn about our academic leadership and student-first approach' },
              ].map((person) => (
                <Link key={person.href} href={person.href} className="group block">
                  <FramedPhoto tag={person.title}>
                    <div className="h-64 relative overflow-hidden mt-2">
                      <Image
                        src={person.src}
                        alt={person.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 480px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <p className="text-sm mb-3" style={{ color: theme.inkMuted }}>{person.desc}</p>
                      <span
                        className="rsk-link-underline inline-flex items-center gap-2 text-sm font-semibold pb-0.5"
                        style={{ color: theme.maroon }}
                      >
                        Read Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </FramedPhoto>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INFORMATION HUB — index-card catalogue
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24" style={{ background: theme.paper }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Eyebrow>Resources</Eyebrow>
            <h2 className="rsk-display text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: theme.ink }}>
              School Information Hub
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: theme.inkMuted }}>
              Quick access to essential school information, services, and updates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { href: '/notice-board', category: 'Updates & Announcements', title: 'Notice Board', desc: 'Stay updated with our latest school news, events, and important announcements.', cta: 'View All', tone: 'brass', iconPath: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
              { href: '/online-tuition', category: 'Online Learning', title: 'Online Tuition Classes', desc: 'Expert online tutoring sessions for all subjects with personalized attention and flexible timings.', cta: 'Enroll Now', tone: 'maroon', iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { href: '/disclosure', category: 'Official Documents', title: 'Mandatory Disclosure', desc: 'Access all mandatory disclosure documents, certificates, and school compliance information.', cta: 'View Documents', tone: 'brass', iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { href: '/teachers#careers', category: 'Join Our Team', title: 'Careers', desc: 'Explore teaching and non-teaching job opportunities. Join our dedicated team of educators.', cta: 'Apply Now', tone: 'maroon', iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { href: '/about/discipline', category: 'Updated Guidelines', title: 'Latest Dress Code & Routine', desc: 'Check out the updated school dress code, daily routine, and important guidelines for students.', cta: 'View Guidelines', tone: 'brass', iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { href: '/academics', category: 'CBSE Curriculum', title: 'Academics', desc: 'Discover our comprehensive CBSE curriculum, academic calendar, and best practices in education.', cta: 'Explore', tone: 'maroon', iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
            ].map((item) => {
              const accent = item.tone === 'brass' ? theme.brass : theme.maroon;
              return (
                <div key={item.href} className="rsk-ledger-card bg-white" style={{ border: `1px solid ${theme.line}`, borderTop: `3px solid ${accent}` }}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <p className="rsk-mono text-[10px] font-bold uppercase tracking-wider" style={{ color: accent }}>{item.category}</p>
                      <Seal size={38} tone={item.tone as 'brass' | 'maroon'}>
                        <svg className="w-4 h-4" fill="none" stroke={accent} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={item.iconPath} />
                        </svg>
                      </Seal>
                    </div>
                    <h3 className="rsk-display text-lg mb-2" style={{ color: theme.ink }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: theme.inkMuted }}>{item.desc}</p>
                    <Link href={item.href} className="rsk-link-underline inline-flex items-center gap-1.5 text-sm font-semibold pb-0.5" style={{ color: accent }}>
                      {item.cta}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SCIENCE OLYMPIAD — dark medal panel
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20" style={{ background: theme.ink2 }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto" style={{ border: '1px solid rgba(217,184,105,0.25)' }}>
            <div className="p-8 sm:p-12">
              <div className="text-center mb-10">
                <div className="flex justify-center mb-5">
                  <Seal size={64} tone="brass">
                    <svg className="w-6 h-6" fill={theme.brassLight} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </Seal>
                </div>
                <Eyebrow invert>Latest Achievement</Eyebrow>
                <h2 className="rsk-display text-2xl sm:text-3xl lg:text-4xl text-white mb-5">Science Olympiad Champions</h2>
                <p className="text-base sm:text-lg text-[#b7c2ba] max-w-3xl mx-auto">
                  We&apos;re thrilled to announce that <strong className="text-white font-semibold">25 of our brilliant students</strong> have
                  won <strong style={{ color: theme.brassLight }}>Gold Medal of Excellence</strong> in the SOF National Science Olympiad,
                  achieving top international rankings.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 mb-10" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                {[
                  { value: '25', label: 'Gold Medal Winners' },
                  { value: '100', label: 'Students Participated' },
                  { value: '7', label: 'Classes Represented' },
                ].map((stat, i) => (
                  <div key={stat.label} className="text-center py-7" style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.1)' : undefined }}>
                    <div className="rsk-display text-4xl mb-2" style={{ color: theme.brassLight }}>{stat.value}</div>
                    <div className="rsk-mono text-[11px] uppercase tracking-wider text-[#9fb0a6]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-[#9fb0a6] text-sm mb-6">
                  From Class 1 to Class 10, our students have made us proud with their dedication to science and learning.
                  The Director has announced special expert guidance programs for these achievers.
                </p>
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ border: '1px solid rgba(217,184,105,0.4)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke={theme.brassLight} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View All Achievements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STUDENT ACTIVITIES GALLERY
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24" style={{ background: theme.paper }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Eyebrow>Campus Life</Eyebrow>
            <h2 className="rsk-display text-3xl sm:text-4xl" style={{ color: theme.ink }}>Student Activities &amp; Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { src: '/schoolimages/rsk public school dehri students NCC cadet stunt girls and boys (1).jpeg', alt: 'NCC cadet activities developing discipline and leadership', title: 'NCC Training', desc: 'Building discipline, leadership, and patriotic values through NCC activities', tag: 'Leadership' },
              { src: '/activitiesandevent/rsk public school dehri annuals day celebration.jpg', alt: 'Students showcasing talents in annual day celebration at RSK', title: 'Annual Day Celebration', desc: 'Grand annual celebration with dance, drama, music, and cultural performances', tag: 'Culture' },
              { src: '/activitiesandevent/rsk public school dehri sports day celebration.jpg', alt: 'Students participating in exciting sports day events', title: 'Sports Day Events', desc: 'Exciting sports competitions fostering teamwork, fitness, and healthy competition', tag: 'Sports' },
              { src: '/activitiesandevent/rsk public school dehri science fair innovation.jpg', alt: 'Students presenting innovative science projects', title: 'Science Fair & Innovation', desc: 'Encouraging scientific thinking and innovation through hands-on project exhibitions', tag: 'Innovation' },
            ].map((item) => (
              <FramedPhoto key={item.title} tag={item.tag}>
                <div className="relative h-48 overflow-hidden mt-2">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="rsk-display text-base mb-1.5" style={{ color: theme.ink }}>{item.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: theme.inkMuted }}>{item.desc}</p>
                </div>
              </FramedPhoto>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#hero"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: theme.ink }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-20 lg:py-24 text-white" style={{ background: theme.ink }}>
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${theme.brassLight} 1px, transparent 1px), linear-gradient(90deg, ${theme.brassLight} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Seal size={50} tone="brass">
              <span className="rsk-mono text-[9px] font-bold" style={{ color: theme.brassLight }}>2026-27</span>
            </Seal>
          </div>
          <Eyebrow invert>Admissions Open</Eyebrow>
          <h2 className="rsk-display text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight">
            Ready to Join Our School Community?
          </h2>
          <p className="text-base sm:text-lg text-[#b7c2ba] mb-10 max-w-2xl mx-auto leading-relaxed">
            Give your child the gift of quality education and holistic development. Start their journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/admissions" variant="secondary" size="lg" className="w-full sm:w-auto">
              Apply for Admission
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      {/* ── WhatsApp floating CTA ── */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <a
          href="https://wa.me/919631160967?text=Hey%20RSK%2C%20I%20wanted%20to%20enquire"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
          style={{ background: '#25d366', boxShadow: `0 4px 24px rgba(37,211,102,0.45), 0 0 0 3px ${theme.paper}, 0 0 0 4px ${theme.brass}` }}
          title="Chat with us on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          <div
            className="absolute -top-10 right-0 text-white text-xs px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ background: theme.ink }}
          >
            Talk on WhatsApp!
          </div>
        </a>
      </div>

      {/* Hidden Visitor Counter */}
      <div className="hidden">
        <VisitorCounterRobust showIcon={false} />
      </div>
    </div>
  );
}
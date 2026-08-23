'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── Shared with page theme tokens ── */
const T = {
  ink: '#142822',
  ink2: '#1c362d',
  ink3: '#0e1f19',
  paper: '#f5f6f0',
  brass: '#a9832f',
  brassLight: '#d9b869',
  maroon: '#7a2333',
  line: '#ddd6c4',
};

export interface SlideItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  description?: string;
}

const HERO_SLIDES: SlideItem[] = [
  { id: 'campus-model', src: '/corousalimages/Rsk public school dehri model image.webp', alt: 'RSK Public School Campus Building Dehri on Sone', title: 'RSK Public School Campus', category: 'Main Campus', description: 'Modern infrastructure with spacious classrooms and lush green campus in Dehri on Sone.' },
  { id: 'classroom-2', src: '/corousalimages/classroom2.jpeg', alt: 'Modern Interactive Classrooms at RSK Public School', title: 'Modern Digital Classrooms', category: 'Academics', description: 'Spacious, well-ventilated, and digitally enabled learning environment for deep conceptual understanding.' },
  { id: 'classroom-3', src: '/corousalimages/classroom3.jpeg', alt: 'Active Learning Environment at RSK', title: 'Engaging & Active Learning', category: 'Academics', description: 'Dynamic classroom sessions fostering student curiosity, collaboration, and critical thinking.' },
  { id: 'computer-lab', src: '/corousalimages/computerlab2.jpeg', alt: 'Advanced Computer Laboratory at RSK Public School', title: 'Modern Computer Laboratory', category: 'Technology', description: 'Equipped with modern IT workstations empowering students with digital literacy, coding, and software skills.' },
  { id: 'biology-lab', src: '/corousalimages/biolab2.jpeg', alt: 'Biology and Science Laboratory at RSK Public School', title: 'Advanced Science & Biology Lab', category: 'Innovation', description: 'State-of-the-art laboratory for hands-on experiments, scientific investigation, and practical learning.' },
  { id: 'playschool-class', src: '/corousalimages/playschoolclassroom.jpeg', alt: 'Play School & Junior Wing Classroom at RSK', title: 'Junior & Play School Wing', category: 'Early Learning', description: 'Vibrant, joyful, and creative activity-based classrooms nurturing our youngest learners.' },
  { id: 'academic-excellence', src: '/corousalimages/cbse school in dehri on sone RSK public school academic excellence.jpeg', alt: 'Academic Excellence and Student Guidance at RSK', title: 'Academic Excellence & Mentorship', category: 'Excellence', description: 'Dedicated faculty nurturing student potential through individual attention and structured curriculum.' },
  { id: 'chief-guests', src: '/corousalimages/chief guests and management.jpeg', alt: 'Distinguished Guests and Management at RSK Public School', title: 'Leadership & Distinguished Guests', category: 'Leadership', description: 'Visionary leadership, esteemed dignitaries, and management committed to quality education.' },
  { id: 'teachers-group', src: '/corousalimages/rsk public school teachers group photo.jpeg', alt: 'Experienced and Dedicated Faculty at RSK Public School', title: 'Our Dedicated Faculty Team', category: 'Faculty', description: 'Highly qualified, passionate, and caring teachers shaping the future of every student.' },
  { id: 'model-exhibition', src: '/corousalimages/rsk public school dehri food stall students model exhibition 11.jpeg', alt: 'Science and Model Exhibition at RSK Public School', title: 'Science & Model Exhibition', category: 'Innovation', description: 'Students showcasing practical working models, scientific creativity, and problem-solving innovations.' },
  { id: 'bal-mela', src: '/corousalimages/rsk public school dehri food stall students bal mela (4).jpeg', alt: 'Bal Mela and Cultural Carnival at RSK Public School', title: 'Bal Mela & Student Carnival', category: 'Student Life', description: 'Interactive cultural carnivals, creative food stalls, and joyful festive activities.' },
  { id: 'safe-transport', src: '/corousalimages/safe transport rsk public school dehri on sone best cbse school in dehri on sone.png', alt: 'Safe and Reliable Bus Transportation at RSK Public School', title: 'Safe & Secure Bus Transport', category: 'Facilities', description: 'Dedicated fleet of GPS-tracked school buses covering all major routes with trained staff.' },
];

const AUTO_ADVANCE_MS = 4500;
const MIN_SWIPE_PX = 50;

const navBtnStyle: React.CSSProperties = { background: 'rgba(20,40,34,0.7)', border: `1px solid ${T.brass}` };

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const next = useCallback(() => setIndex((p) => (p + 1) % HERO_SLIDES.length), []);
  const prev = useCallback(() => setIndex((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), []);

  useEffect(() => {
    if (paused || fullscreen) return;
    const t = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, [paused, fullscreen, next]);

  const onTouchEnd = (endX: number) => {
    if (touchStart === null) return;
    const d = touchStart - endX;
    if (d > MIN_SWIPE_PX) next();
    else if (d < -MIN_SWIPE_PX) prev();
    setTouchStart(null);
  };

  const active = HERO_SLIDES[index];

  return (
    <div className="relative w-full max-w-4xl mx-auto group" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Main frame — ink ledger card, brass ring instead of blue glow */}
      <div
        className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-300"
        style={{ background: T.ink3, border: `1px solid ${T.brass}55`, boxShadow: '0 30px 70px -30px rgba(14,31,25,0.6)' }}
        onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
        onTouchEnd={(e) => onTouchEnd(e.changedTouches[0].clientX)}
      >
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center overflow-hidden" style={{ background: T.ink3 }}>
          {/* Active image only — next/image handles sizing, lazy-loading, and format */}
          <div className="relative w-full h-full p-1 sm:p-2">
            {HERO_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center p-1 sm:p-2 ${idx === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
              >
                {/* Only mount the active slide + its neighbors, so we're not paying
                   the decode/layout cost of 11 offscreen images at once. */}
                {Math.abs(idx - index) <= 1 || (idx === 0 && index === HERO_SLIDES.length - 1) || (idx === HERO_SLIDES.length - 1 && index === 0) ? (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-contain rounded-xl sm:rounded-2xl"
                    priority={idx === 0}
                  />
                ) : null}
              </div>
            ))}
          </div>

          {/* Bottom readability gradient — ink, not slate */}
          <div className="absolute inset-x-0 bottom-0 h-28 z-20 pointer-events-none" style={{ background: `linear-gradient(to top, ${T.ink3}e6, ${T.ink3}66, transparent)` }} />

          {/* Top badge + controls */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
            <span
              className="inline-flex items-center px-3 py-1 text-white text-xs font-semibold rounded-full"
              style={{ background: `${T.brass}dd`, border: `1px solid ${T.brassLight}66` }}
            >
              <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ background: '#5fae86' }} />
              {active.category}
            </span>

            <div className="flex items-center gap-2">
              <button onClick={() => setFullscreen(true)} className="p-1.5 text-white rounded-full transition-colors hover:opacity-80" style={navBtnStyle} title="View Fullscreen" aria-label="View Fullscreen">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
              <span className="px-2.5 py-1 text-xs font-mono rounded-full text-white" style={navBtnStyle}>
                {index + 1} / {HERO_SLIDES.length}
              </span>
            </div>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none">
            <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg truncate" style={{ fontFamily: "var(--font-display, 'Newsreader', serif)" }}>
              {active.title}
            </h3>
            {active.description && (
              <p className="text-xs hidden sm:line-clamp-1 font-light" style={{ color: T.brassLight }}>
                {active.description}
              </p>
            )}
          </div>

          {/* Arrows */}
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full text-white transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110" style={navBtnStyle} aria-label="Previous Slide">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-2.5 rounded-full text-white transition-all opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110" style={navBtnStyle} aria-label="Next Slide">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Bottom strip: indicators + gallery CTA */}
        <div className="px-3 sm:px-4 py-2.5 flex items-center justify-between gap-2" style={{ background: T.ink2, borderTop: `1px solid ${T.brass}33` }}>
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setIndex(idx)}
                className="transition-all duration-300 rounded-full"
                style={{ width: idx === index ? 24 : 8, height: 8, background: idx === index ? T.brassLight : `${T.brass}55` }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <Link
            href="/gallery"
            className="group/cta inline-flex items-center gap-1.5 px-3 py-1.5 text-white text-xs font-semibold rounded-lg transition-all hover:-translate-y-0.5 flex-shrink-0"
            style={{ background: T.brass }}
          >
            <span>Check Full Gallery</span>
            <svg className="w-3.5 h-3.5 transform group-hover/cta:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Fullscreen lightbox */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(14,31,25,0.96)' }}>
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 p-3 text-white rounded-full z-50 transition-colors hover:opacity-80"
            style={{ background: T.maroon }}
            aria-label="Close Fullscreen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center">
            <div className="relative w-full" style={{ height: '80vh' }}>
              <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-contain rounded-xl" />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-display, 'Newsreader', serif)" }}>{active.title}</h4>
              <p className="text-sm mt-1" style={{ color: T.brassLight }}>{active.description}</p>
            </div>

            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-white rounded-full" style={navBtnStyle}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-white rounded-full" style={navBtnStyle}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
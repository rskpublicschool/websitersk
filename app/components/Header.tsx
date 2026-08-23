'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { navigationItems, schoolInfo } from '../lib/schoolData';

/* ─────────────────────────────────────────────────────────
   Shared "Academic Record" tokens — kept in sync with
   page.tsx and Footer.tsx. Centralize these in a theme file
   if you want a single source of truth across components.
───────────────────────────────────────────────────────── */
const theme = {
  ink: '#142822',
  paper: '#f5f6f0',
  brass: '#a9832f',
  brassLight: '#d9b869',
  brassDeep: '#8a6a24',
  maroon: '#7a2333',
  inkMuted: '#5b6b60',
  line: '#ddd6c4',
};

function Seal({ size = 52 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size }} className="absolute inset-0">
      <path
        d="M50 3 L58.5 11 L70 6.5 L74 18 L86 18 L86 30 L97.5 34 L93.5 45.5 L100 53 L93.5 60.5 L97.5 72 L86 72 L86 84 L74 84 L70 95.5 L58.5 91 L50 99 L41.5 91 L30 95.5 L26 84 L14 84 L14 72 L2.5 72 L6.5 60.5 L0 53 L6.5 45.5 L2.5 34 L14 30 L14 18 L26 18 L30 6.5 L41.5 11 Z"
        fill="none"
        stroke={theme.brass}
        strokeWidth="1.4"
        opacity="0.55"
      />
    </svg>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside the header to close mobile menu and dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    if (mobileMenuOpen || activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [mobileMenuOpen, activeDropdown]);

  return (
    <>
      <style>{`
        .rsk-mono { font-family: var(--font-mono, ui-monospace, 'IBM Plex Mono', monospace); }
        .rsk-display { font-family: var(--font-display, 'Newsreader', ui-serif, Georgia, serif); }
        .rsk-nav-link { position: relative; transition: color .25s ease; }
        .rsk-nav-link::after {
          content: ''; position: absolute; left: 50%; bottom: 2px; width: 0; height: 1px;
          background: ${theme.brass}; transition: width .3s ease, left .3s ease;
        }
        .rsk-nav-link:hover::after { width: 70%; left: 15%; }
        .rsk-dropdown-link { transition: background-color .2s ease, padding-left .2s ease; }
        .rsk-dropdown-link:hover { padding-left: 22px; }
        @keyframes rskDropdownIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
        .rsk-dropdown-in { animation: rskDropdownIn 0.18s ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .rsk-nav-link::after, .rsk-dropdown-link { transition: none !important; }
          .rsk-dropdown-in { animation: none !important; }
        }
      `}</style>

      {/* Main Header */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled ? 'rgba(245,246,240,0.96)' : theme.paper,
          backdropFilter: isScrolled ? 'blur(10px)' : undefined,
          boxShadow: isScrolled ? '0 8px 24px -16px rgba(20,40,34,0.35)' : undefined,
          borderBottom: `1px solid ${theme.line}`,
        }}
      >
        <div className="container mx-auto px-4">
          {/* Logo and School Name */}
          <div className="flex items-center justify-between py-3" style={{ borderBottom: `1px solid ${theme.line}` }}>
            <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
                <Seal size={56} />
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="/logo RSK best shcool in dehri rohtas.png"
                    alt="RSK Public School Logo"
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                  />
                </div>
              </div>
              <div>
                <h1 className="rsk-display text-[19px] sm:text-2xl md:text-[28px] leading-tight" style={{ color: theme.ink }}>
                  {schoolInfo.name}
                </h1>
                <p className="rsk-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] mt-0.5" style={{ color: theme.brassDeep }}>
                  Affiliated to C.B.S.E., New Delhi ({schoolInfo.affiliationNo})
                </p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                // Don't close dropdowns when toggling main menu
              }}
              className="lg:hidden p-2.5 transition-all duration-200"
              style={{ color: theme.ink, border: `1px solid ${theme.line}` }}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center justify-center py-2.5 gap-1">
            {navigationItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
                onClick={(e) => {
                  if (item.children) {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === item.label ? null : item.label);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className="rsk-nav-link px-4 py-2 text-sm font-semibold flex items-center"
                  style={{ color: theme.ink }}
                  onClick={() => setActiveDropdown(null)}
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <svg
                      className="inline w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:rotate-180"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: theme.brass }}
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu — ledger card, not a floating glass panel */}
                {item.children && activeDropdown === item.label && (
                  <div
                    className="rsk-dropdown-in absolute left-0 top-full mt-2 w-64 py-2 overflow-hidden"
                    style={{ background: '#fffdf8', border: `1px solid ${theme.line}`, borderTop: `2px solid ${theme.brass}`, boxShadow: '0 20px 45px -22px rgba(20,40,34,0.4)' }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="rsk-dropdown-link flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium"
                        style={{ color: theme.inkMuted }}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span style={{ width: 4, height: 4, background: theme.brass, flexShrink: 0 }} />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-6" style={{ borderTop: `1px solid ${theme.line}` }}>
              {navigationItems.map((item) => (
                <div key={item.href} className="mb-3">
                  {/* Main Navigation Item */}
                  <Link
                    href={item.href}
                    className="flex items-center px-5 py-3.5 font-semibold transition-all duration-200 mx-1"
                    style={{ color: theme.ink, background: '#fffdf8', border: `1px solid ${theme.line}`, borderLeft: `3px solid ${theme.brass}` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex-1">{item.label}</span>
                    {item.children && (
                      <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" style={{ color: theme.brass }}>
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>

                  {/* Mobile Dropdown Items - Always Visible */}
                  {item.children && (
                    <div className="mt-2 ml-5 mr-1 space-y-1.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center px-4 py-2.5 text-sm transition-all duration-200"
                          style={{ color: theme.inkMuted, borderLeft: `2px solid ${theme.line}` }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span style={{ width: 4, height: 4, background: theme.maroon, marginRight: 10, flexShrink: 0 }} />
                          <span className="font-medium">{child.label}</span>
                          <svg className="w-3.5 h-3.5 ml-auto" fill="none" stroke={theme.brass} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
import Link from 'next/link';
import { schoolInfo, quickLinks } from '../lib/schoolData';

/* ─────────────────────────────────────────────────────────
   Shared "Academic Record" tokens — kept in sync with page.tsx.
   If you centralize these in a theme file, import from there instead.
───────────────────────────────────────────────────────── */
const theme = {
  ink: '#142822',
  ink2: '#1c362d',
  ink3: '#0e1f19',
  paper: '#f5f6f0',
  brass: '#a9832f',
  brassLight: '#d9b869',
  maroon: '#7a2333',
  maroonLight: '#c9647a',
  sage: '#4f7161',
  inkMuted: '#9fb0a6',
  line: 'rgba(217,184,105,0.16)',
};

function Seal({
  children,
  size = 40,
  tone = 'brass',
}: {
  children: React.ReactNode;
  size?: number;
  tone?: 'brass' | 'maroon';
}) {
  const color = tone === 'brass' ? theme.brassLight : theme.maroonLight;
  return (
    <div style={{ width: size, height: size }} className="relative flex items-center justify-center shrink-0">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <path
          d="M50 3 L58.5 11 L70 6.5 L74 18 L86 18 L86 30 L97.5 34 L93.5 45.5 L100 53 L93.5 60.5 L97.5 72 L86 72 L86 84 L74 84 L70 95.5 L58.5 91 L50 99 L41.5 91 L30 95.5 L26 84 L14 84 L14 72 L2.5 72 L6.5 60.5 L0 53 L6.5 45.5 L2.5 34 L14 30 L14 18 L26 18 L30 6.5 L41.5 11 Z"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          opacity="0.6"
        />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}

function LedgerRule({ tone = theme.line }: { tone?: string }) {
  return (
    <div className="w-full" aria-hidden="true">
      <div style={{ height: 1, background: tone }} />
      <div style={{ height: 1, background: tone, marginTop: 3, opacity: 0.5 }} />
    </div>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="rsk-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-5 pb-3"
      style={{ color: theme.brassLight, borderBottom: `1px solid ${theme.line}` }}
    >
      {children}
    </h3>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-[#c3ccc5]" style={{ background: theme.ink }}>
      <style>{`
        .rsk-mono { font-family: var(--font-mono, ui-monospace, 'IBM Plex Mono', monospace); }
        .rsk-display { font-family: var(--font-display, 'Newsreader', ui-serif, Georgia, serif); }
        .rsk-footer-link { transition: color .25s ease, padding-left .25s ease; }
        .rsk-footer-link:hover { color: ${theme.brassLight}; padding-left: 4px; }
        .rsk-social-seal { transition: transform .3s ease, border-color .3s ease; }
        .rsk-social-seal:hover { transform: translateY(-3px); }
        @media (prefers-reduced-motion: reduce) {
          .rsk-footer-link, .rsk-social-seal { transition: none !important; }
        }
      `}</style>

      {/* Ledger grid texture, consistent with page.tsx dark panels */}
      <div className="relative">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${theme.brassLight} 1px, transparent 1px), linear-gradient(90deg, ${theme.brassLight} 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 relative z-10">

          {/* ══════════════════════════════════════════════════
              CTA STRIP — bordered record entry, not a glossy gradient card
          ══════════════════════════════════════════════════ */}
          <div className="mb-12 px-6 sm:px-10 py-9" style={{ border: `1px solid ${theme.line}` }}>
            <div className="text-center mb-7">
              <p className="rsk-mono text-[11px] uppercase tracking-[0.25em] mb-3" style={{ color: theme.brass }}>
                Admissions Open 2026-27
              </p>
              <h3 className="rsk-display text-2xl sm:text-3xl text-white mb-2">Ready to Join RSK Public School?</h3>
              <p className="text-sm" style={{ color: theme.inkMuted }}>
                Best CBSE School in Dehri on Sone — start your child&apos;s journey today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href="/admissions/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: theme.brass, boxShadow: '0 12px 26px -12px rgba(169,131,47,0.5)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Apply for Admission
              </Link>
              <Link
                href="/online-tuition"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ border: '1px solid rgba(255,255,255,0.22)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Online Tuition Classes
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ border: '1px solid rgba(255,255,255,0.22)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════
              SOCIAL — seal badges instead of shaking gradient pills
          ══════════════════════════════════════════════════ */}
          <div className="mb-12 flex flex-col lg:flex-row items-center justify-between gap-6 px-6 sm:px-10 py-7" style={{ border: `1px solid ${theme.line}` }}>
            <div className="text-center lg:text-left">
              <p className="rsk-mono text-[11px] uppercase tracking-[0.25em] mb-2" style={{ color: theme.brass }}>
                Stay Connected
              </p>
              <h3 className="rsk-display text-lg text-white">Follow Us on Social Media</h3>
              <p className="text-xs mt-1" style={{ color: theme.inkMuted }}>
                Catch daily updates, event photos &amp; student videos on our official channels.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { href: 'https://www.youtube.com/@rskpublicschooldehrionsone', label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                { href: 'https://www.facebook.com/rskpublicschoolcbse/', label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { href: 'https://www.instagram.com/rskpublicschool/', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              ].map((social, i) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rsk-social-seal group flex flex-col items-center gap-2"
                  aria-label={social.label}
                >
                  <Seal size={46} tone={i % 2 === 0 ? 'brass' : 'maroon'}>
                    <svg className="w-4 h-4" fill={i % 2 === 0 ? theme.brassLight : theme.maroonLight} viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </Seal>
                  <span className="rsk-mono text-[10px] uppercase tracking-wider" style={{ color: theme.inkMuted }}>
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════
              MAIN FOOTER GRID
          ══════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 mb-12">

            {/* School Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center" style={{ border: `1px solid ${theme.line}` }}>
                  <img
                    src="/logo RSK best shcool in dehri rohtas.png"
                    alt="RSK Public School Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="rsk-display text-xl text-white">{schoolInfo.name}</h3>
              </div>
              <p className="text-sm mb-4 leading-relaxed">
                <span className="font-semibold" style={{ color: theme.brassLight }}>Best CBSE School in Dehri on Sone</span>
                <br />
                Affiliation No: {schoolInfo.affiliationNo}
                <br />
                School Code: {schoolInfo.schoolCode}
              </p>
              <p className="text-xs mb-5" style={{ color: theme.inkMuted }}>
                Excellence in Education Since {schoolInfo.establishedYear}
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke={theme.brassLight} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{schoolInfo.address}, {schoolInfo.pinCode}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke={theme.brassLight} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${schoolInfo.phone}`} className="rsk-footer-link">
                    {schoolInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke={theme.brassLight} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${schoolInfo.email}`} className="rsk-footer-link">
                    {schoolInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* About & Academics */}
            <div>
              <ColumnHeading>About &amp; Academics</ColumnHeading>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/about" className="rsk-footer-link inline-block">About Us</Link></li>
                <li><Link href="/about/principal" className="rsk-footer-link inline-block">Principal&apos;s Message</Link></li>
                <li><Link href="/academics" className="rsk-footer-link inline-block">CBSE Curriculum</Link></li>
                <li><Link href="/teachers" className="rsk-footer-link inline-block">Our Teachers</Link></li>
                <li><Link href="/online-tuition" className="rsk-footer-link inline-block">Online Tuition</Link></li>
                <li><Link href="/non-academic" className="rsk-footer-link inline-block">Activities</Link></li>
              </ul>
            </div>

            {/* Admissions & Services */}
            <div>
              <ColumnHeading>Admissions</ColumnHeading>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/admissions" className="rsk-footer-link inline-block font-semibold" style={{ color: theme.brassLight }}>Admission 2026-27</Link></li>
                <li><Link href="/admissions/apply" className="rsk-footer-link inline-block">Apply Now</Link></li>
                <li><Link href="/admissions/process" className="rsk-footer-link inline-block">Process</Link></li>
                <li><Link href="/admissions/fees" className="rsk-footer-link inline-block">Fee Structure</Link></li>
                <li><Link href="/contact" className="rsk-footer-link inline-block">Enquiry</Link></li>
                <li><Link href="/teachers#careers" className="rsk-footer-link inline-block">Teaching Jobs</Link></li>
              </ul>
            </div>

            {/* Facilities */}
            <div>
              <ColumnHeading>Facilities</ColumnHeading>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/infrastructure" className="rsk-footer-link inline-block font-semibold" style={{ color: theme.brassLight }}>School Infrastructure</Link></li>
                <li><Link href="/infrastructure" className="rsk-footer-link inline-block">Science Labs</Link></li>
                <li><Link href="/infrastructure" className="rsk-footer-link inline-block">Computer Labs</Link></li>
                <li><Link href="/infrastructure" className="rsk-footer-link inline-block">Library &amp; Sports</Link></li>
                <li><Link href="/gallery/photos" className="rsk-footer-link inline-block">Photo Gallery</Link></li>
                <li><Link href="/gallery/videos" className="rsk-footer-link inline-block">Video Gallery</Link></li>
              </ul>
            </div>

            {/* Important Information */}
            <div>
              <ColumnHeading>Information</ColumnHeading>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/disclosure" className="rsk-footer-link inline-block font-semibold" style={{ color: theme.brassLight }}>Mandatory Disclosure</Link></li>
                <li><Link href="/notice-board" className="rsk-footer-link inline-block">Notice Board</Link></li>
                <li><Link href="/results-announcements" className="rsk-footer-link inline-block">Results &amp; Announcements</Link></li>
                <li><Link href="/parents" className="rsk-footer-link inline-block">Parent Experience</Link></li>
                <li><Link href="/about/discipline" className="rsk-footer-link inline-block">School Rules</Link></li>
                <li>
                  <a href="https://cbse.gov.in" target="_blank" rel="noopener noreferrer" className="rsk-footer-link inline-block font-semibold" style={{ color: theme.brassLight }}>
                    CBSE Official Website
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Careers & Legal — kept as its own row so the grid above stays a clean 6-up ledger */}
          <div className="mb-12" style={{ borderTop: `1px solid ${theme.line}` }}>
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md">
              <div>
                <ColumnHeading>Careers &amp; Legal</ColumnHeading>
                <ul className="space-y-2.5 text-sm">
                  <li><Link href="/teachers#careers" className="rsk-footer-link inline-block font-semibold" style={{ color: theme.brassLight }}>Teaching Careers</Link></li>
                  <li><Link href="/teachers#careers" className="rsk-footer-link inline-block">Job Opportunities</Link></li>
                  <li><Link href="/privacy-policy" className="rsk-footer-link inline-block">Privacy Policy</Link></li>
                  <li><Link href="/terms-conditions" className="rsk-footer-link inline-block">Terms &amp; Conditions</Link></li>
                  <li><Link href="/contact" className="rsk-footer-link inline-block">Contact Support</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* About Our School — long-form SEO copy, kept verbatim */}
          <div className="pt-8 mb-8" style={{ borderTop: `1px solid ${theme.line}` }}>
            <div className="text-center">
              <p className="rsk-mono text-[11px] uppercase tracking-[0.25em] mb-4" style={{ color: theme.brass }}>
                Why Choose RSK Public School?
              </p>
              <p className="text-sm leading-relaxed max-w-5xl mx-auto" style={{ color: theme.inkMuted }}>
                Recognized as the best CBSE school in Dehri on Sone, RSK Public School has earned its reputation among
                the top CBSE schools in Dehri through exceptional academic excellence and holistic development
                programs. When parents search for quality schools in Dehri on Sone, they consistently choose us for
                our comprehensive English medium curriculum, state-of-the-art science laboratories, modern computer
                facilities, and innovative online tuition programs. Serving families across Rohtas District in Bihar,
                we provide outstanding primary and secondary education with excellent CBSE results, while also
                creating rewarding opportunities for teaching professionals. With admission now open for 2026-27, we
                invite you to join our community of educational excellence.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-7 text-center text-sm" style={{ borderTop: `1px solid ${theme.line}` }}>
            <p style={{ color: theme.inkMuted }}>
              © {currentYear} {schoolInfo.name}. All Rights Reserved.
            </p>
            <p className="mt-2 text-xs" style={{ color: '#6f7d73' }}>
              Best CBSE School in Dehri on Sone — Excellence in Education Since {schoolInfo.establishedYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
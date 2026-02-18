'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { navigationItems, schoolInfo } from '../lib/schoolData';

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
      {/* Main Header */}
      <header 
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100' : 'bg-white shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Logo and School Name */}
          <div className="flex items-center justify-between py-4 border-b border-blue-50">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/logo RSK best shcool in dehri rohtas.png" 
                  alt="RSK Public School Logo" 
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text text-transparent">
                  {schoolInfo.name}
                </h1>
                <p className="text-sm text-blue-600 font-medium">
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
              className="lg:hidden p-3 text-blue-700 hover:bg-blue-50 rounded-xl border-2 border-blue-100 hover:border-blue-200 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center justify-center py-4 gap-2">
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
                  className="relative px-5 py-3 text-gray-700 font-semibold hover:text-blue-700 transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 flex items-center group"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="relative z-10">{item.label}</span>
                  {item.children && (
                    <svg className="inline w-4 h-4 ml-2 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                  {/* Hover underline effect */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"></div>
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-blue-100 py-3 animate-fade-in overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                    {item.children.map((child, index) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-200 border-l-4 border-transparent hover:border-blue-500 font-medium"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 opacity-60"></div>
                          {child.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-6 border-t border-blue-100 bg-gradient-to-b from-blue-50/50 to-indigo-50/30">
              {navigationItems.map((item, index) => (
                <div key={item.href} className="mb-4">
                  {/* Main Navigation Item */}
                  <Link
                    href={item.href}
                    className="flex items-center px-5 py-4 text-gray-800 font-semibold hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-800 rounded-xl transition-all duration-300 mx-2 shadow-sm bg-white border border-blue-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mr-4 flex-shrink-0"></div>
                    <span className="flex-1">{item.label}</span>
                    {item.children && (
                      <svg className="w-5 h-5 ml-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Mobile Dropdown Items - Always Visible */}
                  {item.children && (
                    <div className="mt-2 ml-6 mr-2 space-y-2">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-white hover:text-blue-700 rounded-lg transition-all duration-200 border-l-4 border-blue-200 hover:border-blue-500 bg-blue-50/50 hover:shadow-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 flex-shrink-0"></div>
                          <span className="font-medium">{child.label}</span>
                          <svg className="w-4 h-4 ml-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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


'use client';

import React, { useState, useEffect } from 'react';

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Custom trigger event listener
    const handleOpenPopup = () => {
      setIsOpen(true);
    };

    window.addEventListener('open-school-fit-quiz', handleOpenPopup);
    window.addEventListener('open-admission-popup', handleOpenPopup);

    // Auto-open on landing after short smooth delay if not dismissed in session
    const isDismissed = sessionStorage.getItem('rsk_landing_popup_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('open-school-fit-quiz', handleOpenPopup);
        window.removeEventListener('open-admission-popup', handleOpenPopup);
      };
    }

    return () => {
      window.removeEventListener('open-school-fit-quiz', handleOpenPopup);
      window.removeEventListener('open-admission-popup', handleOpenPopup);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('rsk_landing_popup_dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      sessionStorage.setItem('rsk_landing_popup_dismissed', 'true');
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello RSK Public School!\nI would like to check the Fee Structure and Admission details.\n\n` +
      `👤 Name: ${name}\n` +
      `📱 Mobile: ${phone}\n\nPlease share the detailed fee structure and admission prospectus.`
    );
    window.open(`https://wa.me/919631160967?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn transition-opacity duration-300 overflow-y-auto"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-[480px] max-h-[94vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-amber-300/60 my-auto transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 z-30 w-8 h-8 bg-slate-900/70 hover:bg-slate-950 text-white rounded-full flex items-center justify-center transition-all focus:outline-none cursor-pointer border border-white/40 backdrop-blur-md shadow-lg"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Container for Popup Body */}
        <div className="overflow-y-auto custom-scrollbar flex flex-col">
          {/* Fully Visible Poster Image Container */}
          <div className="w-full bg-slate-900 flex items-center justify-center">
            <img 
              src="/landingpopup.jpg" 
              alt="Admission Open - RSK Public School Dehri"
              className="w-full h-auto object-contain block max-h-[58vh]"
            />
          </div>

          {/* Compact Bottom Form & Action Section */}
          <div className="p-3.5 sm:p-4 bg-gradient-to-b from-amber-50/50 via-white to-slate-50 border-t border-amber-100">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="text-center">
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                    📋 Enter details to check fee structure & admission info
                  </p>
                </div>

                <div className="space-y-2 pt-0.5">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder="Enter Parent / Student Full Name *"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-slate-900 font-semibold shadow-2xs transition-all placeholder:text-slate-400 placeholder:font-normal"
                    />
                  </div>

                  {/* Phone Input & Submit */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-2.5 sm:top-3 text-xs font-black text-slate-500 select-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value.replace(/\D/g, ''));
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder="10-digit mobile number *"
                        className="w-full pl-11 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-slate-900 font-bold shadow-2xs transition-all placeholder:text-slate-400 placeholder:font-normal"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md hover:shadow-amber-500/30 transform active:scale-95 transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer border border-amber-400 disabled:opacity-50 shrink-0"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <span>Submit 🚀</span>
                      )}
                    </button>
                  </div>
                </div>

                {errorMessage && (
                  <p className="text-[11px] font-bold text-rose-600 text-center flex items-center justify-center gap-1">
                    ⚠️ {errorMessage}
                  </p>
                )}

                <p className="text-[10px] text-center text-slate-500 font-medium pt-0.5">
                  🔒 100% Free & Confidential • Instant Fee Structure on WhatsApp/Call
                </p>
              </form>
            ) : (
              <div className="py-2 text-center space-y-2 animate-fadeIn">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-full">
                  <span>🎉 Thanks {name}! Request Submitted</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  We have received your number (<strong>+91 {phone}</strong>)! Our counselor will share the detailed fee structure shortly.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>💬 Chat on WhatsApp Now</span>
                  </button>
                  <button
                    onClick={handleClose}
                    className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

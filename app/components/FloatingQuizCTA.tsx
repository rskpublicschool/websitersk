'use client';

import React from 'react';

export default function FloatingQuizCTA() {
  const handleOpenQuiz = () => {
    window.dispatchEvent(new Event('open-school-fit-quiz'));
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 animate-bounce hover:animate-none">
      <button
        onClick={handleOpenQuiz}
        className="group relative flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs sm:text-sm rounded-full shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white/80"
        title="Find the Right School for Your Child - Take 60-Sec Quiz"
      >
        <span className="text-base sm:text-lg animate-pulse">🎯</span>
        <span className="hidden sm:inline">Child School-Fit Quiz</span>
        <span className="sm:hidden">School Quiz</span>
        <span className="px-2 py-0.5 bg-slate-950 text-amber-300 font-extrabold text-[10px] rounded-full uppercase tracking-wider">
          60-Sec
        </span>
      </button>
    </div>
  );
}

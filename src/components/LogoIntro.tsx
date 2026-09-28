import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface LogoIntroProps {
  onComplete: () => void;
}

export const LogoIntro: React.FC<LogoIntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'appear' | 'pulse' | 'fadeOut'>('appear');

  useEffect(() => {
    // Stage 1: Logo appears and fades in (0 - 600ms)
    // Stage 2: Subtle premium scale & glow (600ms - 2100ms)
    const timerPulse = setTimeout(() => {
      setStage('pulse');
    }, 600);

    // Stage 3: Smooth fade out (2100ms)
    const timerFade = setTimeout(() => {
      setStage('fadeOut');
    }, 2200);

    // Complete callback (2600ms)
    const timerComplete = setTimeout(() => {
      onComplete();
    }, 2650);

    return () => {
      clearTimeout(timerPulse);
      clearTimeout(timerFade);
      clearTimeout(timerComplete);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080b] transition-opacity duration-500 ${
        stage === 'fadeOut' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,40,116,0.15)_0%,rgba(11,12,16,0.95)_70%)] pointer-events-none" />

      {/* Asian geometric decorative motif */}
      <div className="absolute w-72 h-72 rounded-full border border-[#e02874]/15 animate-ping [animation-duration:3s] pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full border border-amber-500/10 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Animated Logo Container */}
        <div 
          className={`transition-all duration-700 ease-out transform ${
            stage === 'appear' 
              ? 'opacity-0 scale-90 translate-y-3' 
              : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          <div className="p-3 rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_0_50px_rgba(224,40,116,0.3)]">
            <Logo size="xl" showText={false} />
          </div>
        </div>

        {/* Text Fade In */}
        <div 
          className={`mt-6 transition-all duration-700 delay-200 transform ${
            stage === 'appear' 
              ? 'opacity-0 translate-y-4' 
              : 'opacity-100 translate-y-0'
          }`}
        >
          <h1 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-white">
            Wok On Wheels
          </h1>
          <p className="mt-2 text-xs md:text-sm font-semibold tracking-widest text-[#f43f5e] uppercase">
            Korean &amp; Chinese Food · Multan
          </p>
        </div>

        {/* Short Skip Button */}
        <button
          onClick={onComplete}
          className="mt-8 px-4 py-1.5 text-xs text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600 rounded-full transition-colors cursor-pointer"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
};

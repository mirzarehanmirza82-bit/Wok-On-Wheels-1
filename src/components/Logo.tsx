import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true 
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32 md:w-40 md:h-40'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Circle Badge with Panda Icon */}
      <div className={`relative ${sizeMap[size]} shrink-0 rounded-full bg-white flex items-center justify-center p-1 shadow-md border-2 border-[#e02874]/30 overflow-hidden`}>
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circular outer outline */}
          <circle cx="100" cy="100" r="96" fill="#ffffff" stroke="#111827" strokeWidth="2" />
          
          {/* WOW text in pink bubble font */}
          <text 
            x="100" 
            y="48" 
            textAnchor="middle" 
            fill="#e02874" 
            fontFamily="'Syne', 'Plus Jakarta Sans', Arial, sans-serif" 
            fontWeight="900" 
            fontSize="32" 
            letterSpacing="2"
          >
            WOW
          </text>

          {/* Cute Panda Group */}
          <g transform="translate(0, 10)">
            {/* Panda Ears */}
            <circle cx="72" cy="62" r="14" fill="#111827" />
            <circle cx="128" cy="62" r="14" fill="#111827" />
            <circle cx="72" cy="62" r="7" fill="#374151" />
            <circle cx="128" cy="62" r="7" fill="#374151" />

            {/* Panda Head */}
            <ellipse cx="100" cy="80" rx="30" ry="26" fill="#ffffff" stroke="#111827" strokeWidth="2.5" />

            {/* Eye Patches */}
            <ellipse cx="88" cy="78" rx="8" ry="11" fill="#111827" transform="rotate(-15 88 78)" />
            <ellipse cx="112" cy="78" rx="8" ry="11" fill="#111827" transform="rotate(15 112 78)" />

            {/* Eye Pupils */}
            <circle cx="89" cy="78" r="3" fill="#ffffff" />
            <circle cx="111" cy="78" r="3" fill="#ffffff" />

            {/* Snout & Nose */}
            <ellipse cx="100" cy="88" rx="4.5" ry="3.5" fill="#111827" />
            <path d="M 98 91 Q 100 93 102 91" stroke="#111827" strokeWidth="1.5" fill="none" strokeLinecap="round" />

            {/* Panda Body & Arms holding bowl */}
            <ellipse cx="100" cy="116" rx="28" ry="22" fill="#111827" />
            <ellipse cx="100" cy="116" rx="20" ry="16" fill="#ffffff" />

            {/* Paws */}
            <circle cx="76" cy="130" r="10" fill="#111827" />
            <circle cx="76" cy="130" r="5" fill="#f43f5e" />
            <circle cx="124" cy="130" r="10" fill="#111827" />
            <circle cx="124" cy="130" r="5" fill="#f43f5e" />

            {/* Noodle Bowl */}
            <ellipse cx="100" cy="108" rx="20" ry="10" fill="#f43f5e" />
            <ellipse cx="100" cy="106" rx="19" ry="8" fill="#ffffff" stroke="#e02874" strokeWidth="1.5" />
            {/* Noodles in bowl */}
            <path d="M 86 106 Q 100 102 114 106" stroke="#fbbf24" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 89 108 Q 100 105 111 108" stroke="#f59e0b" strokeWidth="2.5" fill="none" strokeLinecap="round" />

            {/* Chopsticks lifting noodles */}
            <line x1="68" y1="84" x2="108" y2="104" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="66" y1="90" x2="108" y2="107" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 102 98 Q 101 106 100 110" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
          </g>

          {/* WOK ON WHEELS Text */}
          <text 
            x="100" 
            y="166" 
            textAnchor="middle" 
            fill="#e02874" 
            fontFamily="'Syne', 'Plus Jakarta Sans', Arial, sans-serif" 
            fontWeight="900" 
            fontSize="15" 
            letterSpacing="0.5"
          >
            WOK ON WHEELS
          </text>

          {/* Subtitle: Korean & Chinese food */}
          <text 
            x="100" 
            y="182" 
            textAnchor="middle" 
            fill="#111827" 
            fontFamily="'Plus Jakarta Sans', Arial, sans-serif" 
            fontWeight="700" 
            fontSize="10" 
            letterSpacing="0.2"
          >
            Korean &amp; Chinese food
          </text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display font-bold text-white text-base md:text-lg tracking-tight leading-tight flex items-center gap-1.5">
            Wok On Wheels
          </span>
          <span className="text-[11px] font-medium text-[#f43f5e] tracking-wider uppercase">
            Korean &amp; Chinese food
          </span>
        </div>
      )}
    </div>
  );
};

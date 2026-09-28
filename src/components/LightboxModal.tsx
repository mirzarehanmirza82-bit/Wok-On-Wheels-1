import React from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  imageSrc: string | null;
  title?: string;
  category?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  imageSrc,
  title,
  category,
  onClose,
}) => {
  if (!imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors"
        aria-label="Close image"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative z-10 max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
        <img
          src={imageSrc}
          alt={title || 'Restaurant Gallery Photo'}
          className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/assets/images/hero_wok_noodles_1790402210043.jpg';
          }}
        />
        {(title || category) && (
          <div className="mt-4 text-center">
            {category && (
              <span className="text-xs uppercase tracking-widest text-[#f43f5e] font-semibold">
                {category}
              </span>
            )}
            {title && (
              <p className="text-base sm:text-lg font-medium text-white mt-1">
                {title}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

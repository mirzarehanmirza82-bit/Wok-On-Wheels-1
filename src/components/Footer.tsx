import React from 'react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ActivePage } from '../types/restaurant';
import { MapPin, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = 2026;

  const quickLinks: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#07080b] border-t border-white/5 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Logo size="md" showText={true} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Korean &amp; Chinese style restaurant located in Multan, Pakistan. Experience handcrafted dumplings, sizzling wok chow mein, glazed wings, and refreshing drinks.
            </p>
            {/* Rating trust marker */}
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-300">
              <span className="flex text-amber-400">★★★★★</span>
              <span className="font-bold text-white font-mono">{RESTAURANT_INFO.googleRating}.0</span>
              <span className="text-slate-500">·</span>
              <span>{RESTAURANT_INFO.googleReviewCount} Google Reviews</span>
            </div>
          </div>

          {/* Col 2: Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Location &amp; Order
            </h4>
            
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-[#f43f5e] shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white">{RESTAURANT_INFO.name}</p>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                  {RESTAURANT_INFO.address}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={RESTAURANT_INFO.phoneCallable}
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-xs font-semibold text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#f43f5e]" />
                <span>Call Us</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/30 hover:bg-emerald-600/30 text-xs font-semibold text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links & Official Social */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <h5 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                Official Social Profiles
              </h5>
              <div className="flex items-center gap-3">
                <a
                  href={RESTAURANT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500 text-xs font-semibold text-slate-200 hover:text-white transition-all"
                >
                  Facebook
                </a>
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-pink-500 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center gap-1.5"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {RESTAURANT_INFO.name}. All rights reserved.</p>
          <p>Korean &amp; Chinese Style Restaurant · Multan, Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

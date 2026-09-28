import React from 'react';
import { RESTAURANT_INFO, ASSETS } from '../data/restaurantData';
import { ActivePage } from '../types/restaurant';
import { MapPin, Phone, MessageSquare, Utensils, Flame, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Brand Statement Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
          About Wok On Wheels
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Korean &amp; Chinese Flavors in Multan
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
          Wok On Wheels brings Korean &amp; Chinese-inspired food to Multan with a focus on flavorful dishes and a memorable dining experience.
        </p>
      </div>

      {/* Visual Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-[4/3]">
          <img
            src={ASSETS.heroNoodles}
            alt="Wok On Wheels Signature Food"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/images/hero_wok_noodles_1790402210043.jpg';
            }}
          />
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-[#e02874]/10 border border-[#e02874]/20 text-[#f43f5e] shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                High-Heat Wok Cooking
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Traditional stir-frying in round-bottom woks to seal in sauces, aromas, and deliver authentic wok hei texture.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Korean &amp; Chinese Specialties
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                A focused menu featuring 9 varieties of dumplings, hearty chicken and beef chow mein bowls, and glazed spicy Korean wings.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Prepared Fresh to Order
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Each bowl and appetizer is prepared fresh when ordered, ensuring crisp vegetables, tender meat, and balanced glazes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Location & Contact Summary */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#11131a] border border-white/5 space-y-6">
        <h3 className="font-display text-xl font-bold text-white">
          Multan Dining &amp; Takeaway
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#f43f5e] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Location:</p>
              <p className="text-slate-400 text-xs mt-0.5">{RESTAURANT_INFO.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-[#f43f5e] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Phone Inquiries:</p>
              <a
                href={RESTAURANT_INFO.phoneCallable}
                className="mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-white/10 transition-colors"
              >
                <Phone className="w-3 h-3 text-[#f43f5e]" />
                <span>Call Restaurant</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate('menu')}
            className="px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#e02874] hover:bg-[#c71f63] transition-colors cursor-pointer"
          >
            Explore Our Menu
          </button>
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

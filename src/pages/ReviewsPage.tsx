import React from 'react';
import { RESTAURANT_INFO, CUSTOMER_REVIEWS } from '../data/restaurantData';
import { Star, CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
          Google Verified Rating
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Customer Reviews &amp; Rating
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Honest feedback from diners in Multan experiencing Korean &amp; Chinese cuisine at Wok On Wheels.
        </p>
      </div>

      {/* Main Rating Card */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#11131a] border border-white/10 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="w-24 h-24 rounded-full bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
          <span className="font-display text-4xl font-extrabold">5.0</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-amber-400 text-2xl">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-white font-display">
            Perfect 5.0 Rating
          </h2>
          <p className="text-sm text-slate-400">
            Based on {RESTAURANT_INFO.googleReviewCount} authentic Google Reviews
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/5 text-left">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
              <CheckCircle className="w-4 h-4" />
              <span>100% Recommended</span>
            </div>
            <p className="text-xs text-slate-400">Consistent five-star scores across every Google review.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
              <Star className="w-4 h-4" />
              <span>Wok Hei Quality</span>
            </div>
            <p className="text-xs text-slate-400">Praised for authentic high-heat wok flavors and fresh ingredients.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold">
              <MessageSquare className="w-4 h-4" />
              <span>Prompt Service</span>
            </div>
            <p className="text-xs text-slate-400">Direct WhatsApp ordering for timely takeaway &amp; delivery.</p>
          </div>
        </div>

        {/* Google Maps / Reviews Link */}
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <a
            href={RESTAURANT_INFO.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-white/10 transition-colors"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Wok On Wheels, I'd like to share my feedback on my recent meal!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors"
          >
            <span>Share Feedback on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Individual Customer Review Cards */}
      <div className="space-y-4">
        <h3 className="font-display text-xl font-bold text-white">
          All Verified Customer Reviews ({CUSTOMER_REVIEWS.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-2xl bg-[#11131a] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#e02874] to-[#f43f5e] text-white font-bold flex items-center justify-center text-xs">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">{rev.name}</h4>
                      <span className="text-[11px] text-slate-500">{rev.timeAgo}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400 text-xs">
                    {'★'.repeat(rev.rating)}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mt-2">
                  "{rev.comment}"
                </p>
              </div>

              {rev.favoriteDish && (
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Ordered dish:</span>
                  <span className="font-semibold text-[#f43f5e]">{rev.favoriteDish}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

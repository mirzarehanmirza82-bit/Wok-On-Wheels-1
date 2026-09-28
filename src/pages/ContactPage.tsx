import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, MessageSquare, ExternalLink, Navigation } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
          Find &amp; Connect
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Location &amp; Contact
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Visit Wok On Wheels in Model Town Multan or get in touch for takeout and delivery orders.
        </p>
      </div>

      {/* Main Grid: Details + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Restaurant Details */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#11131a] border border-white/5 space-y-6">
            <h2 className="font-display text-xl font-bold text-white">
              Wok On Wheels
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#e02874]/15 border border-[#e02874]/30 text-[#f43f5e] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Address
                </h3>
                <p className="text-sm text-white font-medium mt-1 leading-relaxed">
                  {RESTAURANT_INFO.address}
                </p>
                <a
                  href={RESTAURANT_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#f43f5e] hover:underline mt-2 font-semibold"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Phone Support &amp; Orders
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Direct phone call for instant kitchen inquiries</p>
                <a
                  href={RESTAURANT_INFO.phoneCallable}
                  className="mt-2.5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f43f5e]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0 mt-0.5">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  WhatsApp Orders &amp; Takeaway
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Send custom orders and location drop pins</p>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-colors shadow-md shadow-emerald-950/30"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Official Social Media */}
          <div className="p-6 rounded-3xl bg-[#11131a] border border-white/5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Official Social Profiles
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/50 text-slate-200 hover:text-white transition-all text-xs font-semibold"
              >
                <span>Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </a>

              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-white/10 hover:border-pink-500/50 text-slate-200 hover:text-white transition-all text-xs font-semibold"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-white/10 bg-[#11131a] shadow-2xl h-[450px] lg:h-[560px] relative">
          <iframe
            title="Wok On Wheels Multan Location Map"
            src={RESTAURANT_INFO.googleMapsEmbed}
            className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-90 brightness-95"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 shadow-lg pointer-events-none">
            <p className="text-xs font-bold text-white">Wok On Wheels</p>
            <p className="text-[11px] text-slate-400">Northern Byp, Model Town B, Multan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

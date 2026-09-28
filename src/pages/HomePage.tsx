import React from 'react';
import { MenuItem, ActivePage } from '../types/restaurant';
import { RESTAURANT_INFO, MENU_CATEGORIES, ASSETS, MENU_ITEMS, CUSTOMER_REVIEWS } from '../data/restaurantData';
import { MenuCard } from '../components/MenuCard';
import { 
  ArrowRight, 
  Flame, 
  MapPin, 
  PhoneCall, 
  ShoppingBag, 
  Star, 
  Utensils, 
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: ActivePage) => void;
  onAddToCart: (dish: MenuItem, quantity: number) => void;
  onOpenDetails: (dish: MenuItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onAddToCart,
  onOpenDetails,
}) => {
  // Curated featured dishes
  const featuredDishes = MENU_ITEMS.filter(item => item.isPopular).slice(0, 6);

  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#e02874]/15 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Brand & Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Clean unboxed metadata tag */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300">
                <span className="text-[#f43f5e] font-bold tracking-wider uppercase">Multan, Pakistan</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Model Town B Block B</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {RESTAURANT_INFO.googleRating}.0 ({RESTAURANT_INFO.googleReviewCount} Reviews)
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
                Authentic <span className="bg-gradient-to-r from-[#e02874] via-[#f43f5e] to-amber-400 bg-clip-text text-transparent">Korean &amp; Chinese</span> Food in Multan
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Wok On Wheels brings intense wok flavors, savory handcrafted dumplings, spicy Korean wings, and hearty chow mein bowls directly to your table or doorstep.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('menu')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#e02874] to-[#f43f5e] hover:from-[#c71f63] hover:to-[#e11d48] shadow-xl shadow-[#e02874]/25 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Explore Menu &amp; Order</span>
                </button>

                <button
                  onClick={() => onNavigate('booking')}
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#f43f5e]" />
                  <span>Book a Table</span>
                </button>

                <a
                  href={RESTAURANT_INFO.phoneCallable}
                  className="px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#f43f5e]" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Trust Features */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-white/5 text-left">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Piping Hot Wok Hei</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fresh Dumplings Daily</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct WhatsApp Order</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-slate-900 group">
                  <img
                    src={ASSETS.heroNoodles}
                    alt="Wok On Wheels Stir Fried Bowl"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/images/hero_wok_noodles_1790402210043.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-80" />

                  {/* Floating Asian food card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#f43f5e] uppercase tracking-wider">
                        Signature Favorite
                      </span>
                      <h4 className="text-sm font-bold text-white font-display">
                        Chicken Chow Mein Bowl
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        PKR 899 Only
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate('menu')}
                      className="p-2.5 rounded-xl bg-[#e02874] text-white hover:bg-[#c71f63] transition-colors"
                      aria-label="Order dish"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Rating badge float */}
                <div className="absolute -top-4 -right-4 bg-[#11131a] border border-white/10 rounded-2xl p-3 shadow-xl hidden sm:flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">5.0 Star Rating</div>
                    <div className="text-[10px] text-slate-400">Google Verified Reviews</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Menu Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
            Flavor Explorer
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Explore Menu Categories
          </h2>
          <p className="text-sm text-slate-400">
            Handcrafted with authentic Korean and Chinese culinary techniques.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {MENU_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigate('menu')}
              className="group p-4 rounded-2xl bg-[#11131a] border border-white/5 hover:border-[#e02874]/50 transition-all text-left flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
            >
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5 w-fit group-hover:bg-[#e02874]/15 transition-colors mb-3">
                <Utensils className="w-5 h-5 text-[#f43f5e]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-[#f43f5e] transition-colors leading-tight">
                  {cat.name}
                </h3>
                <span className="text-[11px] text-slate-500 mt-1 block font-mono">
                  {cat.count} items
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Featured Dishes Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
              Customer Favorites
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
              Popular Dishes at Wok On Wheels
            </h2>
          </div>

          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#f43f5e] hover:text-white transition-colors cursor-pointer"
          >
            <span>View Complete Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDishes.map((dish) => (
            <MenuCard
              key={dish.id}
              dish={dish}
              onAddToCart={onAddToCart}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      </section>

      {/* 4. Why Choose Wok On Wheels (Authentic facts only) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#12141c] via-[#0d0f15] to-[#12141c] border border-white/5 p-8 sm:p-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#e02874]/15 border border-[#e02874]/30 flex items-center justify-center text-[#f43f5e]">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Sizzling Wok Hei Cooking
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                High-heat wok tossing infuses noodles and chicken with the signature smoky aroma that defines authentic Chinese and Korean cuisine.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Signature Dumpling Variety
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                From chili oil to honey sesame, Mala Sichuan, and classic steamed dumplings, experience specialized dumpling preparations at Rs. 599 only.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                Direct WhatsApp Ordering
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Effortless delivery and takeaway ordering. Your cart is compiled into an instant WhatsApp message for quick kitchen confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Visual Highlight / Restaurant & Food Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
              Dining Experience
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Korean &amp; Chinese Flavors in Multan
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Wok On Wheels brings Korean &amp; Chinese-inspired food to Multan with a focus on flavorful dishes and a memorable dining experience. Whether you crave spicy Korean wings, rich beef chow mein, or chilled mint margaritas, every order is prepared hot to order.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('gallery')}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors cursor-pointer"
              >
                View Photo Gallery
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Find Us on Map →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <img
                src={ASSETS.spicyKoreanWings}
                alt="Spicy Korean Wings"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/images/menu_korean_wings_1790402220684.jpg';
                }}
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] mt-6">
              <img
                src={ASSETS.chiliDumplings}
                alt="Wok Chili Dumplings"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/images/menu_chili_dumplings_1790402231737.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Authentic Customer Reviews Section (Right to Left Animated Ticker) */}
      <section className="space-y-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
                Verified Diners
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Customer Reviews &amp; Experiences
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Hear what food lovers across Multan say about our authentic Korean &amp; Chinese dishes.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 (5 Google Reviews)</span>
              </div>
              <button
                onClick={() => onNavigate('reviews')}
                className="text-xs font-semibold text-[#f43f5e] hover:text-white transition-colors cursor-pointer"
              >
                View Rating Details →
              </button>
            </div>
          </div>
        </div>

        {/* Infinite Right-to-Left Continuous Scrolling Track */}
        <div className="relative w-full py-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="animate-marquee-left gap-6 px-4">
            {/* Duplicated list ensures flawless infinite continuous looping */}
            {[...CUSTOMER_REVIEWS, ...CUSTOMER_REVIEWS, ...CUSTOMER_REVIEWS].map((rev, idx) => (
              <div
                key={`${rev.id}-${idx}`}
                className="w-[320px] sm:w-[380px] shrink-0 p-5 rounded-2xl bg-[#11131a] border border-white/10 hover:border-[#e02874]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#e02874] to-[#f43f5e] text-white font-bold flex items-center justify-center text-xs shadow-md">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-display leading-tight">
                          {rev.name}
                        </h4>
                        <span className="text-[11px] text-slate-500">{rev.timeAgo}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 text-amber-400">
                      {'★'.repeat(rev.rating)}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic line-clamp-4">
                    "{rev.comment}"
                  </p>
                </div>

                {rev.favoriteDish && (
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Ordered:</span>
                    <span className="font-semibold text-[#f43f5e]">{rev.favoriteDish}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Location & Fast Order Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1a111a] via-[#16121a] to-[#12131a] border border-[#e02874]/30 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
              Visit or Order Delivery
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Ready for a flavorful meal?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
              <MapPin className="w-3.5 h-3.5 text-[#f43f5e] inline mr-1" />
              {RESTAURANT_INFO.address}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/30 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
            <a
              href={RESTAURANT_INFO.phoneCallable}
              className="px-5 py-3 rounded-xl font-semibold text-sm text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#f43f5e]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

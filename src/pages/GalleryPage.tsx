import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { LightboxModal } from '../components/LightboxModal';
import { Maximize2 } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<{
    image: string;
    title: string;
    category: string;
  } | null>(null);

  const categories = ['all', 'Noodles & Bowls', 'Korean Wings', 'Dumplings', 'Mocktails'];

  const filteredItems = selectedCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
          Visual Culinary Journey
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Restaurant Gallery
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          A showcase of freshly wok-tossed bowls, signature dumplings, crispy wings, and chilled drinks.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#e02874] text-white shadow-lg shadow-[#e02874]/20'
                : 'bg-[#11131a] text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
            }`}
          >
            {cat === 'all' ? 'All Photos' : cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightboxItem({ image: item.image, title: item.title, category: item.category })}
            className="group relative rounded-2xl overflow-hidden bg-[#11131a] border border-white/5 hover:border-[#e02874]/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
          >
            <div className={`${item.aspect} w-full overflow-hidden bg-slate-900`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/images/hero_wok_noodles_1790402210043.jpg';
                }}
              />
            </div>

            {/* Hover overlay with title and lightbox hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#f43f5e]">
                {item.category}
              </span>
              <div className="flex items-center justify-between gap-3 mt-1">
                <h3 className="text-sm sm:text-base font-bold text-white font-display">
                  {item.title}
                </h3>
                <div className="p-2 rounded-xl bg-white/10 text-white backdrop-blur-md shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        imageSrc={lightboxItem?.image || null}
        title={lightboxItem?.title}
        category={lightboxItem?.category}
        onClose={() => setLightboxItem(null)}
      />
    </div>
  );
};

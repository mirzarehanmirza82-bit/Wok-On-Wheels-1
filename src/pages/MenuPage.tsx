import React, { useState, useMemo } from 'react';
import { MenuItem, MenuCategory } from '../types/restaurant';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/restaurantData';
import { MenuCard } from '../components/MenuCard';
import { Search, ShoppingBag, UtensilsCrossed } from 'lucide-react';

interface MenuPageProps {
  onAddToCart: (dish: MenuItem, quantity: number) => void;
  onOpenDetails: (dish: MenuItem) => void;
  onOpenCart: () => void;
  cartCount: number;
}

export const MenuPage: React.FC<MenuPageProps> = ({
  onAddToCart,
  onOpenDetails,
  onOpenCart,
  cartCount,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered menu dishes
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
          Authentic Recipes
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Wok On Wheels Menu
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Handcrafted dumplings, sizzling wok chow mein, glazed Korean wings, and chilled refreshments.
        </p>
      </div>

      {/* Category Filter Tabs & Search Bar */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dumplings, chow mein, wings, drinks..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#11131a] border border-white/10 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e02874]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Buttons (Functional button controls conforming to frontend-design) */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as MenuCategory)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#e02874] text-white shadow-lg shadow-[#e02874]/25'
                    : 'bg-[#11131a] text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] tabular-nums ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Info Header Banner */}
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="w-4 h-4 text-[#f43f5e]" />
          <span className="text-sm font-bold text-white">
            {MENU_CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Full Menu'}
          </span>
          <span className="text-xs text-slate-400 tabular-nums">
            ({filteredDishes.length} {filteredDishes.length === 1 ? 'item' : 'items'})
          </span>
        </div>

        {selectedCategory === 'dumplings' && (
          <span className="text-xs font-semibold text-[#f43f5e] font-mono">
            Rs. 599 Only each
          </span>
        )}
        {selectedCategory === 'chicken-bowls' && (
          <span className="text-xs font-semibold text-[#f43f5e] font-mono">
            Rs. 899 Only each
          </span>
        )}
        {selectedCategory === 'beef-bowls' && (
          <span className="text-xs font-semibold text-[#f43f5e] font-mono">
            Rs. 1,299 Only each
          </span>
        )}
        {selectedCategory === 'korean-wings' && (
          <span className="text-xs font-semibold text-[#f43f5e] font-mono">
            Rs. 775 Only (6 Pcs)
          </span>
        )}
      </div>

      {/* Dishes Grid */}
      {filteredDishes.length === 0 ? (
        <div className="text-center py-16 bg-[#11131a]/50 rounded-3xl border border-white/5 p-8">
          <p className="text-base text-slate-300 font-medium">No dishes found matching "{searchQuery}"</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-[#f43f5e] hover:text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDishes.map((dish) => (
            <MenuCard
              key={dish.id}
              dish={dish}
              onAddToCart={onAddToCart}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      )}

      {/* Sticky Mobile Cart Bar if cart has items */}
      {cartCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-30 lg:hidden">
          <button
            onClick={onOpenCart}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-[#e02874] to-[#f43f5e] text-white font-semibold text-sm shadow-2xl shadow-rose-950/50 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <span>View Cart &amp; Order</span>
            </div>
            <span className="bg-white/20 px-2.5 py-0.5 rounded-full text-xs font-bold tabular-nums">
              {cartCount} {cartCount === 1 ? 'item' : 'items'}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

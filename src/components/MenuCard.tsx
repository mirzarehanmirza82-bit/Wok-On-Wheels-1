import React, { useState } from 'react';
import { MenuItem } from '../types/restaurant';
import { Plus, Minus, ShoppingBag, Check } from 'lucide-react';

interface MenuCardProps {
  dish: MenuItem;
  onAddToCart: (dish: MenuItem, quantity: number) => void;
  onOpenDetails: (dish: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  dish,
  onAddToCart,
  onOpenDetails,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(dish, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity(Math.max(1, quantity - 1));
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity(quantity + 1);
  };

  return (
    <div 
      onClick={() => onOpenDetails(dish)}
      className="group relative bg-[#11131a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#e02874]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-[#e02874]/10"
    >
      {/* Top Media Area */}
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/images/hero_wok_noodles_1790402210043.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11131a] via-transparent to-transparent opacity-80" />

          {/* Top Tag */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-300 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
              {dish.categoryName}
            </span>
            {dish.isPopular && (
              <span className="text-[10px] font-bold text-white bg-gradient-to-r from-[#e02874] to-[#f43f5e] px-2 py-0.5 rounded-full shadow-sm">
                Chef's Pick
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h3 className="font-display font-bold text-white text-base sm:text-lg leading-snug group-hover:text-[#f43f5e] transition-colors">
              {dish.name}
            </h3>
          </div>

          <div className="text-base font-bold text-white font-mono mb-2">
            PKR {dish.price.toLocaleString()}
          </div>

          {dish.description && (
            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
              {dish.description}
            </p>
          )}
        </div>
      </div>

      {/* Action Controls */}
      <div className="p-4 sm:p-5 pt-0 mt-2">
        <div className="flex items-center gap-2 pt-3 border-t border-white/5">
          {/* Quantity Stepper */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="flex items-center bg-slate-900 border border-white/10 rounded-xl p-0.5 shrink-0"
          >
            <button
              type="button"
              onClick={handleDecrease}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 text-xs font-semibold text-white font-mono tabular-nums">
              {quantity}
            </span>
            <button
              type="button"
              onClick={handleIncrease}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Cart button */}
          <button
            type="button"
            onClick={handleAdd}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              added
                ? 'bg-emerald-600 text-white'
                : 'bg-[#e02874] hover:bg-[#c71f63] text-white shadow-md shadow-[#e02874]/20'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

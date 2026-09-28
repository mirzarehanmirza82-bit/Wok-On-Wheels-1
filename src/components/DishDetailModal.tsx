import React, { useState } from 'react';
import { MenuItem } from '../types/restaurant';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToCart: (dish: MenuItem, quantity: number) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!dish) return null;

  const handleAdd = () => {
    onAddToCart(dish, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[#0e1017] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Food Image with subtle overlay */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/images/hero_wok_noodles_1790402210043.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-black/30" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#f43f5e] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {dish.categoryName}
            </span>
            {dish.portionNote && (
              <span className="text-xs font-medium text-slate-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                {dish.portionNote}
              </span>
            )}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
              {dish.name}
            </h3>
            <span className="font-display text-xl font-bold text-[#f43f5e] tabular-nums whitespace-nowrap">
              PKR {dish.price}
            </span>
          </div>

          {dish.description && (
            <p className="text-sm text-slate-300 leading-relaxed">
              {dish.description}
            </p>
          )}

          {/* Quantity Controls & Add to Cart */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center justify-between w-full sm:w-auto bg-slate-900 border border-white/10 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 text-sm font-bold text-white tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-slate-400 hover:text-white transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              disabled={addedAnimation}
              className={`flex-1 w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                addedAnimation
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-r from-[#e02874] to-[#f43f5e] hover:from-[#c71f63] hover:to-[#e11d48] text-white shadow-lg shadow-[#e02874]/20'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart · PKR {(dish.price * quantity).toLocaleString()}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

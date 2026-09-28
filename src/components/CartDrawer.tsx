import React, { useState } from 'react';
import { CartItem, OrderType, CustomerDetails } from '../types/restaurant';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Send, 
  Bike, 
  Store, 
  UtensilsCrossed, 
  Calendar, 
  Clock, 
  Users 
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [form, setForm] = useState<CustomerDetails>({
    name: '',
    phone: '',
    address: '',
    note: '',
    guests: 2,
    date: new Date().toISOString().split('T')[0],
    time: '20:00'
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + (item.dish.price * item.quantity), 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrorMsg(null);
  };

  const handleWhatsAppOrder = () => {
    // Validation
    if (!form.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!form.phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }
    if (orderType === 'delivery' && (!form.address || !form.address.trim())) {
      setErrorMsg('Please enter your delivery address in Multan.');
      return;
    }
    if (orderType !== 'dine-in' && cart.length === 0) {
      setErrorMsg('Your cart is empty. Please add items before checking out.');
      return;
    }

    // Format WhatsApp Message exactly as specified in prompt
    let message = `Hello Wok On Wheels,\n\n`;
    if (orderType === 'dine-in') {
      message += `I would like to book a table.\n\n`;
      message += `Name:\n${form.name}\n\n`;
      message += `Phone:\n${form.phone}\n\n`;
      message += `Guests:\n${form.guests || 2}\n\n`;
      message += `Date:\n${form.date || 'Today'}\n\n`;
      message += `Preferred Time:\n${form.time || 'Evening'}\n\n`;
      if (cart.length > 0) {
        message += `Pre-Ordered Dishes:\n`;
        cart.forEach((item, index) => {
          message += `${index + 1}. ${item.dish.name} × ${item.quantity} — PKR ${(item.dish.price * item.quantity).toLocaleString()}\n`;
        });
        message += `\nEstimated Food Subtotal:\nPKR ${subtotal.toLocaleString()}\n\n`;
      }
      if (form.note?.trim()) {
        message += `Additional Request:\n${form.note}\n\n`;
      }
      message += `Please confirm my booking.`;
    } else {
      const typeLabel = orderType === 'delivery' ? 'Delivery' : 'Pickup';
      message += `I would like to place an order.\n\n`;
      message += `Order Type:\n${typeLabel}\n\n`;
      message += `Customer Name:\n${form.name}\n\n`;
      message += `Phone:\n${form.phone}\n\n`;
      if (orderType === 'delivery') {
        message += `Address:\n${form.address}\n\n`;
      }
      message += `Order Items:\n\n`;
      cart.forEach((item, index) => {
        message += `${index + 1}. ${item.dish.name} × ${item.quantity} — PKR ${(item.dish.price * item.quantity).toLocaleString()}\n\n`;
      });
      message += `Subtotal:\nPKR ${subtotal.toLocaleString()}\n\n`;
      if (form.note?.trim()) {
        message += `Additional Note:\n${form.note}\n\n`;
      }
      message += `Please confirm my order.`;
    }

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm transition-opacity">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e1017] border-l border-white/10 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#f43f5e]" />
              <h2 className="font-display text-lg font-bold text-white">Your Order</h2>
              {cart.length > 0 && (
                <span className="text-xs text-slate-400">
                  ({cart.reduce((s, i) => s + i.quantity, 0)} items)
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            {/* Order Type Tabs */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Order Type
              </label>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900 rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`flex flex-col items-center justify-center py-2 px-1 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    orderType === 'delivery'
                      ? 'bg-[#e02874] text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Bike className="w-4 h-4 mb-1" />
                  <span>Delivery</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('pickup')}
                  className={`flex flex-col items-center justify-center py-2 px-1 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    orderType === 'pickup'
                      ? 'bg-[#e02874] text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Store className="w-4 h-4 mb-1" />
                  <span>Pickup</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('dine-in')}
                  className={`flex flex-col items-center justify-center py-2 px-1 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    orderType === 'dine-in'
                      ? 'bg-[#e02874] text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <UtensilsCrossed className="w-4 h-4 mb-1" />
                  <span>Table Booking</span>
                </button>
              </div>
            </div>

            {/* Cart Items List */}
            {cart.length === 0 ? (
              <div className="py-8 text-center border border-dashed border-white/10 rounded-2xl p-6 bg-slate-900/30">
                <ShoppingBag className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                <p className="text-sm font-medium text-slate-300">Your cart is empty</p>
                <p className="text-xs text-slate-500 mt-1">
                  Add savory dumplings, wok noodles, or wings from the menu!
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Selected Dishes
                  </span>
                  <button
                    onClick={onClearCart}
                    className="text-[11px] text-slate-500 hover:text-red-400 transition-colors"
                  >
                    Clear all
                  </button>
                </div>

                <div className="divide-y divide-white/5">
                  {cart.map((item) => (
                    <div key={item.dish.id} className="py-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <img 
                          src={item.dish.image} 
                          alt={item.dish.name}
                          className="w-12 h-12 rounded-lg object-cover bg-slate-800 shrink-0" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white truncate">
                            {item.dish.name}
                          </p>
                          <p className="text-xs text-slate-400 tabular-nums">
                            PKR {item.dish.price} each
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {/* Stepper */}
                        <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-white/5">
                          <button
                            onClick={() => onUpdateQuantity(item.dish.id, -1)}
                            className="p-1 text-slate-400 hover:text-white rounded transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-white tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.dish.id, 1)}
                            className="p-1 text-slate-400 hover:text-white rounded transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.dish.id)}
                          className="p-1.5 text-slate-500 hover:text-red-400 transition-colors rounded-lg"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Customer Details Form */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {orderType === 'dine-in' ? 'Table Reservation Details' : 'Customer Information'}
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Bilal Ahmed"
                    className="w-full px-3 py-2 text-sm bg-slate-900 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#e02874]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 0300 1234567"
                    className="w-full px-3 py-2 text-sm bg-slate-900 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#e02874]"
                  />
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Delivery Address in Multan <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      rows={2}
                      value={form.address}
                      onChange={handleInputChange}
                      placeholder="e.g. House #, Street, Model Town B, Multan"
                      className="w-full px-3 py-2 text-sm bg-slate-900 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#e02874] resize-none"
                    />
                  </div>
                )}

                {orderType === 'dine-in' && (
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1">
                        <Users className="w-3 h-3 text-[#f43f5e]" /> Guests
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        name="guests"
                        value={form.guests}
                        onChange={handleInputChange}
                        className="w-full px-2 py-2 text-sm bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e02874]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#f43f5e]" /> Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleInputChange}
                        className="w-full px-2 py-2 text-xs bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e02874]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#f43f5e]" /> Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={form.time}
                        onChange={handleInputChange}
                        className="w-full px-2 py-2 text-xs bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e02874]"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Special Instructions / Notes
                  </label>
                  <textarea
                    name="note"
                    rows={2}
                    value={form.note}
                    onChange={handleInputChange}
                    placeholder="e.g. Extra spicy, no garlic, or dining requests..."
                    className="w-full px-3 py-2 text-sm bg-slate-900 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#e02874] resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Error prompt */}
            {errorMsg && (
              <div className="p-3 bg-red-950/60 border border-red-500/30 text-rose-300 text-xs rounded-xl">
                {errorMsg}
              </div>
            )}
          </div>

          {/* Footer & WhatsApp CTA */}
          <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0b0c10] space-y-3">
            {cart.length > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Estimated Subtotal:</span>
                <span className="font-display text-lg font-bold text-white tabular-nums">
                  PKR {subtotal.toLocaleString()}
                </span>
              </div>
            )}

            <button
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold rounded-xl shadow-lg shadow-emerald-950/30 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>
                {orderType === 'dine-in' 
                  ? 'Request Table on WhatsApp' 
                  : 'Order on WhatsApp'}
              </span>
            </button>

            <p className="text-[11px] text-center text-slate-500">
              Orders are sent directly to Wok On Wheels WhatsApp for instant kitchen confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

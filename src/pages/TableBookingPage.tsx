import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Users, Calendar, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const TableBookingPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    request: ''
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!form.phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }

    // WhatsApp Message exact structure from Prompt Section 9
    let msg = `Hello Wok On Wheels,\n\n`;
    msg += `I would like to book a table.\n\n`;
    msg += `Name:\n${form.name}\n\n`;
    msg += `Phone:\n${form.phone}\n\n`;
    msg += `Guests:\n${form.guests}\n\n`;
    msg += `Date:\n${form.date}\n\n`;
    msg += `Preferred Time:\n${form.time}\n\n`;
    if (form.request.trim()) {
      msg += `Additional Request:\n${form.request}\n\n`;
    }
    msg += `Please confirm my booking.`;

    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#f43f5e]">
          Dine-In Reservations
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Book a Table
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Reserve your dining spot at Wok On Wheels Multan. Send your details directly to our WhatsApp for quick reservation confirmation.
        </p>
      </div>

      {/* Booking Form Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-[#11131a] border border-white/10 shadow-2xl relative">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Tariq Mehmood"
                className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#e02874] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Phone / WhatsApp <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 0300 1234567"
                className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#e02874] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#f43f5e]" />
                Number of Guests
              </label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e02874] text-sm cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Person' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#f43f5e]" />
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e02874] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#f43f5e]" />
                Preferred Time
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e02874] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#f43f5e]" />
              Additional Request / Seating Notes
            </label>
            <textarea
              name="request"
              rows={3}
              value={form.request}
              onChange={handleChange}
              placeholder="e.g. Birthday dinner, family corner seating, or spicy preference..."
              className="w-full px-4 py-3 bg-slate-900 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#e02874] text-sm resize-none"
            />
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-950/60 border border-red-500/30 text-rose-300 text-xs rounded-xl">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold rounded-2xl shadow-xl shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Send Table Booking via WhatsApp</span>
          </button>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Instant direct routing to restaurant management on WhatsApp</span>
          </div>
        </form>
      </div>
    </div>
  );
};

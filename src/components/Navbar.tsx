import React, { useState } from 'react';
import { Logo } from './Logo';
import { ActivePage } from '../types/restaurant';
import { ShoppingBag, Menu as MenuIcon, X, PhoneCall } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark / Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            aria-label="Wok On Wheels Home"
          >
            <Logo size="md" showText={true} />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-sm font-medium transition-colors cursor-pointer py-1 ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e02874] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Cart & Order Now) */}
          <div className="flex items-center gap-3">
            {/* Direct Phone action button on desktop (no visible number text, just clean button) */}
            <a
              href={RESTAURANT_INFO.phoneCallable}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white rounded-lg border border-white/10 hover:border-white/20 bg-slate-900/60 transition-colors"
              title="Call Wok On Wheels"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#f43f5e]" />
              <span>Call Now</span>
            </a>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-[#e02874]/50 text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#e02874]"
              aria-label={`View cart (${cartCount} items)`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 flex items-center justify-center text-[11px] font-bold text-white bg-[#e02874] rounded-full shadow-lg tabular-nums">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order Now CTA */}
            <button
              onClick={() => handleNavClick('menu')}
              className="px-4 py-2 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#e02874] to-[#f43f5e] hover:from-[#c71f63] hover:to-[#e11d48] rounded-xl shadow-lg shadow-[#e02874]/20 transition-all cursor-pointer whitespace-nowrap"
            >
              Order Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1017] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium text-left transition-colors ${
                    isActive 
                      ? 'bg-white/5 text-white font-semibold border-l-4 border-[#e02874]' 
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}

            {/* Quick Phone Call in mobile menu (button only, no number text) */}
            <div className="pt-3 border-t border-white/5 mt-2">
              <a
                href={RESTAURANT_INFO.phoneCallable}
                className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-lg bg-slate-900 border border-white/10 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#f43f5e]" />
                <span>Call Restaurant Directly</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

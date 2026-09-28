import React, { useState, useEffect } from 'react';
import { ActivePage, CartItem, MenuItem } from './types/restaurant';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { DishDetailModal } from './components/DishDetailModal';
import { LogoIntro } from './components/LogoIntro';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { TableBookingPage } from './pages/TableBookingPage';
import { RESTAURANT_INFO } from './data/restaurantData';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('wow_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('wow_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  const handleAddToCart = (dish: MenuItem, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { dish, quantity }];
    });
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCart((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#f3f4f6] flex flex-col relative selection:bg-[#e02874] selection:text-white">
      {/* 1. Logo Intro Animation on initial load */}
      {showIntro && (
        <LogoIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* 2. Sticky 3-Zone Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        cartCount={cartTotalItems}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* 3. Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenDetails={setSelectedDish}
          />
        )}
        {activePage === 'menu' && (
          <MenuPage
            onAddToCart={handleAddToCart}
            onOpenDetails={setSelectedDish}
            onOpenCart={() => setCartOpen(true)}
            cartCount={cartTotalItems}
          />
        )}
        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {activePage === 'gallery' && (
          <GalleryPage />
        )}
        {activePage === 'reviews' && (
          <ReviewsPage />
        )}
        {activePage === 'contact' && (
          <ContactPage />
        )}
        {activePage === 'booking' && (
          <TableBookingPage />
        )}
      </main>

      {/* 4. Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 5. Dish Detail Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 6. Floating Action Button for WhatsApp Instant Access */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Wok On Wheels! I would like to make an inquiry.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/60 transition-transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-bold hidden sm:inline">WhatsApp Order</span>
        </a>
      </div>

      {/* 7. Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

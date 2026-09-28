export type MenuCategory = 
  | 'all'
  | 'dumplings'
  | 'noodles'
  | 'chicken-bowls'
  | 'beef-bowls'
  | 'korean-wings'
  | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  categoryName: string;
  price: number;
  description?: string;
  image: string;
  isPopular?: boolean;
  portionNote?: string;
}

export interface CartItem {
  dish: MenuItem;
  quantity: number;
}

export type OrderType = 'delivery' | 'pickup' | 'dine-in';

export interface CustomerDetails {
  name: string;
  phone: string;
  address?: string;
  note?: string;
  // Table booking specifics
  guests?: number;
  date?: string;
  time?: string;
}

export type ActivePage = 'home' | 'menu' | 'about' | 'gallery' | 'reviews' | 'contact' | 'booking';

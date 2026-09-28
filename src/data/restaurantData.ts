import { MenuItem } from '../types/restaurant';

export const RESTAURANT_INFO = {
  name: 'Wok On Wheels',
  tagline: 'Korean & Chinese food',
  brandShort: 'WOW',
  phoneDisplay: '0300 7228933',
  phoneCallable: 'tel:03007228933',
  whatsappNumber: '923007228933',
  address: 'Northern Byp, Model Town B Block B Model Town, Multan, 60000, Pakistan',
  addressShort: '98 Model Town, B-Block Northern Bypass Multan',
  googleRating: 5.0,
  googleReviewCount: 5,
  facebookUrl: 'https://www.facebook.com/p/Wok-On-Wheel-61593381279919/',
  instagramUrl: 'https://www.instagram.com/wokonwheelsmultan/',
  instagramHandle: '@wokonwheelsmultan',
  googleMapsEmbed: 'https://maps.google.com/maps?q=Northern+Byp,+Model+Town+B+Block+B+Model+Town,+Multan,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed',
  googleMapsLink: 'https://maps.google.com/?q=Northern+Byp,+Model+Town+B+Block+B+Model+Town,+Multan,+Pakistan'
};

// High-resolution dish and drink specific photography
export const ASSETS = {
  // Noodles & Bowls
  heroNoodles: '/src/assets/images/hero_wok_noodles_1790402210043.jpg',
  noodles: '/src/assets/images/hero_wok_noodles_1790402210043.jpg',
  manchurianBowl: '/src/assets/images/dish_manchurian_gravy_1790403095018.jpg',
  crispyBeefBowl: '/src/assets/images/dish_crispy_beef_bowl_1790403032080.jpg',
  friedCrackerNoodles: '/src/assets/images/dish_fried_cracker_noodles_1790403107445.jpg',

  // Dumplings
  chiliDumplings: '/src/assets/images/menu_chili_dumplings_1790402231737.jpg',
  steamedDumplings: '/src/assets/images/dish_steamed_dumplings_1790403016575.jpg',
  honeySesameDumplings: '/src/assets/images/dish_sesame_dumplings_1790403055774.jpg',

  // Wings
  spicyKoreanWings: '/src/assets/images/menu_korean_wings_1790402220684.jpg',
  dynamiteWings: '/src/assets/images/dish_dynamite_wings_1790403004541.jpg',
  honeyWings: '/src/assets/images/dish_honey_wings_1790403044105.jpg',

  // Drinks & Margaritas
  mintMargarita: '/src/assets/images/drink_mint_margarita_1790402966401.jpg',
  strawberryMargarita: '/src/assets/images/drink_strawberry_margarita_1790402979401.jpg',
  blueberryBlossom: '/src/assets/images/drink_blueberry_blossom_1790402992867.jpg',
  freshLemonade: '/src/assets/images/drink_fresh_lemonade_1790403069096.jpg',
  cannedDrinks: '/src/assets/images/drink_chilled_cans_1790403082968.jpg',
  craftDrinksGeneral: '/src/assets/images/menu_craft_drinks_1790402242996.jpg'
};

export const MENU_CATEGORIES = [
  { id: 'all', name: 'Full Menu', count: 34 },
  { id: 'dumplings', name: 'Dumplings', count: 9 },
  { id: 'noodles', name: 'Noodles', count: 7 },
  { id: 'chicken-bowls', name: 'Chicken Noodle Bowls', count: 10 },
  { id: 'beef-bowls', name: 'Beef Noodle Bowls', count: 3 },
  { id: 'korean-wings', name: 'Korean Wings', count: 4 },
  { id: 'drinks', name: 'Drinks & Margaritas', count: 10 },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // --- DUMPLINGS (Rs. 599 Only) ---
  {
    id: 'd-1',
    name: 'Wok on Wheel Chilli Dumplings',
    category: 'dumplings',
    categoryName: 'Dumplings',
    price: 599,
    description: 'Signature dumplings tossed in house special chili oil and aromatic Asian seasonings.',
    image: ASSETS.chiliDumplings,
    isPopular: true
  },
  {
    id: 'd-2',
    name: 'Honey Sesame Dumplings',
    category: 'dumplings',
    categoryName: 'Dumplings',
    price: 599,
    description: 'Dumplings glazed with a sweet and savory honey sesame reduction with toasted seeds.',
    image: ASSETS.honeySesameDumplings
  },
  {
    id: 'd-3',
    name: 'Mala Dumplings',
    category: 'dumplings',
    categoryName: 'Dumplings',
    price: 599,
    description: 'Tossed in bold, spicy and numbing Mala Sichuan chili glaze.',
    image: ASSETS.chiliDumplings,
    isPopular: true
  },
  {
    id: 'd-4',
    name: 'Classic Dumplings',
    category: 'dumplings',
    categoryName: 'Dumplings',
    price: 599,
    description: 'Traditional style dumplings served with house dipping sauce.',
    image: ASSETS.steamedDumplings
  },
  {
    id: 'd-5',
    name: 'Manchurian Dumplings',
    category: 'dumplings',
    categoryName: 'Dumplings',
    price: 599,
    description: 'Dumplings coated in rich Manchurian garlic-ginger sauce.',
    image: ASSETS.chiliDumplings
  },
  {
    id: 'd-6',
    name: 'Szechuan Dumplings',
    category: 'dumplings',
    categoryName: 'Dumplings',
    price: 599,
    description: 'Dumplings coated with fiery Szechuan chili peppercorn sauce.',
    image: ASSETS.chiliDumplings
  },
  {
    id: 'd-7',
    name: 'Steamed Dumplings',
    category: 'dumplings',
    categoryName: 'Dumplings',
    price: 599,
    description: 'Delicately steamed dumplings in bamboo steamer, served hot and tender.',
    image: ASSETS.steamedDumplings
  },
  {
    id: 'd-8',
    name: 'Korean Dumplings',
    category: 'dumplings',
    categoryName: 'Dumplings',
    price: 599,
    description: 'Korean-style dumplings with zesty savory glaze.',
    image: ASSETS.chiliDumplings,
    isPopular: true
  },
  {
    id: 'd-9',
    name: 'Peanut Butter Dumplings',
    category: 'dumplings',
    categoryName: 'Dumplings',
    price: 599,
    description: 'Unique savory dumplings served with creamy spiced peanut glaze.',
    image: ASSETS.honeySesameDumplings
  },

  // --- NOODLES ---
  {
    id: 'n-1',
    name: 'Fried Cracker Noodles (Chicken)',
    category: 'noodles',
    categoryName: 'Noodles',
    price: 599,
    description: 'Crispy crackling noodles tossed with chicken and seasoned wok veggies.',
    image: ASSETS.friedCrackerNoodles
  },
  {
    id: 'n-2',
    name: 'Korean Sweet Chilli Noodles (Chicken)',
    category: 'noodles',
    categoryName: 'Noodles',
    price: 599,
    description: 'Wok-tossed noodles with Korean sweet chili sauce and tender chicken.',
    image: ASSETS.heroNoodles,
    isPopular: true
  },
  {
    id: 'n-3',
    name: 'Chicken Chow Mein',
    category: 'noodles',
    categoryName: 'Noodles',
    price: 599,
    description: 'Classic wok-stirred noodles with chicken strips, crisp cabbage, and scallions.',
    image: ASSETS.heroNoodles,
    isPopular: true
  },
  {
    id: 'n-4',
    name: 'Dragon Chicken Noodles',
    category: 'noodles',
    categoryName: 'Noodles',
    price: 599,
    description: 'Spicy wok-tossed noodles with glazed dragon chicken and chili peppers.',
    image: ASSETS.friedCrackerNoodles
  },
  {
    id: 'n-5',
    name: 'Mala Chicken Noodles',
    category: 'noodles',
    categoryName: 'Noodles',
    price: 599,
    description: 'Spicy Mala wok noodles packed with savory aromatics.',
    image: ASSETS.heroNoodles
  },
  {
    id: 'n-6',
    name: 'Beef Chilli Noodles',
    category: 'noodles',
    categoryName: 'Noodles',
    price: 799,
    description: 'Wok noodles tossed with tender beef slivers and hot green chilies.',
    image: ASSETS.crispyBeefBowl,
    isPopular: true
  },
  {
    id: 'n-7',
    name: 'Asian Beef Noodles',
    category: 'noodles',
    categoryName: 'Noodles',
    price: 799,
    description: 'Stir-fried noodles with rich savory beef cuts in Asian sauce blend.',
    image: ASSETS.crispyBeefBowl
  },

  // --- NOODLES BOWLS (Chicken Chow Mein) - Rs. 899 Only ---
  {
    id: 'nb-c1',
    name: 'Chilli Dry With Chow Mein',
    category: 'chicken-bowls',
    categoryName: 'Chicken Noodle Bowls',
    price: 899,
    description: 'Crispy chicken chili dry served over a hearty bowl of chicken chow mein.',
    image: ASSETS.heroNoodles,
    isPopular: true
  },
  {
    id: 'nb-c2',
    name: 'Manchurian With Chow Mein',
    category: 'chicken-bowls',
    categoryName: 'Chicken Noodle Bowls',
    price: 899,
    description: 'Chicken Manchurian in savory red sauce paired over fresh wok chow mein.',
    image: ASSETS.manchurianBowl,
    isPopular: true
  },
  {
    id: 'nb-c3',
    name: 'Korean Chicken With Chow Mein',
    category: 'chicken-bowls',
    categoryName: 'Chicken Noodle Bowls',
    price: 899,
    description: 'Authentic Korean glazed chicken served over stir-fried chow mein bowl.',
    image: ASSETS.heroNoodles,
    isPopular: true
  },
  {
    id: 'nb-c4',
    name: 'Hot Garlic Chicken With Chow Mein',
    category: 'chicken-bowls',
    categoryName: 'Chicken Noodle Bowls',
    price: 899,
    description: 'Fragrant spicy garlic chicken served over seasoned chow mein.',
    image: ASSETS.manchurianBowl
  },
  {
    id: 'nb-c5',
    name: 'Dragon Chicken With Chow Mein',
    category: 'chicken-bowls',
    categoryName: 'Chicken Noodle Bowls',
    price: 899,
    description: 'Crispy glazed dragon chicken served over chow mein noodles.',
    image: ASSETS.manchurianBowl
  },
  {
    id: 'nb-c6',
    name: 'Szechuan Chicken With Chow Mein',
    category: 'chicken-bowls',
    categoryName: 'Chicken Noodle Bowls',
    price: 899,
    description: 'Spicy peppered Szechuan chicken served over fresh chow mein bowl.',
    image: ASSETS.manchurianBowl
  },
  {
    id: 'nb-c7',
    name: 'Kung Pao Chicken With Chow Mein',
    category: 'chicken-bowls',
    categoryName: 'Chicken Noodle Bowls',
    price: 899,
    description: 'Tender chicken, peanuts, and chili peppers served over stir-fried chow mein.',
    image: ASSETS.heroNoodles
  },
  {
    id: 'nb-c8',
    name: 'Mala Chicken With Chow Mein',
    category: 'chicken-bowls',
    categoryName: 'Chicken Noodle Bowls',
    price: 899,
    description: 'Bold Mala spiced chicken served over savory chow mein bowl.',
    image: ASSETS.heroNoodles
  },
  {
    id: 'nb-c9',
    name: 'Nim Jim Chicken With Chow Mein',
    category: 'chicken-bowls',
    categoryName: 'Chicken Noodle Bowls',
    price: 899,
    description: 'Tangy and spicy Nim Jim seasoned chicken paired with chow mein noodles.',
    image: ASSETS.heroNoodles
  },
  {
    id: 'nb-c10',
    name: 'Thai Basil Chicken With Chow Mein',
    category: 'chicken-bowls',
    categoryName: 'Chicken Noodle Bowls',
    price: 899,
    description: 'Aromatic basil chili chicken served over hot wok chow mein.',
    image: ASSETS.heroNoodles
  },

  // --- NOODLES BOWLS (Beef Chow Mein) - Rs. 1299 Only ---
  {
    id: 'nb-b1',
    name: 'Beef Chilli Dry With Chow Mein',
    category: 'beef-bowls',
    categoryName: 'Beef Noodle Bowls',
    price: 1299,
    description: 'Crispy beef chili dry with fresh green chilies served over beef chow mein.',
    image: ASSETS.crispyBeefBowl,
    isPopular: true
  },
  {
    id: 'nb-b2',
    name: 'Mongolian Beef With Chow Mein',
    category: 'beef-bowls',
    categoryName: 'Beef Noodle Bowls',
    price: 1299,
    description: 'Savory sweet soy glazed Mongolian beef strips served over chow mein.',
    image: ASSETS.crispyBeefBowl,
    isPopular: true
  },
  {
    id: 'nb-b3',
    name: 'Crispy Beef With Chow Mein',
    category: 'beef-bowls',
    categoryName: 'Beef Noodle Bowls',
    price: 1299,
    description: 'Crisp shredded beef tossed in savory wok sauce over beef chow mein.',
    image: ASSETS.crispyBeefBowl
  },

  // --- KOREAN WINGS (Rs. 775 Only - 6 Pcs) ---
  {
    id: 'w-1',
    name: 'Dynamite Wings (6 Pcs)',
    category: 'korean-wings',
    categoryName: 'Korean Wings',
    price: 775,
    portionNote: '6 Pcs',
    description: 'Crispy golden fried wings tossed in creamy zesty dynamite sauce.',
    image: ASSETS.dynamiteWings,
    isPopular: true
  },
  {
    id: 'w-2',
    name: 'Spicy Korean Wings (6 Pcs)',
    category: 'korean-wings',
    categoryName: 'Korean Wings',
    price: 775,
    portionNote: '6 Pcs',
    description: 'Crispy chicken wings glazed in spicy Korean red sauce and toasted sesame.',
    image: ASSETS.spicyKoreanWings,
    isPopular: true
  },
  {
    id: 'w-3',
    name: 'Honey Wings (6 Pcs)',
    category: 'korean-wings',
    categoryName: 'Korean Wings',
    price: 775,
    portionNote: '6 Pcs',
    description: 'Crispy wings coated in sweet honey soy glaze and toasted seeds.',
    image: ASSETS.honeyWings
  },
  {
    id: 'w-4',
    name: 'Hot Garlic Wings (6 Pcs)',
    category: 'korean-wings',
    categoryName: 'Korean Wings',
    price: 775,
    portionNote: '6 Pcs',
    description: 'Wings tossed in fiery garlic and chili sauce with fresh green onions.',
    image: ASSETS.spicyKoreanWings
  },

  // --- DRINKS ---
  {
    id: 'dr-1',
    name: 'Mint Margarita',
    category: 'drinks',
    categoryName: 'Drinks',
    price: 299,
    description: 'Chilled crushed ice beverage with vibrant fresh mint leaves and zesty lime.',
    image: ASSETS.mintMargarita,
    isPopular: true
  },
  {
    id: 'dr-2',
    name: 'Strawberry Margarita',
    category: 'drinks',
    categoryName: 'Drinks',
    price: 349,
    description: 'Vibrant sweet strawberry blend with tangy lime, crushed ice, and fresh fruit slice.',
    image: ASSETS.strawberryMargarita,
    isPopular: true
  },
  {
    id: 'dr-3',
    name: 'Blueberry Blossom',
    category: 'drinks',
    categoryName: 'Drinks',
    price: 349,
    description: 'Refreshing blueberry cooler infused with floral notes, plump berries, and crushed ice.',
    image: ASSETS.blueberryBlossom,
    isPopular: true
  },
  {
    id: 'dr-4',
    name: 'Raspberry Refreshment',
    category: 'drinks',
    categoryName: 'Drinks',
    price: 349,
    description: 'Tart and sweet chilled raspberry mocktail served over ice.',
    image: ASSETS.strawberryMargarita
  },
  {
    id: 'dr-5',
    name: 'Lemonade',
    category: 'drinks',
    categoryName: 'Drinks',
    price: 299,
    description: 'Classic freshly squeezed sparkling lemonade with crushed ice and mint.',
    image: ASSETS.freshLemonade
  },
  {
    id: 'dr-6',
    name: 'Fresh Lime',
    category: 'drinks',
    categoryName: 'Drinks',
    price: 199,
    description: 'Zesty sparkling lime drink served with ice cubes and fresh lime wedge.',
    image: ASSETS.mintMargarita
  },
  {
    id: 'dr-7',
    name: 'Can (Coke, Sprite)',
    category: 'drinks',
    categoryName: 'Drinks',
    price: 180,
    description: 'Chilled canned soft drinks on ice (Coke or Sprite).',
    image: ASSETS.cannedDrinks
  },
  {
    id: 'dr-8',
    name: '345 Ml (Coke, Sprite)',
    category: 'drinks',
    categoryName: 'Drinks',
    price: 99,
    description: '345 ml chilled bottle of soda.',
    image: ASSETS.cannedDrinks
  },
  {
    id: 'dr-9',
    name: 'Small Water',
    category: 'drinks',
    categoryName: 'Drinks',
    price: 80,
    description: 'Purified drinking water bottle chilled.',
    image: ASSETS.freshLemonade
  },
  {
    id: 'dr-10',
    name: 'Large Water',
    category: 'drinks',
    categoryName: 'Drinks',
    price: 199,
    description: 'Large bottled purified drinking water chilled.',
    image: ASSETS.freshLemonade
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g-1',
    title: 'Signature Chicken Chow Mein Wok Bowl',
    category: 'Noodles & Bowls',
    image: ASSETS.heroNoodles,
    aspect: 'aspect-[16/10]'
  },
  {
    id: 'g-2',
    title: 'Spicy Korean Wings with Toasted Sesame',
    category: 'Korean Wings',
    image: ASSETS.spicyKoreanWings,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-3',
    title: 'Dynamite Wings with Creamy Orange Sauce',
    category: 'Korean Wings',
    image: ASSETS.dynamiteWings,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-4',
    title: 'Wok On Wheels Chili Dumplings',
    category: 'Dumplings',
    image: ASSETS.chiliDumplings,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-5',
    title: 'Steamed Dumplings in Bamboo Steamer',
    category: 'Dumplings',
    image: ASSETS.steamedDumplings,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-6',
    title: 'Honey Sesame Pan-Seared Dumplings',
    category: 'Dumplings',
    image: ASSETS.honeySesameDumplings,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-7',
    title: 'Crispy Beef Chili Dry Bowl',
    category: 'Noodles & Bowls',
    image: ASSETS.crispyBeefBowl,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-8',
    title: 'Chicken Manchurian Gravy with Chow Mein',
    category: 'Noodles & Bowls',
    image: ASSETS.manchurianBowl,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-9',
    title: 'Icy Green Mint Margarita',
    category: 'Mocktails',
    image: ASSETS.mintMargarita,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-10',
    title: 'Chilled Strawberry Margarita with Fresh Berries',
    category: 'Mocktails',
    image: ASSETS.strawberryMargarita,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-11',
    title: 'Blueberry Blossom Specialty Drink',
    category: 'Mocktails',
    image: ASSETS.blueberryBlossom,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'g-12',
    title: 'Chilled Canned Sodas on Ice',
    category: 'Mocktails',
    image: ASSETS.cannedDrinks,
    aspect: 'aspect-[4/3]'
  }
];

export interface CustomerReview {
  id: string;
  name: string;
  rating: number;
  timeAgo: string;
  comment: string;
  favoriteDish?: string;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Muhammad Usman',
    rating: 5,
    timeAgo: '1 week ago',
    comment: 'Best Korean food in Multan! The Chicken Chow Mein bowl and Korean Spicy Wings were fresh, piping hot, and full of flavor. Ordered via WhatsApp and got it delivered right on time.',
    favoriteDish: 'Chicken Chow Mein Bowl'
  },
  {
    id: 'rev-2',
    name: 'Ayesha Khan',
    rating: 5,
    timeAgo: '2 weeks ago',
    comment: 'Tried their Wok on Wheel Chilli Dumplings and Mint Margarita. Absolutely delicious! Authentic Asian taste and super clean packaging in Model Town.',
    favoriteDish: 'Chilli Dumplings & Mint Margarita'
  },
  {
    id: 'rev-3',
    name: 'Hamza Tariq',
    rating: 5,
    timeAgo: '3 weeks ago',
    comment: 'Dynamite Wings are top tier! Crispy on the outside, juicy inside with that perfect creamy spicy glaze. Highly recommended spot in Multan.',
    favoriteDish: 'Dynamite Wings'
  },
  {
    id: 'rev-4',
    name: 'Zainab Fatima',
    rating: 5,
    timeAgo: 'a month ago',
    comment: '5 stars well deserved! Steamed dumplings were delicate and tender, and the Mongolian Beef Chow Mein had amazing wok hei taste. Fast response on WhatsApp.',
    favoriteDish: 'Steamed Dumplings'
  },
  {
    id: 'rev-5',
    name: 'Shahzaib Ali',
    rating: 5,
    timeAgo: 'a month ago',
    comment: 'Multan needed a genuine Korean and Chinese street bowl place like Wok On Wheels. Every item we ordered was fresh, saucy, and flavorful.',
    favoriteDish: 'Beef Chilli Noodles'
  }
];


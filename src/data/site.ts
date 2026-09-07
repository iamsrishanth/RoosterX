// RoosterX canonical brand data - verified Sep 7, 2026
// All numbers, names, addresses, and reviews are real. Never invent.

export const BRAND = {
  wordmark: "RoosterX",
  fullLine: "RoosterX - The Arabian Fusion",
  taglinePrimary: "Freshly grilled. Perfectly rolled. Totally addictive.",
  taglineSecondary: "Experience love in every bite with roosterx!",
  heroKicker: "THE ARABIAN FUSION",
  heroTitle: "Freshly Grilled. Perfectly Rolled. Totally Addictive.",
  heroSubtext:
    "Hyderabad's favourite shawarma, grilled over open flame and wrapped to order. Order online or walk in.",
  orderUrl: "https://order.roosterx.in/store/1/delivery",
  instagram: "https://instagram.com/roosterx.in",
  instagramHandle: "@roosterx.in",
  email: "support@roosterx.in",
  gstin: "36AJDPL0514E1ZS",
  costForTwo: 300,
  hours: "12:00 PM - 12:00 AM daily",
  brandPhone: "+91 86393 39205",
  brandPhoneRaw: "918639339205",
  deliveryPhone: "+91 83283 61331",
  deliveryPhoneRaw: "918328361331",
  flagshipAddress:
    "1-1-261/13/A, Chikkadpally, Near Metro Pillar 1136, RTC X Roads, Himayatnagar, Hyderabad 500020",
  flagshipArea: "Chikkadpally",
  rating: 4.2,
  ratingCount: "7,379+",
  magicpinRating: 4.5,
  magicpinCount: 49,
  branchesCount: 8,
  statesCount: 2,
  franchiseMinInvestment: 30,
} as const;

export type NavItem = { label: string; href: string };
export const NAV_LINKS: NavItem[] = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Outlets", href: "/outlets" },
  { label: "Franchise", href: "/franchise" },
];

export const ORDER_PLATFORMS = {
  direct: { label: "order.roosterx.in", href: "https://order.roosterx.in/store/1/delivery" },
  zomato: { label: "Zomato", href: "https://www.zomato.com" },
  swiggy: { label: "Swiggy", href: "https://www.swiggy.com" },
} as const;

// ---- Menu ----
export type MenuCategory =
  | "Signature Shawarma"
  | "Burgers"
  | "Sandwiches"
  | "Mojitos"
  | "Sides";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  veg: boolean;
  signature?: boolean;
  category: MenuCategory;
  image?: string;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "arabic-rumali-chicken-shawarma",
    name: "Arabic Rumali Chicken Shawarma",
    description: "Flame-grilled chicken wrapped in thin rumali roti with house garlic sauce.",
    price: 179,
    veg: false,
    signature: true,
    category: "Signature Shawarma",
    image: "/food/arabic-rumali-shawarma.jpg",
  },
  {
    id: "golden-ring-chicken-shawarma",
    name: "Golden Ring Chicken Shawarma",
    description: "Our signature ring shawarma, golden-grilled and wrapped to order.",
    price: 199,
    veg: false,
    signature: true,
    category: "Signature Shawarma",
    image: "/food/golden-ring-shawarma.jpg",
  },
  {
    id: "shawarma-plate",
    name: "Shawarma Plate",
    description: "Flame-grilled chicken over rice with salad and garlic sauce.",
    price: 189,
    veg: false,
    category: "Signature Shawarma",
    image: "/food/shawarma-plate.jpg",
  },
  {
    id: "mezze-platter",
    name: "Arabian Mezze Platter",
    description: "Hummus, falafel, pickles, khubz and grilled chicken for sharing.",
    price: 249,
    veg: false,
    category: "Sides",
    image: "/food/mezze-platter.jpg",
  },
  {
    id: "peri-peri-chicken-burger",
    name: "Peri Peri Chicken Burger",
    description: "Flame-grilled peri peri chicken patty, melted cheese, brioche bun.",
    price: 129,
    veg: false,
    category: "Burgers",
    image: "/food/peri-peri-burger.jpg",
  },
  {
    id: "regular-chicken-burger",
    name: "Regular Chicken Burger",
    description: "Flame-grilled chicken patty with fresh lettuce, tomato and onion.",
    price: 129,
    veg: false,
    category: "Burgers",
    image: "/food/chicken-burger.jpg",
  },
  {
    id: "regular-chicken-sandwich",
    name: "Regular Chicken Sandwich",
    description: "Grilled chicken chunks with fresh vegetables on toasted bread.",
    price: 109,
    veg: false,
    category: "Sandwiches",
    image: "/food/chicken-sandwich.jpg",
  },
  {
    id: "classic-paneer-sandwich",
    name: "Classic Paneer Sandwich",
    description: "Grilled paneer tikka, green chutney and onions on toasted bread.",
    price: 119,
    veg: true,
    category: "Sandwiches",
    image: "/food/paneer-sandwich.jpg",
  },
  {
    id: "lemon-mint-mojito",
    name: "Lemon & Mint Mojito",
    description: "Fresh mint, lemon and crushed ice. The house cooler.",
    price: 119,
    veg: true,
    category: "Mojitos",
    image: "/food/lemon-mint-mojito.jpg",
  },
];

export const MENU_CATEGORIES: ("All" | MenuCategory)[] = [
  "All",
  "Signature Shawarma",
  "Burgers",
  "Sandwiches",
  "Mojitos",
  "Sides",
];

// ---- Signature dishes (home bento) ----
export type SignatureDish = {
  id: string;
  name: string;
  description: string;
  price: number;
  veg: boolean;
  image: string;
  size: "lg" | "sm";
};

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: "arabic-rumali",
    name: "Arabic Rumali Chicken Shawarma",
    description: "Flame-grilled chicken wrapped in thin rumali roti.",
    price: 179,
    veg: false,
    image: "/food/arabic-rumali-shawarma.jpg",
    size: "lg",
  },
  {
    id: "golden-ring",
    name: "Golden Ring Chicken Shawarma",
    description: "Our signature ring shawarma, golden-grilled.",
    price: 199,
    veg: false,
    image: "/food/golden-ring-shawarma.jpg",
    size: "lg",
  },
  {
    id: "peri-peri",
    name: "Peri Peri Chicken Burger",
    description: "Flame-grilled peri peri chicken, melted cheese.",
    price: 129,
    veg: false,
    image: "/food/peri-peri-burger.jpg",
    size: "sm",
  },
  {
    id: "paneer",
    name: "Classic Paneer Sandwich",
    description: "Grilled paneer tikka, green chutney, onions.",
    price: 119,
    veg: true,
    image: "/food/paneer-sandwich.jpg",
    size: "sm",
  },
  {
    id: "mojito",
    name: "Lemon & Mint Mojito",
    description: "Fresh mint, lemon, crushed ice. The house cooler.",
    price: 119,
    veg: true,
    image: "/food/lemon-mint-mojito.jpg",
    size: "sm",
  },
];

// ---- Why row stats ----
export const WHY_STATS = [
  { label: "Halal Certified", value: "100%", sub: "Every kitchen" },
  { label: "Open Late", value: "12 AM", sub: "Daily hours" },
  { label: "Delivery Rating", value: "4.2\u2605", sub: "7,379+ Zomato orders" },
  { label: "Branches", value: "8", sub: "Across 2 states" },
] as const;

// ---- Story timeline ----
export const STORY_TIMELINE = [
  {
    year: "2014",
    title: "A discovery in Europe",
    text: "A Hyderabadi student, halfway through a Master's degree, falls for shawarma and doner kebab on the streets of Europe. One bite rewires the plan.",
  },
  {
    year: "Return",
    title: "Back to Hyderabad",
    text: "He comes home with one obsession: build a shawarma grilled over real open flame, wrapped to order, at a price the city can love.",
  },
  {
    year: "Outlet 1",
    title: "Chikkadpally opens",
    text: "The first RoosterX lights its grill in Chikkadpally, RTC X Roads. Word spreads fast. Lines get longer.",
  },
  {
    year: "Now",
    title: "8 branches, two states",
    text: "Five years on, RoosterX runs eight branches across Telangana and Karnataka, halal-certified, delivery-first, and open late.",
  },
] as const;

export const STORY_PHILOSOPHY = [
  {
    title: "Fresh, high-quality ingredients",
    text: "Chicken marinated in-house, breads rolled daily, sauces made from scratch. Nothing sits, nothing is reheated from a bag.",
  },
  {
    title: "Great food brings people together",
    text: "A shawarma is meant to be shared. We build rooms and hours that let the city sit, eat late, and stay a little longer.",
  },
] as const;

// ---- Outlets ----
export type Outlet = {
  id: string;
  name: string;
  area: string;
  city: string;
  state: string;
  flagship?: boolean;
  hours: string;
  mapsQuery: string;
};

export const OUTLETS: Outlet[] = [
  {
    id: "chikkadpally",
    name: "Chikkadpally",
    area: "RTC X Roads, Himayatnagar",
    city: "Hyderabad",
    state: "Telangana",
    flagship: true,
    hours: "12:00 PM - 12:00 AM daily",
    mapsQuery: "RoosterX Chikkadpally RTC X Roads Hyderabad",
  },
  {
    id: "hi-tech-city",
    name: "Hi-tech City",
    area: "Hi-tech City",
    city: "Hyderabad",
    state: "Telangana",
    hours: "12:00 PM - 12:00 AM daily",
    mapsQuery: "RoosterX Hi-tech City Hyderabad",
  },
  {
    id: "gowlidoddy",
    name: "Gowlidoddy",
    area: "Gowlidoddy",
    city: "Hyderabad",
    state: "Telangana",
    hours: "12:00 PM - 12:00 AM daily",
    mapsQuery: "RoosterX Gowlidoddy Hyderabad",
  },
  {
    id: "dilsukhnagar",
    name: "Dilsukhnagar",
    area: "Dilsukhnagar",
    city: "Hyderabad",
    state: "Telangana",
    hours: "12:00 PM - 12:00 AM daily",
    mapsQuery: "RoosterX Dilsukhnagar Hyderabad",
  },
  {
    id: "nacharam",
    name: "Nacharam",
    area: "Nacharam",
    city: "Hyderabad",
    state: "Telangana",
    hours: "12:00 PM - 12:00 AM daily",
    mapsQuery: "RoosterX Nacharam Hyderabad",
  },
  {
    id: "bn-reddy-nagar",
    name: "B.N Reddy Nagar",
    area: "B.N Reddy Nagar",
    city: "Hyderabad",
    state: "Telangana",
    hours: "12:00 PM - 12:00 AM daily",
    mapsQuery: "RoosterX B.N Reddy Nagar Hyderabad",
  },
  {
    id: "sr-nagar",
    name: "S.R Nagar",
    area: "S.R Nagar",
    city: "Hyderabad",
    state: "Telangana",
    hours: "12:00 PM - 12:00 AM daily",
    mapsQuery: "RoosterX S.R Nagar Hyderabad",
  },
  {
    id: "manipal",
    name: "Manipal",
    area: "Manipal",
    city: "Manipal",
    state: "Karnataka",
    hours: "12:00 PM - 12:00 AM daily",
    mapsQuery: "RoosterX Manipal Karnataka",
  },
];

// ---- Reviews (real, attributed) ----
export type Review = {
  quote: string;
  author: string;
  platform: string;
};

export const REVIEWS: Review[] = [
  {
    quote:
      "Their Arabic Rumali Chicken Shawarma was a standout, with flavorful, tender chicken.",
    author: "Eshan Jain",
    platform: "magicpin",
  },
];

// ---- Franchise proof band ----
export const FRANCHISE_PROOF = [
  { value: "4.2\u2605", label: "7,379+ delivery ratings" },
  { value: "8", label: "Branches open" },
  { value: "2", label: "States and growing" },
  { value: "30L", label: "Minimum investment" },
] as const;

export const FRANCHISE_MODEL = [
  {
    title: "Delivery-first quick bites",
    text: "Built for Zomato, Swiggy and our own order channel. Small kitchens, high frequency, fast turn.",
  },
  {
    title: "Halal kitchen standard",
    text: "Every outlet runs the same halal-certified sourcing and prep. The standard is non-negotiable.",
  },
  {
    title: "Late-night demand",
    text: "Open till midnight, with a late-night delivery window. We own the hours others close.",
  },
] as const;

// ---- Marquee text ----
export const MARQUEE_ITEMS = [
  "Arabic Rumali",
  "Golden Ring",
  "Halal Certified",
  "Open Late",
  "Flame Grilled",
  "Wrapped To Order",
];

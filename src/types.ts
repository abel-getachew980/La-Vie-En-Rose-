export type MenuCategoryType =
  | 'All'
  | 'Breakfast'
  | 'Lunch / Dinner'
  | 'Pizza Menu'
  | 'Cakes & Pastries'
  | 'Celebratory Cakes'
  | 'Coffee'
  | 'Tea Menu';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryType;
  description: string;
  branchAvailability: 'All Branches' | 'Bulbula Branch Only' | 'Order at Any Branch';
  image: string;
  price?: string;
  isFastingFriendly?: boolean;
  isSignature?: boolean;
  tags?: string[];
}

export interface BranchLocation {
  id: string;
  name: string;
  neighborhood: string;
  phone: string;
  phoneRaw: string;
  googleMapsUrl: string;
  directionsUrl?: string;
  coordinates: {
    lat: number;
    lng: number;
    formatted: string;
  };
  keyFeatures: string;
  highlightTag?: string;
  hours: string;
  addressDetails: string;
  ambiance: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  rating: number;
  text: string;
  date?: string;
  branchVisited?: string;
}

export interface SocialCard {
  platform: 'Instagram' | 'TikTok';
  handle: string;
  url: string;
  ctaText: string;
  followers?: string;
  subtitle: string;
  videoPreviewThumb: string;
  highlights: string[];
}

export type Offer = {
  id: number;
  image: string;
  title: string;
  price: number;
  type: string;
  isPremium: boolean;
  rating: number;
  photos: string[];
  description: string;
  qtyBedrooms: number;
  maxAdults: number;
  householdAppliances: string[];
  host: {
    name: string;
    avatar: string;
    isPro: boolean;
  };
}

export type Offers = Offer[];

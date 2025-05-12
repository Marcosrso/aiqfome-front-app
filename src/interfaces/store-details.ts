export interface StoreDetails {
  id: number;
  name: string;
  delivery: {
    fee: number;
    minOrderValueForFree: number;
    distance: string;
    deliveryDay: string;
    estimatedDeliveryTime: string;
  };
  openingHours: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
  };
  sections: StoreDetailsSection[];
  minimumOrderValue: number;
  rating: number;
  brandImg: string;
  brandImgAlt: string;
  isOpen: boolean;
  moreInfoUrl: string;
  slug: string;
}

export interface StoreDetailsSection {
  name: string;
  description?: string;
  products: StoreDetailsProduct[];
}

export interface StoreDetailsProduct {
  name: string;
  type: "UNIT" | "COMB";
  description: string;
  promotionalValue: number;
  value: number;
}
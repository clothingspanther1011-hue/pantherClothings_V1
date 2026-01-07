// types/index.ts
export interface HeroSlide {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  imageUrl?: string; // Direct URL from Sanity query
  ctaText: string;
  ctaLink: string;
  order: number;
  isActive: boolean;
}

export interface Product {
  _id: string;
  title: string;
  price: number;
  images: Array<{
    asset: {
      _ref: string;
      _type: string;
    };
  }>;
  imageUrls?: string[]; // Direct URLs from Sanity query
  sizes?: string[];
  colors?: string[];
  description: string;
  sizeChart?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  sizeChartUrl?: string; // Direct URL from Sanity query
  isActive: boolean;
}

export interface Banner {
  _id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  layout: "full" | "split-left" | "split-right" | "centered";
  backgroundColor: "white" | "black" | "gray" | "custom";
  textColor: "black" | "white";
  position: number;
  isActive: boolean;
}


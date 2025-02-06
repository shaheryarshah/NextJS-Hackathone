import { Slug } from "sanity";

export interface Product {
  category: string;
  _id: string;
  _type: "product"; // Explicit type
  price: number;
  description?: string;
  stockLevel: number;
  imagePath?: string; // Made optional
  discountPercentage: number;
  isFeaturedProduct: number;
  name: string;
  image?: {
    asset: {
      _ref: string;
      _type: string; // Removed strict "image"
    };
  };
  slug: {
    current: string;
    _type: string; // Changed from `Slug` to `string`
  };
}

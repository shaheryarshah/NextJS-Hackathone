import { Slug } from "sanity";

export interface Product
{ category: string;
    _id: string;
    _type:"product",
    price: number;
    description?: string;
    stockLevel: number;
    imagePath: string;
    discountPercentage: number;
    isFeaturedProduct: number;
    name: string;
    image?: {
        asset :{
            _ref:string;
            _type:"image";
        }
    };
    slug:{
    current:string;
    _type:Slug
    };
    };
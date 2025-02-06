"use client";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { allProducts } from "@/lib/queries";
import { addToCart } from "@/app/actions/actions";
import { Product } from "@/types/product"; // Ensure correct import

const Featuredproducts = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);
};

const handleAddToCart = (e: React.MouseEvent, product: Product) => {
  e.preventDefault();
  Swal.fire({
    position: "top-right",
    icon: "success",
    title: `${product.name} added to cart`,
    showConfirmButton: false,
    timer: 1000,
  });

  addToCart(product);
};

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function ProductDetails(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type=="product" && slug.current == $slug][0]{
      _id,
      product,
      image,
      price,
      _type,
      name,
      description,
      colors,
      stock
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await ProductDetails(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 my-8">
        Product Details
      </h1>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              height={500}
              width={500}
              className="object-cover"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          {/* Name */}
          <h1 className="text-3xl font-extrabold text-gray-800">
            {product.name}
          </h1>

          {/* Price */}
          <p className="text-2xl font-semibold text-blue-600">
            Price: ${product.price}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Colors */}
          <div className="flex items-center gap-4">
            <p className="text-lg font-medium text-gray-800">Available Colors:</p>
            <div className="flex gap-2">
              {product.colors?.map((color: string, index: number) => (
                <span
                  key={index}
                  className="h-6 w-6 rounded-full border border-gray-300 shadow-md"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Stock Availability */}
          <p
            className={`text-lg font-medium ${
              product.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.stock > 0
              ? `In Stock: ${product.stock}`
              : "Out of Stock"}
          </p>

          {/* Add to Cart Button */}
          <button
            className="w-full text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-6 py-3 transition-all duration-300"
            onClick={(e) => handleAddToCart(e, product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

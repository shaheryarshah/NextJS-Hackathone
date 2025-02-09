'use client';

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const Leatestproducts = () => {
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await client.fetch('*[_type=="product"][4...7]');
        setAllProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading on error
      }
    };

    getProducts();
  }, []); // Empty dependency array to fetch once on component mount

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div className="md:px-0 container px-5 mx-auto text-center text-red-500">
      <h1 className="text-4xl font-bold text-center items-center text-black mt-[50px]">
        Latest Products
      </h1>
      <ul className="flex flex-row">
        {allProducts.map((allProduct: any) => (
          <div
            key={allProduct._id}
            className="m-[100px] w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={urlFor(allProduct.image).url()}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h2>{allProduct.name}</h2>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {allProduct.description}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {/* Add your star icons */}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  5.0
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${allProduct.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

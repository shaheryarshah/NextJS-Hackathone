// pages/index.js
import React from 'react';
import Image from "next/image";
const products = [
  {
    id: 1,
    name: "Accumsan tincidunt",
    price: "$25.00",
    discountedPrice: "$20.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    Image: "/shoplist1.png",
  },
  {
    id: 2,
    name: "In nulla",
    price: "$45.00",
    discountedPrice: "$40.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    Image: "/shoplist2.png",
  },
  {
    id: 3,
    name: "Vel sem",
    price: "$30.00",
    discountedPrice: "$25.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    Image: "/shoplist3.png",
  },
  {
    id: 4,
    name: "Porttitor cum",
    price: "$60.00",
    discountedPrice: "$55.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    Image: "/shoplist4.png",
  },
  {
    id: 5,
    name: "Nunc in",
    price: "$35.00",
    discountedPrice: "$30.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    Image: "/shoplist5.png",
  },
  {
    id: 6,
    name: "Vitae facilisis",
    price: "$50.00",
    discountedPrice: "$45.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    Image: "/shoplist6.png",
  },
  {
    id: 7,
    name: "Curabitur lectus",
    price: "$20.00",
    discountedPrice: "$15.00",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    Image: "/shoplist7.png",
  },
];

const Shop = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-6 flex flex-col md:flex-row"
          >
            <div className="md:w-1/3">
              <img
                src={product.Image}
                alt={product.name}
                className="w-full h-48 md:h-auto object-cover"
              />
            </div>
            <div className="md:w-2/3 p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-500 text-sm mt-1">{product.description}</p>
              <div className="mt-4 flex items-center space-x-4">
                <span className="text-gray-400 line-through">
                  {product.price}
                </span>
                <span className="text-red-500 font-semibold">
                  {product.discountedPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

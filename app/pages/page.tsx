// pages/shop-grid.js

import Image from 'next/image';

export default function ShopGrid() {
  const products = [
    { id: 1, name: "Vel elit ex lorem", price: "$55.00", oldPrice: "$60.00", Image: "/g1.png" },
    { id: 2, name: "Ultrices condimentum imperdiet", price: "$70.00", oldPrice: "$80.00", Image: "/g2.png" },
    { id: 3, name: "Vitae suspendisse sed", price: "$90.00", oldPrice: "$100.00", Image: "/g3.png" },
    { id: 4, name: "Sed at fermentum", price: "$75.00", oldPrice: "$90.00", Image: "/g4.png" },
    { id: 5, name: "Faucibus pellentesque et", price: "$35.00", oldPrice: "$40.00", Image: "/g5.png" },
    { id: 6, name: "Vestibulum magna laoreet", price: "$55.00", oldPrice: "$60.00", Image: "/g6.png" },
    { id: 7, name: "Sollicitudin amet eni", price: "$95.00", oldPrice: "$120.00", Image: "/g7.png" },
    { id: 8, name: "Ultrices mauris eu", price: "$120.00", oldPrice: "$140.00", Image: "/g8.png" },
    { id: 9, name: "Pellentesque condimentum ac", price: "$45.00", oldPrice: "$50.00", Image: "/g9.png" },
    { id: 10, name: "Cras sollicitudin velit", price: "$80.00", oldPrice: "$100.00", Image: "/g10.png" },
    { id: 11, name: "Lectus vulputate faucibus", price: "$60.00", oldPrice: "$75.00", Image: "/g11.png" },
    { id: 12, name: "Purus risus ut", price: "$65.00", oldPrice: "$80.00", Image: "/lp1.png" },
  ];

  return (
    <div className="p-4 md:p-8 container px-5 mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Shop Grid Default</h1>
        <p className="text-sm text-gray-500">Home / Pages / Shop Grid Default</p>
      </div>

      <div className="border-t border-b py-4 flex flex-wrap justify-between items-center text-sm">
        <h2 className="font-semibold text-lg">Ecommerce Accessories & Fashion Item</h2>
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="perPage" className="mr-2">Per Page</label>
            <select id="perPage" className="border rounded px-2 py-1">
              <option>12</option>
              <option>24</option>
              <option>36</option>
            </select>
          </div>
          <div>
            <label htmlFor="sortBy" className="mr-2">Sort By</label>
            <select id="sortBy" className="border rounded px-2 py-1">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div>
            <label htmlFor="view" className="mr-2">View</label>
            <select id="view" className="border rounded px-2 py-1">
              <option>Grid</option>
              <option>List</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md text-center">
            <div className="relative w-full h-48">
              <Image
                src={product.Image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <h3 className="mt-4 font-medium text-gray-700">{product.name}</h3>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="text-red-500 font-bold">{product.price}</span>
              <span className="line-through text-gray-400">{product.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-8 text-sm text-gray-500">
        <p>&copy; 2024 Ecommerce. All rights reserved.</p>
      </footer>
    </div>
  );
}

// pages/product.js
import Image from "next/image";
export default function ProductDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Details</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src="/p1.png"
            alt="Product"
            className="w-full h-auto rounded-lg"
            height={500}
            width={500}
          />
        </div>
        <div className="md:ml-6 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold">Playwood arm chair</h2>
          <p className="text-xl text-gray-700">$180.00 <span className="line-through text-gray-500">$200.00</span></p>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
            nulla purus.
          </p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Categories:</h3>
            <span className="text-gray-600">Top</span>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h3 className="text-xl font-bold">Description</h3>
        <p className="mt-2">Lorem ipsum dolor sit amet...</p>
        <h3 className="text-xl font-bold mt-4">Additional Info</h3>
        <p className="mt-2">More details...</p>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-bold">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div className="border p-4 rounded-lg">
            <Image src="/p2.png" alt="Related Product" className="w-full h-auto rounded-t-lg"  height={500}
            width={500} />
            <h4 className="mt-2 font-semibold">Mens Fashion Wear</h4>
            <p>$120</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
          <div className="border p-4 rounded-lg">
            <Image src="/p3.png" alt="Related Product" className="w-full h-auto rounded-t-lg"  height={500}
            width={500}/>
            <h4 className="mt-2 font-semibold">Womens Fashion</h4>
            <p>$140</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
          <div className="border p-4 rounded-lg">
            <Image src="/p4.png" alt="Related Product" className="w-full h-auto rounded-t-lg"  height={500}
            width={500}/>
            <h4 className="mt-2 font-semibold">Web Design Fashion</h4>
            <p>$130</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </section>
    </div>
  );
}

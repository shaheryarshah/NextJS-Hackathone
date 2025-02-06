// pages/index.js
import Head from 'next/head';
import Image from "next/image";
export default function Shopex() {
  return (
    <div className="bg-white container px-5 mx-auto">
      <Head>
        <title>ShopEx Offer</title>
      </Head>

      {/* Section 1: What Shopex Offer */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">What Shopex Offer!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
          {[
            { Image: '/s1.png', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
            { Image: '/s2.png', title: 'Free Shipping', description: 'We offer free shipping worldwide on all orders above $50.' },
            { Image: '/s3.png', title: 'Easy Returns', description: 'Hassle-free returns within 30 days of purchase.' },
            { Image: '/s4.png', title: 'Secure Payments', description: 'Our payments are highly secured, protecting your privacy and details.' }
          ].map((offer, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <div className="mb-4">
                <Image
                  src={offer.Image}
                  alt={offer.title}
                  className="mx-auto h-12 w-12"
                  height={50}
                  width={50}
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-700">{offer.title}</h3>
              <p className="text-gray-500 mt-2 text-sm">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Product Features */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/sofa.png"
              alt="Sofa"
              className="max-w-sm mx-auto rounded-md shadow-md"
              height={500}
              width={500}
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Unique Features Of Latest & Trending Products
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>All frames constructed with hardwood solids and laminates</li>
              <li>Reinforced with double wood dowels, glue, screws, nails, and machine nails</li>
              <li>Arms, backs, and seats are structurally reinforced</li>
            </ul>
            <div className="mt-6">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
                Add To Cart
              </button>
              <p className="inline-block ml-4 text-gray-700 font-semibold">
                B&B Italian Sofa <span className="text-purple-600">$32.00</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

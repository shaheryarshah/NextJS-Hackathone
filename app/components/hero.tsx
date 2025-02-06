import Image from "next/image";

export default function Hero() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-center bg-purple-100 h-auto lg:h-[600px] container px-5 mx-auto">
                {/* Hero Image */}
                <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0">
                    <Image
                        src="/hero1.png"
                        alt="Picture"
                        height={400}
                        width={400}
                        className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                    />
                </div>

                {/* Hero Text Section */}
                <section className="bg-purple-100 px-4 py-8 lg:px-8 lg:py-12 lg:w-1/2 flex justify-center lg:justify-center">
                    <div className="text-center lg:text-start max-w-lg">
                        <p className="text-pink-600 text-lg">Best Furniture For Your Castle...</p>
                        <h2 className="md:text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-4 mb-4">
                            New Furniture Collection <br /> Trends in 2020
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quae modi perspiciatis
                            <br className="hidden sm:block" /> aliquam reprehenderit iusto,
                        </p>
                        <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-purple-500 transition-all">
                            Shop Now
                        </button>
                    </div>
                </section>

                {/* Additional Hero Image */}
                <div className="flex justify-center lg:w-1/2">
                    <Image
                        src="/hero2.png"
                        alt="Picture"
                        height={550}
                        width={550}
                        className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[550px] lg:h-[550px]"
                    />
                </div>
            </div>
        </div>
    );
}

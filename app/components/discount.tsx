// components/Promotion.js
import React from 'react';
import Image from 'next/image';

const Promotion = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-between p-4 space-y-4 md:space-y-0 container px-5 mx-auto">
            {/* Left Section */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-full md:w-1/2">
                <h2 className="text-lg font-bold mb-2">23% off in all products</h2>
                <div><Image src="/voucher1.png" alt="Clock" height={100} width={150}>
                </Image></div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Shop Now</button>
            </div>

            {/* Right Section */}
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-full md:w-1/2">
                <h2 className="text-lg font-bold mb-2">25% off in all products</h2>
                <div><Image src="/voucher2.png" alt="Clock" height={100} width={150}>
                </Image></div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                    View Collection
                </button>
                <div className="space-y-2">
                    <div className="flex justify-between w-full items-center">
                        <span className="text-gray-700">Executive Seat Chair</span>
                        <span className="font-bold">$32.00</span>
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <span className="text-gray-700">Executive Seat Chair</span>
                        <span className="font-bold">$32.00</span>
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <span className="text-gray-700">Executive Seat Chair</span>
                        <span className="font-bold">$32.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;

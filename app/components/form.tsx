'use client'
import { useRef } from "react";

// components/AddressForm.js
export default function AddressForm() {
  const getName = useRef<HTMLInputElement>(null);
  const getPhone = useRef<HTMLInputElement>(null);
  const getAd1 = useRef<HTMLInputElement>(null);
  const getAd2 = useRef<HTMLInputElement>(null);
  const getCity = useRef<HTMLInputElement>(null);
  const getState = useRef<HTMLInputElement>(null);
  const getPostal = useRef<HTMLInputElement>(null);
  const getCountry = useRef<HTMLInputElement>(null);
  const getAddress = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    

    const payload: any = {
      shipToAddress: {
        name: getName.current?.value,
        phone: getPhone.current?.value,
        addressLine1: getAd1.current?.value,
        addressLine2: getAd2.current?.value,
        cityLocality: getCity.current?.value,
        stateProvince: getState.current?.value,
        postalCode: getPostal.current?.value,
        countryCode: getCountry.current?.value,
        addressResidentialIndicator: getAddress.current?.value,
      },
      packages: [
        {
          weight: { value: 5, unit: "ounce" },
          dimensions: { height: 3, width: 15, length: 10, unit: "inch" },
        },
      ],
    };
    //console.log("Payload: ", payload);
    try {
      const res = await fetch("http://localhost:3000/api/shipengine", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body:
          JSON.stringify(payload)
      });

      const data = await res.json();
      console.log("Response From API", data);


    } catch (error) {
      console.log("Error");
    }

  }


  return (
 

    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">

      <h2 className="text-2xl font-semibold text-center mb-6">Address Form</h2>
      <form action="#" method="POST" onSubmit={handleSubmit}>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            ref={getName}
            placeholder="name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            id="phone"
            ref={getPhone}
            placeholder="phone number"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Address Line 1 */}
        <div className="mb-4">
          <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
          <input
            type="text"
            id="addressLine1"
            ref={getAd1}
            placeholder="Address 1"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Address Line 2 */}
        <div className="mb-4">
          <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
          <input
            type="text"
            id="addressLine2"
            ref={getAd2}
            placeholder="Address 2"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label htmlFor="cityLocality" className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            id="cityLocality"
            ref={getCity}
            placeholder="city"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* State/Province */}
        <div className="mb-4">
          <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700">State/Province</label>
          <input
            type="text"
            id="stateProvince"
            ref={getState}
            placeholder="state"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Postal Code */}
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            ref={getPostal}
            placeholder="postal code"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Country */}
        <div className="mb-4">
          <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            id="countryCode"
            ref={getCountry}
            placeholder="country code"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Residential Indicator */}
        <div className="mb-4">
          <label htmlFor="addressResidentialIndicator" className="block text-sm font-medium text-gray-700">Residential Indicator</label>
          <input
            type="text"
            id="addressResidentialIndicator"
            ref={getAddress}
            placeholder="residantial address"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

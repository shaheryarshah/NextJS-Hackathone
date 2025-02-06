"use client"

import convertToSubCurrency from '@/lib/converttosubcurrency';
import CheckoutPage from '@/app/components/Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

if (process.env.NEXT_PUBLIC_PUBLISHABLE_KEY === undefined) {
    throw new Error('NEXT_PUBLIC_PUBLISHABLE_KEY is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

const StripePayment = () => {
    const amount = 49.99
    return (
        <div>
            <h1 className='text-6xl font-bold text-center'>Muhammad Shaheryar $ {amount}</h1>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: convertToSubCurrency(amount),
                    currency: 'usd'
                }}
            >
                <CheckoutPage amount={amount} />
            </Elements>

        </div>
    )
}

export default StripePayment
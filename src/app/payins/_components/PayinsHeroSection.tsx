import { AdjustmentsHorizontalIcon, CreditCardIcon, ShieldCheckIcon, SignalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export default function PayinsHeroSection() {
    return (
        <section className="bg-white pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-700 bg-primary-100 rounded-full mb-4">
                            Payins
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                            Receive payments from 3.5 million customers with ease
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Accept payments online wherever your customers are –
                            on your website, in your app,
                            or with flexible payment pages embedded in key interaction channels.
                        </p>
                        <Link
                            href="https://my.monime.io"
                            className="inline-block px-6 py-3 text-white rounded-lg font-semibold bg-[#0e90f5]"
                        >
                            Create a free account
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:mt-12 perspective-1000">
                        <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-2xl">
                            <ShieldCheckIcon aria-hidden="true" className="size-16 text-[#0e90f5]" />
                            <p className="text-center font-semibold">Secure Payments</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-2xl">
                            <CreditCardIcon aria-hidden="true" className="size-16 text-[#0e90f5]" />
                            <p className="text-center font-semibold">Flexible Payment Options</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-2xl">
                            <SignalIcon aria-hidden="true" className="size-16 text-[#0e90f5]" />
                            <p className="text-center font-semibold">Real-time Monitoring</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-2xl">
                            <AdjustmentsHorizontalIcon aria-hidden="true" className="size-16 text-[#0e90f5]" />
                            <p className="text-center font-semibold">Customizable Checkout</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import Image from "next/image";
import MonimeWoman from '@/images/Monime-Website-1.jpg';

const ProductsOverview = () => {
    return (
        <section className="flex justify-center items-center py-20 bg-gray-50">
            <div className="container max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col justify-between text-center p-8 bg-white rounded-lg shadow-md h-full">
                        <div className="flex-grow">
                            <div className="relative w-full h-48 mb-6">
                                <Image src="/Payins.jpg" layout="fill" objectFit="cover" alt="monime-payins" className="rounded-md" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#0e90f5]">Payins</h3>
                            <p className="text-2xl font-bold mt-4">Accept local payments and boost sales</p>
                            <p className="text-gray-600 mt-3">
                                Allow your customers to pay wherever and however they prefer. Handle acceptance, processing, and settlement with ease.
                            </p>
                            <div className="mt-5">
                                <p className="text-[#0e90f5] font-medium">Online Payments</p>
                                <p className="text-gray-600 text-sm">Accept payments on your website and in-app.</p>
                                <p className="text-[#0e90f5] font-medium mt-2">In-person Payments</p>
                                <p className="text-gray-600 text-sm">Enhance your point of sale setup with multiple payment options.</p>
                            </div>
                        </div>
                        <a href="/payins" className="mt-8 px-6 py-2 text-[#0e90f5] border border-[#0e90f5] rounded-lg hover:bg-[#0e90f5] hover:text-white">
                            Interested in Payins
                        </a>
                    </div>

                    <div className="flex flex-col justify-between text-center p-8 bg-white rounded-lg shadow-md h-full">
                        <div className="flex-grow">
                            <div className="relative w-full h-48 mb-6">
                                <Image src="/Payouts.jpg" layout="fill" objectFit="cover" alt="monime-payouts" className="rounded-md" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#0e90f5]">Payouts</h3>
                            <p className="text-2xl font-bold mt-4">Pay staff, customers, and partners</p>
                            <p className="text-gray-600 mt-3">
                                Use domestic payment options with a single API call, easily integrating payouts into your portal.
                            </p>
                            <div className="mt-5">
                                <p className="text-[#0e90f5] font-medium">Pay to Wallets</p>
                                <p className="text-gray-600 text-sm">Enable payments to mobile wallets.</p>
                                <p className="text-[#0e90f5] font-medium mt-2">Pay to Banks</p>
                                <p className="text-gray-600 text-sm">Offer transparent bank transfers.</p>
                            </div>
                        </div>
                        <a href="/payouts" className="mt-8 px-6 py-2 text-[#0e90f5] border border-[#0e90f5] rounded-lg hover:bg-[#0e90f5] hover:text-white">
                            Interested in Payouts
                        </a>
                    </div>

                    <div className="flex flex-col justify-between text-center p-8 bg-white rounded-lg shadow-md h-full">
                        <div className="flex-grow">
                            <div className="relative w-full h-48 mb-6">
                                <Image src="/Payments.jpg" layout="fill" objectFit="cover" alt="monime-payments" className="rounded-md" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#0e90f5]">Payment Links</h3>
                            <p className="text-2xl font-bold mt-4">Pay staff, customers, and partners</p>
                            <p className="text-gray-600 mt-3">
                                Use domestic payment options with a single API call, easily integrating payouts into your portal.
                            </p>
                            <div className="mt-5">
                                <p className="text-[#0e90f5] font-medium">Unified Checkout</p>
                                <p className="text-gray-600 text-sm">Offer a single checkout process for all payment types.</p>
                                <p className="text-[#0e90f5] font-medium mt-2">Customizable</p>
                                <p className="text-gray-600 text-sm">Easily customize the payment flow to match your brand.</p>
                            </div>
                        </div>
                        <a href="/payments" className="mt-8 px-6 py-2 text-[#0e90f5] border border-[#0e90f5] rounded-lg hover:bg-[#0e90f5] hover:text-white">
                            Interested in Payments
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsOverview;

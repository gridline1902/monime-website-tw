import Image from "next/image";
import MonimeWoman from '@/images/Monime-Website-1.jpg';
import Link from "next/link";

const ProductsOverview = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl lg:max-w-7xl">
                <div className="flex flex-col gap-16">
                    <div className="relative flex flex-col gap-28 mx-auto items-center justify-center lg:flex-row">
                        <Image
                            src={MonimeWoman}
                            alt="monime-website"
                            className="shadow-lg"
                        />
                        <div className="flex flex-col gap-4 lg:w-1/2">
                            <h2 className="text-lg font-semibold text-[#0e90f5]">Payins</h2>
                            <h3 className="text-3xl font-bold text-gray-900">
                                Accept local payment methods and <br /> boost sales
                            </h3>
                            <p className="text-gray-600">
                                Let your customers pay wherever and however they prefer. Work with one provider to{" "}
                                <span className="underline">accept</span>, <span className="underline">process</span>, and{" "}
                                <span className="underline">settle payments</span>.
                            </p>
                            <p className="text-gray-600 mt-4">
                                <span className="text-[#0e90f5]">Online payments</span><br />
                                Accept payments on your website and in-app.
                            </p>
                            <p className="text-gray-600">
                                <span className="text-[#0e90f5]">In-person payments ›</span><br />
                                Enhance your point of sale setup with multiple payment options.
                            </p>
                            <div className="mt-auto">
                                <Link
                                    href="/payins"
                                    className="inline-block px-6 py-3 border border-[#0e90f5] text-[#0e90f5] rounded-lg text-lg font-semibold hover:bg-[#0e90f5] hover:text-white transition-colors duration-200"
                                >
                                    Interested in Payins
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-28 mx-auto items-center justify-center lg:flex-row">
                        <div className="flex flex-col gap-4 lg:w-1/2">
                            <h2 className="text-lg font-semibold text-[#0e90f5]">Payouts</h2>
                            <h3 className="text-3xl font-bold text-gray-900">
                                Pay your staff, customers, and partners <br /> in the method of their choice.
                            </h3>
                            <p className="text-gray-600">
                                Access domestic payment rails and initiate payments with a single API call – easy to integrate into your user-facing portal.
                            </p>
                            <p className="text-gray-600 mt-4">
                                <span className="text-[#0e90f5]">Pay to wallets ›</span><br />
                                Enable payments to mobile wallets.
                            </p>
                            <p className="text-gray-600">
                                <span className="text-[#0e90f5]">Pay to banks ›</span><br />
                                Offer transparent bank transfers.
                            </p>
                            <div className="mt-auto">
                                <Link
                                    href="/payouts"
                                    className="inline-block px-6 py-3 border border-[#0e90f5] text-[#0e90f5] rounded-lg text-lg font-semibold hover:bg-[#0e90f5] hover:text-white transition-colors duration-200"
                                >
                                    Interested in Payouts
                                </Link>
                            </div>
                        </div>
                        <Image
                            src={MonimeWoman}
                            alt="monime-website"
                            className="shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default ProductsOverview;

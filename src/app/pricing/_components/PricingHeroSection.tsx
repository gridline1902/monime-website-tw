import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const PricingHeroSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        When <span className="text-[#0e90f5]">you grow,</span> we grow!
                    </h2>
                    <p className="text-xl text-gray-600">Choose a pricing plan that fits your current and future ambitions.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4">
                            <CheckCircleIcon className="h-6 w-6 text-[#0e90f5]" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No setup fee</h3>
                        <p className="text-gray-600">Pay per transaction, with no setup or monthly fees.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4">
                            <svg
                                className="h-6 w-6 text-[#0e90f5]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">One integration</h3>
                        <p className="text-gray-600">Offer your customers all their preferred payment methods with a single integration.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4">
                            <ArrowRightIcon className="h-6 w-6 text-[#0e90f5]" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Flexible withdrawals</h3>
                        <p className="text-gray-600">Choose when and where you settle your funds.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingHeroSection;

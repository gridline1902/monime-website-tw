import Link from "next/link";


const ProductsPricing = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="space-y-12">
                    <div className="bg-white flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden shadow-xl">
                        <div className="md:w-2/3 p-8 border-l-4 border-green-500">
                            <div className="flex items-center mb-4">
                                <h2 className="text-2xl font-bold text-gray-800">Payins</h2>
                            </div>
                            <p className="text-gray-600 mb-6">
                                A complete payment system to manage, scale, and optimize payments with the largest network of integrations in Sierra Leone.
                            </p>
                        </div>
                        <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col justify-center">
                            <h3 className="font-semibold text-green-600 mb-2">Payments</h3>
                            <p className="text-sm text-gray-500 mb-4">Best for small businesses optimising for scale</p>
                            <p className="text-3xl font-bold text-gray-800 mb-6">1.5% + 0.50 SLE <span className="text-sm font-normal">per transaction</span></p>
                            <Link href="https://my.monime.io" className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition duration-300 flex items-center justify-center">
                                Create a free account
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden shadow-xl">
                        <div className="md:w-2/3 p-8 border-l-4 border-blue-500">
                            <div className="flex items-center mb-4">
                                <h2 className="text-2xl font-bold text-gray-800">Payouts</h2>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Streamline your payments to vendors, partners, beneficiaries and workers using our bulk payment service across the largest network in a single interface in Sierra Leone.
                            </p>
                        </div>
                        <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col justify-center">
                            <h3 className="font-semibold text-blue-600 mb-2">Payouts</h3>
                            <p className="text-sm text-gray-500 mb-4">Best for organisations disbursing funds to beneficiaries</p>
                            <p className="text-3xl font-bold text-gray-800 mb-6">2.0% <span className="text-sm font-normal">per transaction</span></p>
                            <Link href="/contact" className="bg-[#0e90f5] text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsPricing;
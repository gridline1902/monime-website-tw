

const ChallengeAndSolution = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="rounded-lg bg-white overflow-hidden shadow-lg">
                        <div className="px-6 py-8 sm:p-10">
                            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">The Challenge</h3>
                            <div className="mt-4 text-base text-gray-500">
                                <p className="mb-4">
                                    Simplify the checkout process for <span className="font-semibold text-primary">your customers</span>
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <svg className="flex-shrink-0 h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="ml-3">
                                            Payments can be a daunting challenge for businesses seeking to expand their reach in the Sierra Leone market.
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="flex-shrink-0 h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="ml-3">
                                            One of the most significant obstacles businesses face is settling funds from multiple payment methods.
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="flex-shrink-0 h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="ml-3">
                                            This process is often complex and time-consuming and can lead to payment delays and compliance issues.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 rounded-lg bg-white overflow-hidden shadow-lg">
                        <div className="px-6 py-8 sm:p-10">
                            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">The Solution</h3>
                            <div className="mt-4 text-base text-gray-500">
                                <p className="mb-4">
                                    Accept <span className="font-semibold text-primary">any payment method</span> {`at any time with Monime's Payins.`}
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="ml-3">
                                            {`Integrating Monime's Payins simplifies the checkout process for businesses and offers customers in Sierra Leone a seamless and secure payment experience.`}
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="ml-3">
                                            Payins enables businesses to accept customer payments using various methods, bypassing the challenges of allowing accessible funds transfer.
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="ml-3">
                                            {`Save time and resources by utilizing Monime's compliance with regulatory requirements and local authorities and confidently receiving funds.`}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChallengeAndSolution;
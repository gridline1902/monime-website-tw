'use client'

import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="bg-white">
            <div className="relative px-2 py-20 lg:py-28">
                <div className="mx-auto max-w-4xl">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Checkout Simplified: Read the Full Article Here.{" "}
                            <Link href="#" className="font-semibold text-[#0e90f5]">
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            Modern payments for growing businesses
                        </h1>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            Say goodbye to complex payment challenges in Sierra Leone. With our all-in-one payment platform, you can accept and disburse a wide range of local payment methods that millions of consumers prefer.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="https://my.monime.io"
                                className="inline-block px-6 py-3 rounded-lg font-semibold bg-[#0e90f5] text-white"
                            >
                                Get started
                            </Link>
                            <Link href="/contact" className="text-sm/6 font-semibold text-gray-900">
                                Contact sales <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection;

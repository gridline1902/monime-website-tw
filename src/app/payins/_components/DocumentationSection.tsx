import Image from 'next/image'
import { BookOpenIcon, CodeBracketIcon, CubeIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

import Coders from "@/images/coders-source-code.jpg"
import Link from 'next/link'

export default function DocumentationSection() {
    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Developers</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Whether you want to get up and running as soon as possible or create a fully customizable solution, we’ve got you covered.
                        We also have different integration options to help you accept payments on your iOS or Android app.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <RocketLaunchIcon className="h-12 w-12 text-[#0e90f5] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
                        <p className="text-gray-600">Get your first API call running in minutes with our quickstart guide.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <BookOpenIcon className="h-12 w-12 text-[#0e90f5] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Extensive Guides</h3>
                        <p className="text-gray-600">Detailed tutorials and how-to guides for every aspect of our API.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <CodeBracketIcon className="h-12 w-12 text-[#0e90f5] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Code Samples</h3>
                        <p className="text-gray-600">Ready-to-use code snippets in multiple programming languages.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <CubeIcon className="h-12 w-12 text-[#0e90f5] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">SDKs & Libraries</h3>
                        <p className="text-gray-600">Official SDKs for major platforms to speed up your integration.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Link
                        href="https://docs.monime.io"
                        className="inline-block px-6 py-3 border border-[#0e90f5] text-[#0e90f5] rounded-lg font-semibold hover:bg-[#0e90f5] hover:text-white transition-colors duration-200"
                    >
                        View Documentation
                    </Link>
                </div>
            </div>
        </section>
    )
}
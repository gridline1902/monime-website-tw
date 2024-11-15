import Image from "next/image"

import MonimeOffice from "@/images/monime-office.jpg"
import MonimeLaunch from "@/images/Monime-Launch-Cake.jpg"

const OurStorySection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Our story</h2>
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <p className="text-lg text-gray-600">
                        At Monime, growth is at the heart of everything we do.
                        We began by addressing the fragmented payment systems built on outdated infrastructure.
                        Recognizing the need for more, we developed a comprehensive, modern financial technology platform from scratch.
                        Today, we offer businesses in Sierra Leone a complete solution with end-to-end payment capabilities, data enhancements, and financial products.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
                    <div className="relative w-full md:w-1/2 h-96">
                        <Image src={MonimeLaunch} className="shadow-lg rounded-2xl" fill alt="monime-launch" />
                    </div>
                    <div className="relative w-full md:w-1/2 h-96">
                        <Image src={MonimeOffice} className="shadow-lg rounded-2xl" fill alt="monime-office" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStorySection;

import Image from "next/image";
import Link from "next/link";

import SafulPay from "@/images/safulpay-logo.png"
import KorensiLogo from "@/images/korensi-logo.png"
import VultLogo from "@/images/vult-logo.png"

const CustomPricingOptions = () => {
    return (
        <section className="bg-[#0e90f5] py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    <div className="max-w-xl flex flex-col gap-4">
                        <p className="text-xs text-white font-medium uppercase">Core Api & Embedded Finance</p>
                        <h2 className="text-4xl font-bold text-white">Explore custom pricing options</h2>
                        <p className="text-white">
                            If your business, marketplace, or platform has high payment volume,
                            or if you’re interested in building your own financial products,
                            please contact us to discuss custom pricing options.
                            Our teams will review your current business statements and work with you to develop a personalized pricing package.
                        </p>
                        <Link href="/contact" className="inline-block mt-4 text-black bg-white w-fit px-4 py-3 rounded-lg font-semibold">Contact Sales</Link>
                    </div>
                    <div className="flex flex-wrap gap-10 justify-center items-center">
                        <div className="flex justify-center">
                            <Image src={SafulPay} width={200} height={200} alt="safulpay" />
                        </div>
                        <div className="flex justify-center">
                            <Image src={VultLogo} width={200} height={200} alt="vult" />
                        </div>
                        <div className="flex justify-center">
                            <Image src={KorensiLogo} width={200} height={200} alt="korensi" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomPricingOptions;

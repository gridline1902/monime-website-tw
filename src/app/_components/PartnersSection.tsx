"use client";

import Image from "next/image";
import OrangeImg from "@/images/Orange-2.png";
import AfrimoneyImg from '@/images/Afrimoney-3.png';
import EcobankImg from '@/images/Ecobank-2.png';
import GTBankImg from '@/images/GTBank-2.png';
import QMoneyImg from '@/images/QMoney-2.png';
import clsx from "clsx";

const imagePaths = [
    { index: 0, src: OrangeImg, alt: 'Orange' },
    { index: 1, src: AfrimoneyImg, alt: 'Afrimoney' },
    { index: 2, src: EcobankImg, alt: 'Ecobank' },
    { index: 3, src: GTBankImg, alt: 'GTBank' },
    { index: 4, src: QMoneyImg, alt: 'QMoney' }
];

export default function TrustedPartners() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="font-medium">Trusted by these partners</h2>
                </div>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <Image
                        alt="Orange-Money"
                        src={OrangeImg}
                        width={158}
                        height={48}
                        className="scale-150 transition-transform hover:transform hover:ease-in-out hover:-translate-y-4 hover:duration-300 col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="Afrimoney"
                        src={AfrimoneyImg}
                        width={158}
                        height={48}
                        className="scale-150 transition-transform hover:transform hover:ease-in-out hover:-translate-y-4 hover:duration-300 col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="Ecobank"
                        src={EcobankImg}
                        width={158}
                        height={48}
                        className="scale-150 transition-transform hover:transform hover:ease-in-out hover:-translate-y-4 hover:duration-300 col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="GT-Bank"
                        src={GTBankImg}
                        width={158}
                        height={48}
                        className="scale-150 transition-transform hover:transform hover:ease-in-out hover:-translate-y-4 hover:duration-300 col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                    />
                    <Image
                        alt="Q-Money"
                        src={QMoneyImg}
                        width={158}
                        height={48}
                        className="scale-75 transition-transform hover:transform hover:ease-in-out hover:-translate-y-4 hover:duration-300 col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                    />
                </div>
            </div>
        </div >
    );
}

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
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center">
                <p className="font-medium">Trusted by these partners</p>
            </div>
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-2 mx-auto place-items-center md:flex md:flex-row md:gap-20 items-center gap-8">
                    {imagePaths.map((image) => (
                        <div
                            key={image.index}
                            className={clsx(`${image.index === 4 && "relative scale-150"} relative w-[200px] h-[90px] overflow-hidden`)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className={clsx(
                                    `${image.index === 4 ? 'object-contain scale-50 bg-red-500 w-full' : 'object-cover'} hover:transform hover:transition-transform hover:ease-in-out hover:-translate-y-4 hover:duration-300`
                                )}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
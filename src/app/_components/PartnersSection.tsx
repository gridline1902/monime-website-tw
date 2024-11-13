"use client"

import Image from "next/image";
import OrangeImg from "@/images/Orange-2.png";
import AfrimoneyImg from '@/images/Afrimoney-3.png';
import EcobankImg from '@/images/Ecobank-2.png';
import GTBankImg from '@/images/GTBank-2.png';
import QMoneyImg from '@/images/QMoney-2.png';


const imagePaths = [
    { index: 0, src: OrangeImg, alt: 'Orange' },
    { index: 1, src: AfrimoneyImg, alt: 'Afrimoney' },
    { index: 2, src: EcobankImg, alt: 'Ecobank' },
    { index: 3, src: GTBankImg, alt: 'GTBank' },
    { index: 4, src: QMoneyImg, alt: 'QMoney' }
];


export default function TrustedPartners() {
    return (
        <div className="mt-16 max-w-6xl mx-auto space-y-8">
            <div className="text-center">
                <p className="text-md font-medium">Trusted by these partners</p>
            </div>
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-20">
                    {imagePaths.map((image) => (
                        <div
                            key={image.index}
                            className="relative w-full sm:w-[400px] h-[70px] overflow-hidden"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className={`${image.index === 4 ? 'object-scale-down' : 'object-cover'
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
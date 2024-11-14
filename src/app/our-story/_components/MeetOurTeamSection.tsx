import { ArrowRightIcon } from "@heroicons/react/24/outline"
import OurTeam from "@/images/our-team.jpeg"
import Image from "next/image"


const MeetOurTeamSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="md:flex items-center bg-gray-100 rounded-lg overflow-hidden border-l-4 border-[#0e90f5]">
                    <div className="md:w-1/2 p-12">
                        <h2 className="text-4xl font-bold text-black mb-4">Meet our team</h2>
                        <p className="text-lg text-black mb-6 max-w-md">
                            Meet our dynamic team of executives behind the Monime financial technology platform.
                        </p>
                        <button className="inline-flex items-center bg-[#0e90f5] text-white px-6 py-3 rounded-lg font-semibold">
                            Meet our team
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                    <div className="md:w-full">
                        <Image
                            src={OurTeam}
                            alt="Our team"
                            width={600}
                            height={600}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetOurTeamSection;
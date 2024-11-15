import { ArrowTrendingUpIcon, HandRaisedIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const NoDelaysIcon = () => (
    <svg
        fill="#ffffff"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M23.707 16.325a1 1 0 00-1.414 0l-5.627 5.628-2.688-2.653a1 1 0 00-1.435 1.4l2.744 2.7a1.876 1.876 0 001.345.6h.033A1.873 1.873 0 0018 23.447l5.707-5.708a1 1 0 000-1.414zM11.09 21.959A10 10 0 1122 12c0 .307-.015.611-.041.911A1 1 0 0022.866 14a.989.989 0 001.085-.907c.032-.363.049-.726.049-1.093a12 12 0 10-13.09 11.951h.091a1 1 0 00.089-2zM11 7v4.586l-2.707 2.707a1 1 0 101.414 1.414l3-3A1 1 0 0013 12V7a1 1 0 00-2 0z" />
    </svg>
)

const features = [
    {
        name: 'Sales',
        description: 'Get unrivalled payment performance with the help of our dedicated teams',
        icon: ArrowTrendingUpIcon,
        link: 'Find out more',
        href: '#'
    },
    {
        name: 'Merchant Support',
        description: 'Got a technical issue or need strategic advice? Our support team is here to help.',
        icon: PhoneIcon,
        link: 'Ask for support',
        href: 'mailto:partner@monime.io'
    },
    {
        name: 'Partnership',
        description: `Let's team up to boost productivity and accelerate business`,
        icon: HandRaisedIcon,
        link: 'Contact us',
        href: 'mailto:partner@monime.io'
    },
]

const ContactsSolution = () => {
    return (
        <section className="bg-white pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Dedicated support for your success
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Our expert teams are here to ensure your business thrives with unparalleled support and strategic partnerships.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base/7 font-semibold text-gray-900">
                                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-[#0e90f5]">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        <Link href={feature.href} className="text-sm font-semibold text-[#0e90f5] hover:text-[#0e90f5]/80">
                                            {feature.link} <span aria-hidden="true">&rarr;</span>
                                        </Link>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default ContactsSolution;
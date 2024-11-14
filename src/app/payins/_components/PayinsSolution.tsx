import { CogIcon, InboxIcon, LightBulbIcon, RocketLaunchIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Boost revenue',
        description: 'Create a safe and seamless experience and let your customers pay with their preferred payment method.',
        icon: RocketLaunchIcon,
    },
    {
        name: 'Reduce complexity',
        description: 'Save time and resources while increasing flexibility with a complete payments solution.',
        icon: CogIcon,
    },
    {
        name: 'Embrace innovation',
        description: 'Leverage the latest technology and data insights, and stay compliant along the way.',
        icon: LightBulbIcon,
    },
]


const PayinsSolution = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Streamline payments for a modern, secure customer experience
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        {`Boost revenue, reduce complexity, and embrace innovation with a complete payment solution that meets your customers' needs.`}
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
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default PayinsSolution;
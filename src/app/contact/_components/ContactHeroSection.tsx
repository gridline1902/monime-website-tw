import { PhoneIcon } from '@heroicons/react/24/outline'

const ContactHero = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden border-l-4 border-[#0e90f5]">
                    <div className="p-8 sm:p-12">
                        <div className="flex items-center space-x-2 text-[#0e90f5] mb-4">
                            <PhoneIcon className="h-6 w-6" />
                            <span className="text-sm font-light">Contact us</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            {`LET'S TALK`}
                        </h2>
                        <p className="text-lg text-black mb-8 max-w-2xl">
                            Got a question? Want to learn more about us? Get in touch.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactHero;
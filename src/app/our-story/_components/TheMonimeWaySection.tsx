
const TheMonimeWaySection = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="p-8 mb-12">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-medium mb-4 text-gray-900">The Monime Way</h2>
                        <p className="text-xl font-medium mb-12 text-gray-700">The way we work is guided by these six principles.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {principles.map((principle, index) => (
                                <div key={index} className="bg-gray-100 p-6 rounded-lg border-l-4 border-[#0e90f5]">
                                    <p className="font-medium text-gray-800">{principle}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const principles = [
    "We build to benefit all customers (not just one)",
    "We make good decisions and consider the long-term benefits for our customers",
    "We launch fast and iterate",
    "Winning is more important than ego; we work as a team",
    "We seek out different perspectives to sharpen our ideas",
    "We create our own path to grow toward our full potential"
]

export default TheMonimeWaySection;
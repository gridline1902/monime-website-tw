export default function IntegrationStats() {
    const stats = [
      { id: 1, name: "Consumers", value: "3.5 million" },
      { id: 2, name: "API", value: "1" },
      { id: 3, name: "Merchants", value: "1000+" },
    ];
  
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[#0e90f5] sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
  
          {/* Additional Text Below Stats */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              Integrating with Monime provides access to more than{" "}
              <span className="text-[#0e90f5]">3.5 million consumers</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
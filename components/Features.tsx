export function Features() {
  const features = [
    {
      title: "Real-Time Payments",
      desc: "Instant checkout, payouts, and refunds with RTP rails",
    },
    {
      title: "Unified APIs",
      desc: "Single integration across RTP, ACH, Cards",
    },
    {
      title: "Domain Workflows",
      desc: "Industry-ready payment journeys out-of-the-box",
    },
    {
      title: "Cloud Native",
      desc: "Highly scalable multi-tenant SaaS architecture",
    },
  ]

  return (
    <section className="py-12 px-6">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Platform Capabilities
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Build, scale, and operate modern payment workflows using a unified,
          API-first platform designed for reliability and speed.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {f.title}
            </h3>

            <p className="text-gray-600">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
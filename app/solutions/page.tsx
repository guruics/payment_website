export default function Solutions() {
  const solutions = [
    {
      title: '🛒 Retail & Grocery',
      desc: 'Modernize checkout experiences across in-store and digital channels.',
      points: [
        'Real-time checkout and confirmation',
        'Subscriptions & loyalty programs',
        'Instant refunds and returns',
        'POS + eCommerce integration',
      ],
    },
    {
      title: '🏥 Healthcare',
      desc: 'Enable flexible and secure healthcare payments.',
      points: [
        'Patient billing & payment plans',
        'Recurring payment support',
        'Insurance & co-pay handling',
        'HIPAA-ready secure processing',
      ],
    },
    {
      title: '🏛 Government & Public Sector',
      desc: 'Digitize public service payments and collections.',
      points: [
        'Taxes, fees, and fines collection',
        'Real-time reconciliation',
        'Bulk disbursements',
        'Citizen payment portals',
      ],
    },
    {
      title: '🎓 Education',
      desc: 'Streamline tuition and institutional payments.',
      points: [
        'Tuition and fee payments',
        'Installment-based plans',
        'Recurring course billing',
        'Student dashboards',
      ],
    },
  ]

  return (
    <div className="py-12 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Solutions</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          ICS delivers industry-specific payment solutions designed to solve
          real-world business challenges across multiple sectors.
        </p>
      </div>

      {/* 2x2 GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 mb-4">{item.desc}</p>

            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
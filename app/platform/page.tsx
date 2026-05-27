'use client'

import { useState } from 'react'

export default function Platform() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const sections = [
  {
    title: '⚡ Real-time payment orchestration',
    content: (
      <>
        <p className="mb-4">
          Orchestrate end-to-end payment flows across RTP, ACH, and card networks
          with real-time execution and intelligent routing.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-lg">
          <li>Smart routing across multiple payment rails</li>
          <li>Automatic retries and fallback mechanisms</li>
          <li>Real-time status tracking and notifications</li>
          <li>Low-latency transaction processing</li>
        </ul>
      </>
    ),
  },
  {
    title: '🔗 API-first architecture',
    content: (
      <>
        <p className="mb-4">
          Integrate once and unlock a unified payment ecosystem through clean,
          scalable APIs designed for modern developers.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-lg">
          <li>Single API for RTP, ACH, and Cards</li>
          <li>RESTful design with secure authentication</li>
          <li>Flexible workflows for custom payment logic</li>
          <li>Developer-friendly SDKs and documentation</li>
        </ul>
      </>
    ),
  },
  {
    title: '💳 Subscription & billing engine',
    content: (
      <>
        <p className="mb-4">
          Support recurring revenue models with flexible billing, invoicing,
          and subscription lifecycle management.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-lg">
          <li>Recurring billing and subscription management</li>
          <li>Usage-based and tiered pricing models</li>
          <li>Automated invoicing and payment collection</li>
          <li>Customer lifecycle and plan management</li>
        </ul>
      </>
    ),
  },
  {
    title: '📊 Real-time reconciliation',
    content: (
      <>
        <p className="mb-4">
          Gain full visibility into transactions with real-time reconciliation
          and financial reporting capabilities.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-lg">
          <li>Instant transaction matching and reconciliation</li>
          <li>Exportable financial reports and audit logs</li>
          <li>Real-time dashboards and monitoring</li>
          <li>Exception handling and error tracking</li>
        </ul>
      </>
    ),
  },
]

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-12 px-6">
      {/* Page Header */}
      <div className="px-10 py-16 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Platform Overview
        </h1>

        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          ICS provides a unified payment orchestration layer integrating RTP,
          ACH, Cards, and modern payment rails into a single API platform.
        </p>

        {/* 2x2 Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
  {sections.map((item, index) => (
    <div
      key={index}
      className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
    >
      {/* Header */}
      <button
        onClick={() => toggle(index)}
        className="w-full text-left p-6 flex justify-between items-center"
      >
        <span className="text-lg font-medium">
          {item.title}
        </span>

        {/* Rotating Arrow */}
        <span
          className={`text-xl transition-transform duration-300 ${
            openIndex === index ? 'rotate-180' : ''
          }`}
        >
          ⌄
        </span>
      </button>

      {/* Animated Expand Section */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          openIndex === index
            ? 'max-h-96 opacity-100 px-6 pb-6'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gray-50 p-4 rounded-lg space-y-3 text-lg text-gray-700">
          {item.content}
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  )
}
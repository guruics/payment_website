'use client'

import { useState } from 'react'
import { Footer } from '@/components/Footer'

export default function Developers() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const apis = [
    {
      title: '🆔 Identity API',
      content: (
        <>
          <p className="mb-4">
            Verify customer identity and ensure compliance with KYC (Know Your Customer)
            requirements using secure identity services.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Customer onboarding and identity validation</li>
            <li>KYC and compliance verification workflows</li>
            <li>Tokenized identity management</li>
            <li>Secure authentication and authorization</li>
          </ul>

          <pre className="mt-4 bg-black text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
{`POST /api/identity/verify
{
  "userId": "12345",
  "documentType": "SSN",
  "value": "XXX-XX-XXXX"
}`}
          </pre>
        </>
      ),
    },
    {
      title: '📦 Create Order API',
      content: (
        <>
          <p className="mb-4">
            Create and manage payment orders across multiple payment rails
            with unified orchestration and lifecycle management.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Unified order creation across RTP, ACH, and Cards</li>
            <li>Dynamic routing and payment method selection</li>
            <li>Real-time status tracking</li>
            <li>Webhook-based updates and notifications</li>
          </ul>

          <pre className="mt-4 bg-black text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
{`POST /api/orders
{
  "amount": 150.00,
  "currency": "USD",
  "paymentMethod": "RTP",
  "customerId": "cust_001"
}`}
          </pre>
        </>
      ),
    },
    {
      title: '📊 Reconciliation API',
      content: (
        <>
          <p className="mb-4">
            Track and reconcile financial transactions in real time with full visibility
            across all payment channels and systems.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Real-time transaction reconciliation</li>
            <li>Access to detailed financial reports</li>
            <li>Audit logs and traceability</li>
            <li>Error and exception tracking</li>
          </ul>

          <pre className="mt-4 bg-black text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
{`GET /api/reconciliation?date=2026-01-01

Response:
{
  "totalTransactions": 1250,
  "matched": 1200,
  "exceptions": 50
}`}
          </pre>
        </>
      ),
    },
    {
      title: '🔔 Webhooks & Events API',
      content: (
        <>
          <p className="mb-4">
            Receive real-time updates on payment events, order status changes,
            and system notifications through webhook subscriptions.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Event-driven architecture for payment updates</li>
            <li>Order status and lifecycle notifications</li>
            <li>Custom webhook endpoints</li>
            <li>Retry mechanisms for reliability</li>
          </ul>

          <pre className="mt-4 bg-black text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
{`POST /webhooks/payment

{
  "event": "payment.completed",
  "orderId": "ord_123",
  "status": "SUCCESS"
}`}
          </pre>
        </>
      ),
    },
  ]

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <main className="flex-1">
      <div className="px-10 py-16 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Developer APIs
        </h1>

        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Integrate ICS seamlessly using our API-first platform. Build, test, and
          deploy real-time payment solutions using powerful, developer-friendly APIs.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {apis.map((item, index) => (
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

              {/* Expand Content */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? 'max-h-[500px] opacity-100 px-6 pb-6'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-gray-50 p-4 rounded-lg text-lg text-gray-700 space-y-3">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </main>
    </div>
  )
}
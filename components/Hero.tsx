'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-28 text-center">

      <motion.h1
        className="text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Real-Time Payment & Commerce Platform
      </motion.h1>

      <motion.p
        className="text-xl max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        ICS enables enterprises to deliver modern, domain-driven payment workflows
        powered by real-time payments and intelligent APIs.
      </motion.p>

      <motion.div
        className="flex justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow">
          Request Demo
        </button>

        <button className="border border-white px-8 py-4 rounded-lg">
          Explore Solutions
        </button>
      </motion.div>
    </section>
  )
}
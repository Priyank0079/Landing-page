'use client'

import {
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Lightning Fast',
    description:
      'Experience blazing-fast performance with our optimized infrastructure. Get things done in record time.',
    icon: BoltIcon,
  },
  {
    name: 'Secure & Reliable',
    description:
      'Your data is protected with enterprise-grade security. We take privacy and reliability seriously.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Analytics Dashboard',
    description:
      'Make data-driven decisions with comprehensive analytics and real-time insights at your fingertips.',
    icon: ChartBarIcon,
  },
  {
    name: 'AI-Powered',
    description:
      'Leverage cutting-edge AI technology to automate tasks and enhance your productivity effortlessly.',
    icon: SparklesIcon,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed, all in one place
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


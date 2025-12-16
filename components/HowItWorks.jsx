'use client'

import {
  UserPlusIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

const steps = [
  {
    number: '01',
    title: 'Sign Up',
    description:
      'Create your account in seconds. No credit card required to get started.',
    icon: UserPlusIcon,
  },
  {
    number: '02',
    title: 'Customize',
    description:
      'Configure your workspace and preferences to match your workflow needs.',
    icon: Cog6ToothIcon,
  },
  {
    number: '03',
    title: 'Launch',
    description:
      'Start using our platform and watch your productivity soar to new heights.',
    icon: RocketLaunchIcon,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent -z-10"></div>
              )}

              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-6 left-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-100 text-primary-600">
                    <step.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


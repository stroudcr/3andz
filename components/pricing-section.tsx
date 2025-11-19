"use client"

import { Button } from "@/components/ui/3d-button"
import { IconCheck } from "@tabler/icons-react"
import { motion } from "framer-motion"

export function PricingSection() {
  const plans = [
    {
      name: "Starter Systems",
      price: "$1,250",
      period: "+ $150/mo",
      description: "Perfect for small or local businesses needing a professional start.",
      features: [
        "1–3 page website or landing page",
        "Basic branding & templated design",
        "Contact form & lead capture",
        "Simple automations",
        "Hosting & maintenance included",
        "Minor content tweaks",
        "Site & form monitoring",
      ],
    },
    {
      name: "Growth Systems",
      price: "$2,500",
      period: "+ $250/mo",
      description: "For businesses with 5-20 staff ready to increase throughput and revenue.",
      features: [
        "4–8 page website",
        "Conversion-focused design",
        "2–4 key automations",
        "Basic analytics setup",
        "Ongoing hosting, backups, updates",
        "1–2 hours of changes per month",
        "Monitoring & light optimization",
      ],
      featured: true,
    },
    {
      name: "Done-For-You Partner",
      price: "Custom",
      period: "tailored to you",
      description: "For busy owners who want to never touch tech again.",
      features: [
        "Everything in Growth Systems",
        "Higher priority support",
        "Multiple integrations (CRM, etc.)",
        "More hours for changes",
        "Regular improvement suggestions",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the plan that fits your business's needs. All plans include our conversion-first approach.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border-2 ${plan.featured ? "bg-background border-primary shadow-lg scale-105" : "bg-background border-border"
                }`}
            >
              {plan.featured && (
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Most Popular</div>
              )}
              <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
              <Button stretch className="mb-6 rounded-full">
                Get Started
              </Button>
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

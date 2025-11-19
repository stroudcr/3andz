"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "Website Design & Development",
      image: "/images/services/web-design-desktop.png",
      overlayImage: "/images/services/web-design-mobile.png",
    },
    {
      title: "SEO Optimization",
      image: "/images/services/seo-dashboard.png",
      overlayImage: "/images/services/seo-search.png",
    },
    {
      title: "Analytics & Insights",
      image: "/images/services/analytics-main.png",
      overlayImage: "/images/services/analytics-detail.png",
    },
    {
      title: "Conversion Optimization",
      image: "/images/services/cro-funnel.png",
      overlayImage: "/images/services/cro-success.png",
    },
    {
      title: "Customized AI Tools",
      image: "/images/services/ai-chat.png",
      overlayImage: "/images/services/ai-network.png",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 w-full bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground mb-4 tracking-tight"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-muted-foreground"
          >
            Comprehensive web solutions to grow your business.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary/30 rounded-3xl p-8 flex flex-col h-[320px] transition-all duration-300 hover:bg-secondary/50"
            >
              {/* Image Container */}
              <div className="relative flex-grow flex items-center justify-center mb-6">
                {/* Back Image */}
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} showcase`}
                  width={300}
                  height={400}
                  className="absolute w-44 h-auto rounded-lg shadow-md transform -rotate-6 transition-all duration-400 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-105"
                />
                {/* Front Image */}
                <Image
                  src={service.overlayImage || "/placeholder.svg"}
                  alt={`${service.title} example`}
                  width={300}
                  height={400}
                  className="absolute w-44 h-auto rounded-lg shadow-lg transform rotate-3 transition-all duration-400 ease-in-out group-hover:rotate-[5deg] group-hover:scale-105"
                />
              </div>

              {/* Service Title */}
              <h3 className="font-sans text-left text-lg font-medium text-foreground mt-auto">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

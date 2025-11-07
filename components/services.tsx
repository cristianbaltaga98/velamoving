"use client"

import { Card } from "@/components/ui/card"

const services = [
  {
    title: "Residential Removals",
    description: "Full house removals with professional movers and equipment",
    icon: "🏠",
  },
  {
    title: "Office Relocations",
    description: "Seamless business relocations with minimal downtime",
    icon: "🏢",
  },
  {
    title: "Storage Solutions",
    description: "Secure, climate-controlled storage for your belongings",
    icon: "📦",
  },
  {
    title: "Marketplace Delivery",
    description: "Item-level delivery for online marketplace purchases",
    icon: "🚚",
  },
  {
    title: "Packing Services",
    description: "Professional packing to ensure safe transport",
    icon: "🎁",
  },
  {
    title: "Same Day Delivery",
    description: "Express shop-to-door delivery services",
    icon: "⚡",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">Comprehensive removal solutions tailored to your needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="p-6 bg-muted border border-border hover:border-accent transition-colors cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { LoadingScreen } from "@/components/loading-screen"
import { AnimatedVan } from "@/components/animated-van"
import { ArrowRight, CheckCircle, Zap, Shield, Users } from "lucide-react"

const SERVICES = [
  {
    id: 1,
    title: "Standard Removals",
    description:
      "Professional moving service with our experienced team handling all your belongings safely and efficiently.",
    icon: "🚚",
    features: ["Full-house packing", "Safe transportation", "Professional handling", "Flexible scheduling"],
    color: "from-black to-gray-800",
    price: "From £299",
  },
  {
    id: 2,
    title: "Removals with Help",
    description: "Get extra hands to carry items from your property. Perfect for items that need manual assistance.",
    icon: "💪",
    features: ["Expert movers", "Heavy lifting included", "Disassembly service", "Quick & efficient"],
    color: "from-gray-800 to-gray-900",
    price: "From £399",
  },
  {
    id: 3,
    title: "Marketplace Delivery",
    description: "We handle all your eBay, Amazon, and marketplace purchases. Safe delivery to your customers.",
    icon: "📦",
    features: ["Quick turnaround", "Packaged safely", "Tracked delivery", "Professional packaging"],
    color: "from-gray-700 to-black",
    price: "From £15",
  },
  {
    id: 4,
    title: "Same-Day Shop Delivery",
    description: "Need something urgent? Our same-day delivery service gets your items where they need to be fast.",
    icon: "⚡",
    features: ["Express service", "Same-day delivery", "24/7 availability", "Guaranteed arrival"],
    color: "from-gray-900 to-black",
    price: "From £49",
  },
]

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [showVan, setShowVan] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      setShowVan(true)
      // Hide entrance animation after it completes (4 seconds)
      const timer = setTimeout(() => setShowVan(false), 4000)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-foreground">VelaMoving</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground/60 hover:text-foreground hover:filter-none transition-all">
              Home
            </Link>
            <Link href="/services" className="text-sm font-semibold text-foreground">
              Services
            </Link>
            <Link href="/quote" className="text-sm font-medium text-muted-foreground/60 hover:text-foreground hover:filter-none transition-all">
              Quote
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground/60 hover:text-foreground hover:filter-none transition-all">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground/60 hover:text-foreground hover:filter-none transition-all">
              Contact
            </Link>
            <a
              href="https://wa.me/447911123456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-black rounded-full hover:opacity-80 transition-opacity"
              aria-label="Contact us on WhatsApp"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Our Removal{" "}
                <span className="text-black font-bold">
                  Services
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Choose the perfect moving solution for your needs. From standard house removals to marketplace
                deliveries, we've got you covered with professional, reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#quote"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Get Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all flex items-center justify-center gap-2"
                >
                  WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="relative h-64 flex items-center justify-center">
              {showVan ? (
                <div className="animate-van-entrance absolute inset-0 flex items-center justify-center">
                  <AnimatedVan />
                </div>
              ) : (
                <div className="animate-van-reappear flex items-center justify-center">
                  <img
                    src="/moving-van.png"
                    alt="Moving van"
                    className="w-[500px] h-auto drop-shadow-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Service</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the service that best fits your moving needs and get an instant quote
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`relative group cursor-pointer animate-slide-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-300`}
                />
                <div className="relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary hover:shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <span
                      className={`text-xs font-bold px-3 py-1 bg-gradient-to-r ${service.color} text-white rounded-full`}
                    >
                      {service.price}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  {/* Features list */}
                  <div
                    className={`space-y-3 overflow-hidden transition-all duration-300 ${selectedService === service.id ? "max-h-96" : "max-h-0"}`}
                  >
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`mt-6 w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedService === service.id
                        ? `bg-gradient-to-r ${service.color} text-white`
                        : "border border-border text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {selectedService === service.id ? "View Details" : "Learn More"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-card border-t border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Why Choose VelaMoving?</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Fully Insured", desc: "Complete protection for your belongings" },
              { icon: Users, title: "Expert Team", desc: "Trained and experienced professionals" },
              { icon: Zap, title: "Quick Service", desc: "Efficient and timely deliveries" },
              { icon: CheckCircle, title: "24/7 Support", desc: "Always here when you need us" },
            ].map((item, i) => (
              <div key={i} className="text-center animate-slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get an instant quote or contact us directly via WhatsApp. Our team is ready to help with your move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#quote"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Calculate Quote
              </Link>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

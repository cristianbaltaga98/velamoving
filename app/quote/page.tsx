"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import QuoteCalculator from "@/components/quote-calculator"
import { ArrowLeft } from "lucide-react"

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Get Your <span className="text-black font-bold">Free Quote</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Calculate your moving costs instantly. Our transparent pricing ensures you know exactly what you're paying for.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Get a Quote?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparent Pricing",
                description: "No hidden fees or surprise charges. What you see is what you pay.",
              },
              {
                title: "Instant Calculation",
                description: "Get your quote in seconds, not days. Plan your move efficiently.",
              },
              {
                title: "Flexible Options",
                description: "Customize your quote based on your specific moving needs.",
              },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <h3 className="font-bold text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import QuoteForm from "./quote-form"
import QuoteResult from "./quote-result"

export default function QuoteCalculator() {
  const [quote, setQuote] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleCalculateQuote = async (formData: any) => {
    setLoading(true)

    // Simulate API call - replace with actual backend call
    setTimeout(() => {
      const basePrice = 150
      const additionalServices = Object.values(formData.services || {}).filter(Boolean).length
      const totalPrice = basePrice + additionalServices * 50

      setQuote({
        basePrice,
        services: formData.services,
        additionalCost: additionalServices * 50,
        totalPrice,
        distance: formData.distance || "Local",
      })
      setLoading(false)
    }, 800)
  }

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Instant Quote Calculator</h2>
          <p className="text-lg text-muted-foreground">Select your removal type and get an accurate quote in seconds</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-background border border-border">
            <QuoteForm onCalculate={handleCalculateQuote} loading={loading} />
          </Card>
          <div className="flex items-center">
            {quote ? (
              <QuoteResult quote={quote} />
            ) : (
              <Card className="w-full p-8 bg-background border border-dashed border-border flex items-center justify-center min-h-96">
                <p className="text-muted-foreground text-center">
                  Your quote will appear here once you submit the form
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

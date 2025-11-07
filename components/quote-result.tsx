"use client"

import { Card } from "@/components/ui/card"

interface QuoteResultProps {
  quote: {
    basePrice: number
    totalPrice: number
    additionalCost: number
    services: Record<string, boolean>
    distance: string
  }
}

export default function QuoteResult({ quote }: QuoteResultProps) {
  return (
    <Card className="w-full p-8 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground space-y-6">
      <div>
        <p className="text-sm font-semibold opacity-90 mb-2">ESTIMATED QUOTE</p>
        <p className="text-5xl font-bold">£{quote.totalPrice}</p>
      </div>

      <div className="space-y-3 pt-6 border-t border-accent-foreground/20">
        <div className="flex justify-between text-sm">
          <span>Base Service</span>
          <span>£{quote.basePrice}</span>
        </div>
        {quote.additionalCost > 0 && (
          <div className="flex justify-between text-sm">
            <span>Additional Services</span>
            <span>£{quote.additionalCost}</span>
          </div>
        )}
      </div>

      <div className="space-y-3 pt-6 border-t border-accent-foreground/20">
        <button className="w-full bg-accent-foreground text-accent py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Proceed to Booking
        </button>
        <a
          href="https://wa.me/447700900000?text=I%20need%20a%20removal%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-white/20 text-accent-foreground py-3 rounded-lg font-semibold text-center hover:bg-white/30 transition-colors"
        >
          Contact via WhatsApp
        </a>
      </div>
    </Card>
  )
}

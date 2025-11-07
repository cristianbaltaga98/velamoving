"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface QuoteFormProps {
  onCalculate: (data: any) => void
  loading: boolean
}

export default function QuoteForm({ onCalculate, loading }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    serviceType: "simple",
    distance: "local",
    services: {
      helpToCarry: false,
      packing: false,
      storage: false,
    },
  })

  const serviceTypes = [
    { id: "simple", label: "Simple Removals", description: "Basic moving" },
    { id: "help", label: "With Help to Carry", description: "Professional assistance" },
    { id: "marketplace", label: "Marketplace Delivery", description: "Item delivery" },
    { id: "sameday", label: "Same Day Shop Delivery", description: "Express service" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCalculate(formData)
  }

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service as keyof typeof prev.services],
      },
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label className="text-base font-semibold mb-3 block">Service Type</Label>
        <div className="space-y-2">
          {serviceTypes.map((type) => (
            <label
              key={type.id}
              className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors"
            >
              <input
                type="radio"
                name="serviceType"
                value={type.id}
                checked={formData.serviceType === type.id}
                onChange={(e) => setFormData((prev) => ({ ...prev, serviceType: e.target.value }))}
                className="w-4 h-4"
              />
              <span className="ml-3">
                <span className="font-semibold">{type.label}</span>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-semibold mb-3 block">Distance</Label>
        <select
          value={formData.distance}
          onChange={(e) => setFormData((prev) => ({ ...prev, distance: e.target.value }))}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background"
        >
          <option value="local">Local (0-20 miles)</option>
          <option value="regional">Regional (20-50 miles)</option>
          <option value="national">National (50+ miles)</option>
        </select>
      </div>

      <div>
        <Label className="text-base font-semibold mb-3 block">Additional Services</Label>
        <div className="space-y-2">
          {[
            { key: "helpToCarry", label: "Help to Carry (+£50)" },
            { key: "packing", label: "Packing Service (+£50)" },
            { key: "storage", label: "Storage (+£50/week)" },
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.services[key as keyof typeof formData.services]}
                onChange={() => toggleService(key)}
                className="w-4 h-4"
              />
              <span className="ml-3 text-sm">{label}</span>
            </label>
          ))}
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        {loading ? "Calculating..." : "Calculate Quote"}
      </Button>
    </form>
  )
}

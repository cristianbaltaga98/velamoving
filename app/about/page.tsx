"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, Users, Award, TrendingUp, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              About <span className="text-black font-bold">VelaMoving</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your trusted partner for professional removal services across the UK
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                VelaMoving was founded with a simple mission: to make moving stress-free and affordable for everyone. 
                We understand that moving can be one of life's most challenging experiences, which is why we're committed 
                to providing exceptional service at every step.
              </p>
              <p>
                With years of experience in the removal industry, our team has helped thousands of families and businesses 
                relocate safely and efficiently. We pride ourselves on our attention to detail, professional approach, 
                and commitment to customer satisfaction.
              </p>
              <p>
                From small apartment moves to large commercial relocations, we handle every job with the same level of 
                care and professionalism. Our modern fleet of vehicles and trained staff ensure your belongings are 
                in safe hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card border-t border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Safety",
                description: "Fully insured and licensed for your peace of mind",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your satisfaction is our top priority",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Committed to delivering the highest quality service",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description: "Using modern technology to improve your experience",
              },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Moves Completed" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "50+", label: "Expert Team Members" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

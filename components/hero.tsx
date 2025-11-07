"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Animated Parcels Background */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        {/* Floating parcels/boxes with tape details */}
        <div 
          className="absolute rounded-lg animate-float-slow shadow-lg" 
          style={{ 
            top: '10%', 
            left: '10%', 
            width: '80px', 
            height: '70px',
            backgroundColor: 'rgba(139, 69, 19, 0.12)',
            border: '2px solid rgba(139, 69, 19, 0.25)',
            borderTop: '3px solid rgba(210, 180, 140, 0.4)',
            animationDelay: '0s', 
            animationDuration: '8s' 
          }} 
        />
        <div 
          className="absolute rounded-lg animate-float-slow shadow-lg" 
          style={{ 
            top: '20%', 
            right: '15%', 
            width: '65px', 
            height: '55px',
            backgroundColor: 'rgba(160, 82, 45, 0.10)',
            border: '2px solid rgba(160, 82, 45, 0.20)',
            borderLeft: '3px solid rgba(210, 180, 140, 0.4)',
            transform: 'rotate(15deg)',
            animationDelay: '2s', 
            animationDuration: '10s' 
          }} 
        />
        <div 
          className="absolute rounded-lg animate-float-slow shadow-lg" 
          style={{ 
            top: '40%', 
            left: '5%', 
            width: '95px', 
            height: '85px',
            backgroundColor: 'rgba(139, 69, 19, 0.11)',
            border: '2px solid rgba(139, 69, 19, 0.22)',
            borderTop: '3px solid rgba(210, 180, 140, 0.4)',
            borderRight: '3px solid rgba(210, 180, 140, 0.4)',
            animationDelay: '1s', 
            animationDuration: '12s' 
          }} 
        />
        <div 
          className="absolute rounded-lg animate-float-slow shadow-lg" 
          style={{ 
            top: '60%', 
            right: '20%', 
            width: '70px', 
            height: '60px',
            backgroundColor: 'rgba(160, 82, 45, 0.09)',
            border: '2px solid rgba(160, 82, 45, 0.18)',
            borderBottom: '3px solid rgba(210, 180, 140, 0.4)',
            transform: 'rotate(-8deg)',
            animationDelay: '3s', 
            animationDuration: '9s' 
          }} 
        />
        <div 
          className="absolute rounded-lg animate-float-slow shadow-lg" 
          style={{ 
            bottom: '20%', 
            left: '20%', 
            width: '60px', 
            height: '50px',
            backgroundColor: 'rgba(139, 69, 19, 0.10)',
            border: '2px solid rgba(139, 69, 19, 0.20)',
            borderLeft: '3px solid rgba(210, 180, 140, 0.4)',
            animationDelay: '4s', 
            animationDuration: '11s' 
          }} 
        />
        <div 
          className="absolute rounded-lg animate-float-slow shadow-lg" 
          style={{ 
            bottom: '30%', 
            right: '10%', 
            width: '85px', 
            height: '75px',
            backgroundColor: 'rgba(160, 82, 45, 0.10)',
            border: '2px solid rgba(160, 82, 45, 0.20)',
            borderTop: '3px solid rgba(210, 180, 140, 0.4)',
            transform: 'rotate(20deg)',
            animationDelay: '1.5s', 
            animationDuration: '13s' 
          }} 
        />
        <div 
          className="absolute rounded-lg animate-float-slow shadow-lg" 
          style={{ 
            top: '50%', 
            left: '50%', 
            width: '55px', 
            height: '45px',
            backgroundColor: 'rgba(139, 69, 19, 0.08)',
            border: '2px solid rgba(139, 69, 19, 0.16)',
            borderRight: '3px solid rgba(210, 180, 140, 0.4)',
            animationDelay: '2.5s', 
            animationDuration: '10s' 
          }} 
        />
        <div 
          className="absolute rounded-lg animate-float-slow shadow-lg" 
          style={{ 
            top: '15%', 
            left: '70%', 
            width: '90px', 
            height: '80px',
            backgroundColor: 'rgba(160, 82, 45, 0.11)',
            border: '2px solid rgba(160, 82, 45, 0.22)',
            borderLeft: '3px solid rgba(210, 180, 140, 0.4)',
            borderBottom: '3px solid rgba(210, 180, 140, 0.4)',
            transform: 'rotate(-12deg)',
            animationDelay: '0.5s', 
            animationDuration: '14s' 
          }} 
        />
        <div 
          className="absolute rounded-lg animate-float-slow shadow-lg" 
          style={{ 
            bottom: '15%', 
            left: '60%', 
            width: '70px', 
            height: '60px',
            backgroundColor: 'rgba(139, 69, 19, 0.09)',
            border: '2px solid rgba(139, 69, 19, 0.18)',
            borderTop: '3px solid rgba(210, 180, 140, 0.4)',
            animationDelay: '3.5s', 
            animationDuration: '9s' 
          }} 
        />
        <div 
          className="absolute rounded-lg animate-float-slow shadow-lg" 
          style={{ 
            top: '70%', 
            left: '30%', 
            width: '80px', 
            height: '70px',
            backgroundColor: 'rgba(160, 82, 45, 0.10)',
            border: '2px solid rgba(160, 82, 45, 0.20)',
            borderRight: '3px solid rgba(210, 180, 140, 0.4)',
            transform: 'rotate(8deg)',
            animationDelay: '1.2s', 
            animationDuration: '11s' 
          }} 
        />
      </div>

      <div className="text-center space-y-8 max-w-3xl relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
          Moving <span className="text-accent">Made Simple</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Professional removal services across the UK. Get instant quotes, transparent pricing, and trusted expertise.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/quote" className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
            Get a Quote
          </Link>
          <Link href="/about" className="px-8 py-3 border border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

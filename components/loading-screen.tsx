"use client"

import { AnimatedVan } from "./animated-van"

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      {/* Logo */}
      <div className="mb-12 animate-pulse">
        <h1 className="text-6xl font-bold text-black tracking-tight">VelaMoving</h1>
      </div>

      <div className="relative w-full max-w-md h-48 mb-8">
        {/* Van animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-32 text-primary animate-van-float">
            <AnimatedVan />
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center">
        <p className="text-muted-foreground mb-6 text-lg">Getting your move ready...</p>

        {/* Loading dots */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-black animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-3 h-3 rounded-full bg-black animate-bounce" style={{ animationDelay: "0.15s" }} />
          <div className="w-3 h-3 rounded-full bg-black animate-bounce" style={{ animationDelay: "0.3s" }} />
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-12 w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-black animate-pulse" style={{ width: "65%" }} />
      </div>
    </div>
  )
}

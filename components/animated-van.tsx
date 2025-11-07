"use client"

import Image from "next/image"

export function AnimatedVan() {
  return (
    <div className="w-full flex items-center justify-center">
      {/* Van body */}
      <div className="animate-van-move">
        <Image
          src="/moving-van.png"
          alt="Moving van"
          width={500}
          height={400}
          className="w-[500px] h-auto drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  )
}

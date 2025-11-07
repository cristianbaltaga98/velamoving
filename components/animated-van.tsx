"use client"

export function AnimatedVan() {
  return (
    <div className="w-full flex items-center justify-center">
      {/* Van body */}
      <div className="animate-van-move">
        <img
          src="/velamoving/moving-van.png"
          alt="Moving van"
          className="w-[500px] h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  )
}

"use client"

export function AnimatedVan() {
  const basePath = process.env.NODE_ENV === 'production' ? '/velamoving' : ''
  
  return (
    <div className="w-full flex items-center justify-center">
      {/* Van body */}
      <div className="animate-van-move">
        <img
          src={`${basePath}/moving-van.png`}
          alt="Moving van"
          className="w-[500px] h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  )
}

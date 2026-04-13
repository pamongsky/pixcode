'use client'

interface SplineSceneProps {
  className?: string
}

export default function SplineScene({ className }: SplineSceneProps) {
  return (
    <div className={className}>
      <iframe
        src="https://my.spline.design/retrofuturisticcircuitloop-cPX6NSZ9QluqJf3wJSyHDb1Q/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Spline 3D Scene"
        loading="lazy"
      />
    </div>
  )
}

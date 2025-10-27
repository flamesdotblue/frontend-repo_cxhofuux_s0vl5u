import React, { Suspense, useEffect, useState } from 'react'

let LazySpline = null
try {
  // Lazy load Spline only on client
  LazySpline = React.lazy(() => import('@splinetool/react-spline'))
} catch (e) {
  LazySpline = null
}

export default function SplineScene({ scene }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !LazySpline) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <LazySpline scene={scene} style={{ width: '100%', height: '100%' }} />
    </Suspense>
  )
}

import { useEffect, useRef, useState } from 'react'

export default function useLazyImage(src) {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = ref.current
    let observer
    if (img && 'IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              img.src = src
              observer.unobserve(img)
            }
          })
        },
        { rootMargin: '200px' }
      )
      observer.observe(img)
    } else if (img) {
      img.src = src
    }
    return () => observer && observer.disconnect()
  }, [src])

  return [ref, loaded, setLoaded]
}

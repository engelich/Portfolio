import useLazyImage from '../hooks/lazy-image.jsx'

export default function LazyImage({ src, alt, className = '', ...props }) {
  const [ref, loaded, setLoaded] = useLazyImage(src)

  return (
    <div className={`relative overflow-hidden aspect-[16/8] h-full ${className}`}>
      {/* Скелетон, пока не загружено */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#232357] via-[#26284a] to-[#232357] animate-pulse" />
      )}
      <img
        ref={ref}
        alt={alt}
        className={`w-full h-full aspect[16/8] object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        style={{ position: 'relative', zIndex: 2 }}
        {...props}
      />
    </div>
  )
}

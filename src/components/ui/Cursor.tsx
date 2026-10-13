import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0, rx: 0, ry: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    setIsVisible(true)
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX
      posRef.current.y = e.clientY
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }

    let raf: number
    const animate = () => {
      posRef.current.rx += (posRef.current.x - posRef.current.rx) * 0.15
      posRef.current.ry += (posRef.current.y - posRef.current.ry) * 0.15
      ring.style.left = posRef.current.rx + 'px'
      ring.style.top = posRef.current.ry + 'px'
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const hover = () => document.body.classList.add('cursor-hover')
    const unhover = () => document.body.classList.remove('cursor-hover')

    const attachHoverListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', hover)
        el.addEventListener('mouseleave', unhover)
      })
    }

    attachHoverListeners()
    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div id="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div id="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  )
}

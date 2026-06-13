import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0, rx: 0, ry: 0 })

  useEffect(() => {
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
      posRef.current.rx += (posRef.current.x - posRef.current.rx) * 0.14
      posRef.current.ry += (posRef.current.y - posRef.current.ry) * 0.14
      ring.style.left = posRef.current.rx + 'px'
      ring.style.top = posRef.current.ry + 'px'
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const hover = () => document.body.classList.add('cursor-hover')
    const unhover = () => document.body.classList.remove('cursor-hover')
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', hover)
      el.addEventListener('mouseleave', unhover)
    })

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({ position, color, shape = 'ico', speed = 1 }: any) {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
  })
  const mat = <meshStandardMaterial color={color} wireframe transparent opacity={0.25} />
  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {shape === 'ico' && <icosahedronGeometry args={[1, 1]} />}
        {shape === 'torus' && <torusGeometry args={[0.8, 0.25, 12, 48]} />}
        {shape === 'box' && <boxGeometry args={[1.2, 1.2, 1.2]} />}
        {shape === 'oct' && <octahedronGeometry args={[1]} />}
        {mat}
      </mesh>
    </Float>
  )
}

function Particles() {
  const count = 280
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 28
      pos[i * 3 + 1] = (Math.random() - 0.5) * 28
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16
    }
    return pos
  }, [])
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [positions])
  const pointsRef = useRef<THREE.Points>(null)
  useFrame(({ clock }) => {
    if (pointsRef.current) pointsRef.current.rotation.y = clock.elapsedTime * 0.015
  })
  return (
    <points ref={pointsRef} geometry={geo}>
      <pointsMaterial color="#a78bfa" size={0.055} transparent opacity={0.65} sizeAttenuation />
    </points>
  )
}

function CameraRig() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  useFrame(() => {
    const tx = mouse.current.x * 1.2
    const ty = mouse.current.y * 0.8
    camera.position.x += (tx - camera.position.x) * 0.03
    camera.position.y += (ty - camera.position.y) * 0.03
    camera.lookAt(0, 0, 0)
  })
  const onMove = (e: MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
    mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 1.5
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', onMove, { passive: true })
  }
  return null
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 12], fov: 55 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[8, 8, 8]} color="#7c3aed" intensity={2} />
        <pointLight position={[-8, -4, 4]} color="#06b6d4" intensity={1.5} />
        <Particles />
        <CameraRig />
        <FloatingShape position={[-5, 2.5, 0]} color="#a78bfa" shape="ico" speed={0.7} />
        <FloatingShape position={[5, -1.5, -1]} color="#06b6d4" shape="torus" speed={0.9} />
        <FloatingShape position={[3, 3, -2]} color="#f472b6" shape="oct" speed={0.6} />
        <FloatingShape position={[-4, -2.5, 0]} color="#22d3ee" shape="box" speed={0.8} />
        <FloatingShape position={[0, -3.5, -3]} color="#7c3aed" shape="ico" speed={1.1} />
      </Canvas>
    </div>
  )
}

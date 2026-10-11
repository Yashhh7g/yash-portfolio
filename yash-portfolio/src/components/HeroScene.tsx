// Glass-style 3D hero. Lazy-loaded. Uses glossy transparent materials (no heavy
// transmission/refraction passes) so it stays smooth on a 4 GB laptop.
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Group } from 'three'

type P = [number, number, number]
const Glass = ({ color, opacity = 0.78 }: { color: string; opacity?: number }) => (
  <meshPhysicalMaterial color={color} transparent opacity={opacity} roughness={0.06} metalness={0.05} clearcoat={1} clearcoatRoughness={0.02} reflectivity={1} />
)

function Orbiter({ p, speed, children }: { p: P; speed: number; children: React.ReactNode }) {
  const ref = useRef<Group>(null)
  useFrame(({ clock }, d) => {
    const g = ref.current
    if (!g) return
    g.rotation.x += d * speed
    g.rotation.y += d * speed * 1.2
    g.position.y = p[1] + Math.sin(clock.elapsedTime * speed * 2.5 + p[0]) * 0.2
  })
  return <group ref={ref} position={p}>{children}</group>
}

function Rig() {
  const ref = useRef<Group>(null)
  // The whole cluster leans toward the mouse for a 3D parallax feel.
  useFrame(({ pointer }) => {
    const g = ref.current
    if (!g) return
    g.rotation.y += (pointer.x * 0.5 - g.rotation.y) * 0.05
    g.rotation.x += (-pointer.y * 0.3 - g.rotation.x) * 0.05
  })
  return (
    <group ref={ref}>
      <Orbiter p={[0, 0, 0]} speed={0.22}>
        <mesh scale={1.1}><torusKnotGeometry args={[0.9, 0.3, 120, 14]} /><Glass color="#ff9d2f" /></mesh>
      </Orbiter>
      <Orbiter p={[-2.3, 1.2, -0.8]} speed={0.4}>
        <mesh><icosahedronGeometry args={[0.55, 1]} /><Glass color="#ffffff" opacity={0.6} /></mesh>
      </Orbiter>
      <Orbiter p={[2.3, 1.0, -0.4]} speed={0.3}>
        <mesh><torusGeometry args={[0.55, 0.2, 16, 40]} /><Glass color="#ffb347" /></mesh>
      </Orbiter>
      <Orbiter p={[1.7, -1.6, 0.4]} speed={0.5}>
        <mesh><sphereGeometry args={[0.42, 24, 24]} /><Glass color="#2ee6d6" opacity={0.85} /></mesh>
      </Orbiter>
      <Orbiter p={[-1.9, -1.4, 0.3]} speed={0.35}>
        <mesh><octahedronGeometry args={[0.55]} /><Glass color="#ffffff" opacity={0.55} /></mesh>
      </Orbiter>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.5], fov: 45 }} gl={{ antialias: true, powerPreference: 'low-power' }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 5, 5]} intensity={2.4} />
      <pointLight position={[-4, -2, 3]} intensity={30} color="#ff9d2f" />
      <Rig />
    </Canvas>
  )
}

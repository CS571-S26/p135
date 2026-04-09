import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { projects } from '../data/projects'

export default function ProjectDial({ selectedProjectIndex, setSelectedProjectIndex }) {
  const groupRef = useRef()
  const [hovered, setHovered] = useState(false)
  const targetRotation = -(selectedProjectIndex / projects.length) * Math.PI * 2

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += (targetRotation - groupRef.current.rotation.z) * 0.1
    }
  })

  const handleClick = (e) => {
    e.stopPropagation()
    setSelectedProjectIndex((prev) => (prev + 1) % projects.length)
  }

  return (
    <group position={[-2.2, 0.3, 0.2]} scale={0.7}>
      {/* Label */}
      <Text position={[0, 0.65, 0.01]} fontSize={0.1} color="#00ffcc" anchorX="center">
        PROJECTS
      </Text>

      {/* Dial base */}
      <mesh
        onClick={handleClick}
        onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto' }}
      >
        <cylinderGeometry args={[0.45, 0.45, 0.06, 32]} />
        <meshStandardMaterial
          color="#0a1a2a"
          metalness={0.9}
          roughness={0.2}
          emissive="#00ffcc"
          emissiveIntensity={hovered ? 0.15 : 0.05}
        />
      </mesh>

      {/* Rotating pointer */}
      <group ref={groupRef} position={[0, 0.04, 0]}>
        <mesh position={[0, 0, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.04, 0.06, 0.3]} />
          <meshStandardMaterial
            color="#00ffcc"
            emissive="#00ffcc"
            emissiveIntensity={hovered ? 1.2 : 0.6}
          />
        </mesh>
      </group>

      {/* Tick marks */}
      {projects.map((_, i) => {
        const angle = -(i / projects.length) * Math.PI * 2
        const x = Math.sin(angle) * 0.35
        const z = Math.cos(angle) * 0.35
        return (
          <mesh key={i} position={[x, 0.04, z]}>
            <boxGeometry args={[0.03, 0.04, 0.06]} />
            <meshStandardMaterial
              color={i === selectedProjectIndex ? '#00ffcc' : '#334455'}
              emissive={i === selectedProjectIndex ? '#00ffcc' : '#000000'}
              emissiveIntensity={i === selectedProjectIndex ? 0.5 : 0}
            />
          </mesh>
        )
      })}
    </group>
  )
}

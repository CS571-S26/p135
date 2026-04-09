import { useState } from 'react'
import { Text } from '@react-three/drei'
import { projects } from '../data/projects'

function Toggle({ position, label, isOn, onSelect }) {
  const [hovered, setHovered] = useState(false)

  return (
    <group position={position}>
      {/* Label */}
      <Text position={[0, 0, -0.25]} fontSize={0.06} color="#00ffcc" anchorX="center" rotation={[0, 0, 0]}>
        {label}
      </Text>

      {/* Switch slot */}
      <mesh>
        <boxGeometry args={[0.1, 0.08, 0.3]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Toggle lever — moves along Z (forward/back on the dashboard surface) */}
      <mesh
        position={[0, 0.06, isOn ? 0.08 : -0.08]}
        onClick={(e) => { e.stopPropagation(); onSelect() }}
        onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto' }}
      >
        <boxGeometry args={[0.07, 0.1, 0.12]} />
        <meshStandardMaterial
          color={isOn ? '#00ffcc' : '#333333'}
          emissive={isOn ? '#00ffcc' : '#000000'}
          emissiveIntensity={hovered ? 0.8 : isOn ? 0.4 : 0}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>

      {/* Status indicator */}
      <mesh position={[0, 0.04, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.025, 16]} />
        <meshStandardMaterial
          color={isOn ? '#00ff88' : '#331111'}
          emissive={isOn ? '#00ff88' : '#330000'}
          emissiveIntensity={isOn ? 0.8 : 0.1}
        />
      </mesh>
    </group>
  )
}

export default function ProjectSwitches({ selectedProjectIndex, setSelectedProjectIndex }) {
  const spacing = 0.35
  const startX = -((projects.length - 1) * spacing) / 2

  return (
    <group position={[2.2, 0.3, 0.2]}>
      {/* Label */}
      <Text position={[0, 0, -0.4]} fontSize={0.08} color="#00ffcc" anchorX="center">
        SELECT
      </Text>

      {/* Backplate */}
      <mesh position={[0, -0.02, 0]}>
        <boxGeometry args={[projects.length * spacing + 0.3, 0.06, 0.8]} />
        <meshStandardMaterial color="#0a1520" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Switches */}
      {projects.map((project, i) => (
        <Toggle
          key={project.id}
          position={[startX + i * spacing, 0.04, 0]}
          label={`P${i + 1}`}
          isOn={selectedProjectIndex === i}
          onSelect={() => setSelectedProjectIndex(i)}
        />
      ))}
    </group>
  )
}

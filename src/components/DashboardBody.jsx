import { RoundedBox } from '@react-three/drei'

export default function DashboardBody() {
  return (
    <group>
      {/* Main dashboard slab — thick and wide */}
      <RoundedBox args={[7, 0.4, 2.5]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a2535" metalness={0.85} roughness={0.25} />
      </RoundedBox>

      {/* Upper panel — raised section behind the controls */}
      <RoundedBox args={[7.2, 0.3, 0.8]} radius={0.04} smoothness={4} position={[0, 0.3, -0.85]}>
        <meshStandardMaterial color="#141e2c" metalness={0.9} roughness={0.2} />
      </RoundedBox>

      {/* Top edge trim — thin highlight strip */}
      <RoundedBox args={[7.4, 0.08, 0.15]} radius={0.02} smoothness={4} position={[0, 0.48, -1.0]}>
        <meshStandardMaterial
          color="#0f1820"
          emissive="#00ccaa"
          emissiveIntensity={0.04}
          metalness={0.95}
          roughness={0.1}
        />
      </RoundedBox>

      {/* Front lip — closest to viewer */}
      <RoundedBox args={[6.5, 0.2, 0.15]} radius={0.03} smoothness={4} position={[0, -0.1, 1.3]}>
        <meshStandardMaterial color="#0d1218" metalness={0.9} roughness={0.15} />
      </RoundedBox>

      {/* Left armrest/side panel */}
      <RoundedBox args={[0.6, 0.35, 2.0]} radius={0.04} smoothness={4} position={[-3.2, 0.05, 0.2]}>
        <meshStandardMaterial color="#121c28" metalness={0.85} roughness={0.25} />
      </RoundedBox>

      {/* Right armrest/side panel */}
      <RoundedBox args={[0.6, 0.35, 2.0]} radius={0.04} smoothness={4} position={[3.2, 0.05, 0.2]}>
        <meshStandardMaterial color="#121c28" metalness={0.85} roughness={0.25} />
      </RoundedBox>

      {/* Screen recess — darker inset area */}
      <RoundedBox args={[3.0, 0.06, 1.6]} radius={0.04} smoothness={4} position={[0, 0.22, 0]}>
        <meshStandardMaterial color="#060a10" metalness={0.7} roughness={0.4} />
      </RoundedBox>

      {/* Screen bezel — glowing border */}
      <RoundedBox args={[2.8, 0.03, 1.4]} radius={0.03} smoothness={4} position={[0, 0.24, 0]}>
        <meshStandardMaterial
          color="#0a1015"
          emissive="#00ccaa"
          emissiveIntensity={0.12}
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>
    </group>
  )
}

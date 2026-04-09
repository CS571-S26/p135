const frameColor = '#0e1825'
const frameProps = { color: frameColor, metalness: 0.95, roughness: 0.15 }

export default function WindshieldFrame() {
  return (
    <group>
      {/* Left pillar — angled inward toward top */}
      <mesh position={[-3.5, 1.5, 0.2]} rotation={[0, 0, 0.12]}>
        <boxGeometry args={[0.25, 4.5, 0.25]} />
        <meshStandardMaterial {...frameProps} />
      </mesh>

      {/* Right pillar */}
      <mesh position={[3.5, 1.5, 0.2]} rotation={[0, 0, -0.12]}>
        <boxGeometry args={[0.25, 4.5, 0.25]} />
        <meshStandardMaterial {...frameProps} />
      </mesh>

      {/* Top crossbar — narrower than bottom to complete trapezoid */}
      <mesh position={[0, 3.6, 0.1]}>
        <boxGeometry args={[5.5, 0.25, 0.25]} />
        <meshStandardMaterial {...frameProps} />
      </mesh>

      {/* Center vertical divider (like reference image) */}
      <mesh position={[0, 3.0, 0.15]}>
        <boxGeometry args={[0.08, 1.5, 0.12]} />
        <meshStandardMaterial {...frameProps} />
      </mesh>

      {/* Left junction — pillar meets dashboard */}
      <mesh position={[-3.3, -0.5, 0.8]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[0.6, 0.5, 0.8]} />
        <meshStandardMaterial {...frameProps} />
      </mesh>

      {/* Right junction */}
      <mesh position={[3.3, -0.5, 0.8]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[0.6, 0.5, 0.8]} />
        <meshStandardMaterial {...frameProps} />
      </mesh>

      {/* Left side wall — fills gap between pillar and edge of viewport */}
      <mesh position={[-4.2, 1.0, 0.0]}>
        <boxGeometry args={[1.5, 5, 0.15]} />
        <meshStandardMaterial color="#080e15" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Right side wall */}
      <mesh position={[4.2, 1.0, 0.0]}>
        <boxGeometry args={[1.5, 5, 0.15]} />
        <meshStandardMaterial color="#080e15" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Bottom wall — connects side walls to dashboard, fills gap below windshield */}
      <mesh position={[0, -0.8, 0.6]} rotation={[-0.4, 0, 0]}>
        <boxGeometry args={[8.5, 0.8, 0.5]} />
        <meshStandardMaterial color="#0a1118" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  )
}

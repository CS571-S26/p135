import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'

function App() {
  return (
    <>
      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={2000} factor={4} fade speed={1} />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        pointerEvents: 'none',
      }}>
        <h1 style={{ fontSize: '3rem', letterSpacing: '0.5rem', marginBottom: '1rem' }}>
          STARSHIP
        </h1>
        <p style={{ opacity: 0.6 }}>Pranav Karthik — Portfolio (Coming Soon)</p>
      </div>
    </>
  )
}

export default App

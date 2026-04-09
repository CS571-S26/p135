import { useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Stars, Environment } from '@react-three/drei'
import DashboardBody from './DashboardBody'
import WindshieldFrame from './WindshieldFrame'
import DashboardScreen from './DashboardScreen'
import ProjectDial from './ProjectDial'
import ProjectSwitches from './ProjectSwitches'

function CameraSetup() {
  const { camera } = useThree()
  useEffect(() => {
    camera.lookAt(0, -0.5, 0)
    camera.updateProjectionMatrix()
  }, [camera])
  return null
}

export default function CockpitScene({
  selectedProjectIndex,
  setSelectedProjectIndex,
}) {
  return (
    <Canvas
      camera={{ position: [0, 1.8, 5], fov: 60 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <CameraSetup />

      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 4, 3]} intensity={0.8} color="#ffffff" />
      <pointLight position={[0, 0.5, 2]} intensity={0.5} color="#00ddcc" distance={5} decay={2} />
      <pointLight position={[-3, 1, 2]} intensity={0.2} color="#00aacc" distance={4} />
      <pointLight position={[3, 1, 2]} intensity={0.2} color="#00aacc" distance={4} />

      <Environment preset="night" />

      <Stars radius={100} depth={50} count={3000} factor={4} fade speed={0.8} />

      {/* Windshield frame — world space, upper portion */}
      <WindshieldFrame />

      {/* Dashboard — tilted toward the viewer */}
      <group position={[0, -0.8, 1.5]} rotation={[-0.55, 0, 0]}>
        <DashboardBody />
        <DashboardScreen
          selectedProjectIndex={selectedProjectIndex}
          setSelectedProjectIndex={setSelectedProjectIndex}
        />
        <ProjectDial
          selectedProjectIndex={selectedProjectIndex}
          setSelectedProjectIndex={setSelectedProjectIndex}
        />
        <ProjectSwitches
          selectedProjectIndex={selectedProjectIndex}
          setSelectedProjectIndex={setSelectedProjectIndex}
        />
      </group>
    </Canvas>
  )
}

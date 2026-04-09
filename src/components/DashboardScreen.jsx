import { Html } from '@react-three/drei'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function ScreenContent({ selectedProjectIndex, setSelectedProjectIndex }) {
  const project = projects[selectedProjectIndex]
  const total = projects.length

  return (
    <div
      style={{
        width: '480px',
        padding: '20px 24px',
        fontFamily: "'Courier New', monospace",
        color: '#c0e8e0',
        background: 'rgba(0, 15, 20, 0.7)',
        borderRadius: '4px',
        userSelect: 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <button
          onClick={() => setSelectedProjectIndex((prev) => (prev - 1 + total) % total)}
          style={{
            background: 'none',
            border: '1px solid rgba(0, 255, 204, 0.3)',
            color: '#00ffcc',
            fontSize: '18px',
            padding: '2px 10px',
            cursor: 'pointer',
            borderRadius: '3px',
            fontFamily: 'inherit',
          }}
        >
          &#8249;
        </button>
        <span style={{ color: '#447766', fontSize: '10px', letterSpacing: '3px' }}>
          {selectedProjectIndex + 1} / {total}
        </span>
        <button
          onClick={() => setSelectedProjectIndex((prev) => (prev + 1) % total)}
          style={{
            background: 'none',
            border: '1px solid rgba(0, 255, 204, 0.3)',
            color: '#00ffcc',
            fontSize: '18px',
            padding: '2px 10px',
            cursor: 'pointer',
            borderRadius: '3px',
            fontFamily: 'inherit',
          }}
        >
          &#8250;
        </button>
      </div>

      <h2 style={{ fontSize: '16px', color: '#00ddbb', letterSpacing: '2px', marginBottom: '6px' }}>
        {project.title}
      </h2>
      <p style={{ fontSize: '11px', color: '#88aaa0', lineHeight: '1.5', marginBottom: '10px' }}>
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '12px' }}>
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              padding: '2px 8px',
              fontSize: '9px',
              border: '1px solid rgba(0, 200, 170, 0.3)',
              color: '#00ccaa',
              borderRadius: '10px',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <Link
        to={`/project/${project.id}`}
        style={{
          display: 'inline-block',
          padding: '5px 14px',
          fontSize: '10px',
          border: '1px solid rgba(0, 255, 204, 0.4)',
          color: '#00ffcc',
          borderRadius: '3px',
          textDecoration: 'none',
          letterSpacing: '1px',
        }}
      >
        VIEW DETAILS →
      </Link>
    </div>
  )
}

export default function DashboardScreen({ selectedProjectIndex, setSelectedProjectIndex }) {
  return (
    <group position={[0, 0.26, 0]}>
      {/* Screen backing plane */}
      <mesh>
        <planeGeometry args={[2.6, 1.3]} />
        <meshStandardMaterial
          color="#001515"
          emissive="#004444"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Html content */}
      <Html
        transform
        position={[0, 0, 0.01]}
        scale={0.24}
        style={{ pointerEvents: 'auto' }}
      >
        <ScreenContent
          selectedProjectIndex={selectedProjectIndex}
          setSelectedProjectIndex={setSelectedProjectIndex}
        />
      </Html>
    </group>
  )
}

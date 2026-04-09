import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import CockpitPage from './pages/CockpitPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  return (
    <Routes>
      <Route
        path="/"
        element={
          <CockpitPage
            selectedProjectIndex={selectedProjectIndex}
            setSelectedProjectIndex={setSelectedProjectIndex}
          />
        }
      />
      <Route path="/project/:id" element={<ProjectDetailPage />} />
    </Routes>
  )
}

export default App

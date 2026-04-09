import CockpitScene from '../components/CockpitScene'

export default function CockpitPage({
  selectedProjectIndex,
  setSelectedProjectIndex,
}) {
  return (
    <CockpitScene
      selectedProjectIndex={selectedProjectIndex}
      setSelectedProjectIndex={setSelectedProjectIndex}
    />
  )
}

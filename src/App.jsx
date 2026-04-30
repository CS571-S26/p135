import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import StarField from './components/StarField';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

function App() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <StarField />
      <NavBar />
      <main className="main-content">
        <div key={location.pathname} className="route-transition">
          <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

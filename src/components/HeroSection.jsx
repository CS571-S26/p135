import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
      <Container className="text-center">
        <div className="hero-ship">⟐</div>
        <h1 className="hero-title">STARSHIP</h1>
        <p className="hero-subtitle">Pranav Karthik's Portfolio</p>
        <p className="hero-tagline">Navigating the universe of software engineering</p>
        <div className="hero-actions">
          <Button
            as={Link}
            to="/projects"
            variant="outline-light"
            size="lg"
            className="hero-btn"
          >
            View Missions ➜
          </Button>
          <Button
            as={Link}
            to="/about"
            variant="outline-secondary"
            size="lg"
            className="hero-btn ms-3"
          >
            Meet the Crew
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <div className="hero-layout">
          <div className="hero-panel reveal">
            <p className="hero-kicker">Personal Command Interface</p>
          <h1 className="hero-title">STARSHIP</h1>
          <p className="hero-subtitle">Pranav Karthik&apos;s Portfolio</p>
            <p className="hero-tagline">
              Navigating software engineering through deep-space systems, mission-ready tooling, and
              curious experimentation.
            </p>
            <div className="hero-actions">
              <Button
                as={Link}
                to="/projects"
                variant="dark"
                size="lg"
                className="hero-btn reveal reveal-delay-1"
              >
                View Missions ➜
              </Button>
              <Button
                as={Link}
                to="/about"
                variant="dark"
                size="lg"
                className="hero-btn hero-btn-secondary reveal reveal-delay-2"
              >
                Meet the Crew
              </Button>
            </div>
            <div className="hero-signal reveal reveal-delay-3">
              <span>Signal Integrity: 99.4%</span>
              <span>Orbit: Stable</span>
              <span>Drive Core: Online</span>
            </div>
          </div>
          <div className="hero-orbit reveal reveal-delay-2" aria-hidden="true">
            <div className="orbital-ring orbital-ring-one" />
            <div className="orbital-ring orbital-ring-two" />
            <div className="orbital-ring orbital-ring-three" />
            <div className="hero-core">⟐</div>
            <div className="hero-satellite sat-one" />
            <div className="hero-satellite sat-two" />
            <div className="hero-satellite sat-three" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

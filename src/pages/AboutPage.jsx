import { Container, Row, Col } from 'react-bootstrap';
import ConstellationLedger from '../components/ConstellationLedger';
import TechRadar from '../components/TechRadar';

function AboutPage() {
  return (
    <div className="page about-page">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <h2 className="page-heading reveal">Crew Manifest</h2>
            <div className="crew-card glass-surface reveal reveal-delay-1">
              <div className="crew-avatar">PK</div>
              <h3 className="crew-name">Pranav Karthik</h3>
              <p className="crew-role">Captain &amp; Chief Engineer</p>
              <p className="crew-bio">
                Computer Science student passionate about building software that
                pushes boundaries. When not coding, you can find me exploring new
                technologies, contributing to open source, or charting courses
                through uncharted digital space.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <TechRadar />
          </Col>
        </Row>
        <ConstellationLedger />
      </Container>
    </div>
  );
}

export default AboutPage;

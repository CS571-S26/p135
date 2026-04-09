import { Container, Row, Col } from 'react-bootstrap';
import SkillBadge from '../components/SkillBadge';
import skills from '../data/skills';

function AboutPage() {
  return (
    <div className="page about-page">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="page-heading">Crew Manifest</h2>
            <div className="crew-card">
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
            <h2 className="page-heading">Systems &amp; Proficiencies</h2>
            <div className="skills-list">
              {skills.map((s) => (
                <SkillBadge key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutPage;

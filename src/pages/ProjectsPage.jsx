import { Container, Row, Col } from 'react-bootstrap';
import PageIntro from '../components/PageIntro';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

function ProjectsPage() {
  return (
    <div className="page projects-page">
      <Container>
        <PageIntro
          title="Mission Log"
          subtitle="Active and completed missions from across the galaxy."
        />
        <div className="mission-ribbon reveal reveal-delay-2">
          <span>6 Registered Missions</span>
          <span>3 Active Sectors</span>
          <span>Mission Archive Active</span>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4 mt-2 projects-grid">
          {projects.map((p) => (
            <Col key={p.id}>
              <ProjectCard project={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsPage;

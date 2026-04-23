import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import MissionConsole from '../components/MissionConsole';
import projects from '../data/projects';

function ProjectsPage() {
  return (
    <div className="page projects-page">
      <Container>
        <h2 className="page-heading">Mission Log</h2>
        <p className="page-sub">Active and completed missions from across the galaxy.</p>
        <Row xs={1} md={2} lg={3} className="g-4 mt-2">
          {projects.map((p) => (
            <Col key={p.id}>
              <ProjectCard project={p} />
            </Col>
          ))}
        </Row>
        <MissionConsole projects={projects} />
      </Container>
    </div>
  );
}

export default ProjectsPage;

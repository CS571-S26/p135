import { Card, Badge } from 'react-bootstrap';

function ProjectCard({ project }) {
  const statusClass = project.status === 'Complete' ? 'success' : 'warning';

  return (
    <Card className="project-card h-100 reveal reveal-delay-1">
      <Card.Body>
        <div className="project-status">
          <Badge bg={statusClass}>
            {project.status}
          </Badge>
        </div>
        <Card.Title className="project-title">{project.name}</Card.Title>
        <Card.Text className="project-desc">{project.description}</Card.Text>
        <div className="project-tech">
          {project.tech.map((t) => (
            <Badge key={t} pill className="me-1 mb-1 tech-badge">
              {t}
            </Badge>
          ))}
        </div>
      </Card.Body>
      {project.link && (
        <Card.Footer className="project-footer">
          <a href={project.link} target="_blank" rel="noreferrer">
            View Mission Log →
          </a>
        </Card.Footer>
      )}
    </Card>
  );
}

export default ProjectCard;

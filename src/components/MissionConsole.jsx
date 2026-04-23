import { useMemo, useState } from 'react';
import { Card, Form, Row, Col, Badge } from 'react-bootstrap';

function MissionConsole({ projects }) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const [selectedId, setSelectedId] = useState(projects[0]?.id ?? null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesStatus = status === 'All' || project.status === status;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q.length === 0 ||
        project.name.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tech.some((tech) => tech.toLowerCase().includes(q));

      return matchesStatus && matchesQuery;
    });
  }, [projects, query, status]);

  const selectedProject =
    filteredProjects.find((project) => project.id === selectedId) ?? filteredProjects[0] ?? null;

  return (
    <Card className="mission-console mt-4">
      <Card.Body>
        <h3 className="page-heading mb-3">Interactive Mission Console</h3>
        <p className="page-sub">
          Live filtering by status and keyword search demonstrates working interactivity.
        </p>

        <Row className="g-3 mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Search missions</Form.Label>
              <Form.Control
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by name, tech, or description"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Status filter</Form.Label>
              <Form.Select value={status} onChange={(event) => setStatus(event.target.value)}>
                <option>All</option>
                <option>In Progress</option>
                <option>Complete</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="g-3">
          <Col md={5}>
            <div className="mission-list">
              {filteredProjects.length === 0 ? (
                <p className="mb-0">No missions match your filters.</p>
              ) : (
                filteredProjects.map((project) => (
                  <button
                    type="button"
                    key={project.id}
                    className={`mission-item ${selectedProject?.id === project.id ? 'active' : ''}`}
                    onClick={() => setSelectedId(project.id)}
                  >
                    <span>{project.name}</span>
                    <Badge bg={project.status === 'Complete' ? 'success' : 'warning'}>
                      {project.status}
                    </Badge>
                  </button>
                ))
              )}
            </div>
          </Col>
          <Col md={7}>
            {selectedProject ? (
              <Card className="project-detail-card">
                <Card.Body>
                  <h4>{selectedProject.name}</h4>
                  <p>{selectedProject.description}</p>
                  <div>
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} pill bg="dark" className="me-1 mb-1 tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            ) : (
              <p className="mb-0">Select a mission to see more details.</p>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default MissionConsole;

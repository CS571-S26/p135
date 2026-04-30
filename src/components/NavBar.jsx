import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <Navbar variant="dark" expand="md" fixed="top" className="nav-bar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <span className="brand-icon">✦</span> STARSHIP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link-wrap ${location.pathname === '/' ? 'active' : ''}`}
            >
              Bridge
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={`nav-link-wrap ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Missions
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`nav-link-wrap ${location.pathname === '/about' ? 'active' : ''}`}
            >
              Crew
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

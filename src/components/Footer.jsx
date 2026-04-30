import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="text-center">
        <p className="footer-text">
          ✦ STARSHIP &mdash; Pranav Karthik &copy; {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;

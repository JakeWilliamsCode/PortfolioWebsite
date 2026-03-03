import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function NavigationBar() {
  const publicPathPdf = 'ResumeFa25JakeWFront-1.pdf'; 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Jake Williams</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="justify-content-end">
<<<<<<< HEAD
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/jacob-l-williams/">LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/JakeWilliamsCode">Github</Nav.Link>
            <Nav.Link href={publicPathPdf}>Resume</Nav.Link>
=======
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/Hobbies">Hobbies</Nav.Link>
            <NavDropdown title="More!" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/jacob-l-williams/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/JakeWilliamsCode">Github</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/PDFResume">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Contact">
                Contact Me!
              </NavDropdown.Item>
            </NavDropdown>
>>>>>>> 6d58c8f1cf268009a6cabdd9073395da39f95c20
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'


function NavigationBar() {
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  href="#home">Jake Williams</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Projects">Projects</Nav.Link>
            <Nav.Link href="Hobbies">Hobbies</Nav.Link>
            <NavDropdown title="More!" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/jacob-l-williams/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Github</NavDropdown.Item>
              <NavDropdown.Item href="PDFResume">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Contact">
                Contact Me!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

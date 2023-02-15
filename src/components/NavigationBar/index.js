import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavigationBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Profile</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
      </Offcanvas>
      
      <Navbar bg="transparent" variant="dark" fixed='top' expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">EIGA WATCH</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown title="Movies" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">All</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Popular</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Upcoming</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Top Rated</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#login">Login</Nav.Link>
            </Nav>
            <Navbar.Text>
              Signed in as: <a href="#login" onClick={handleShow}>Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
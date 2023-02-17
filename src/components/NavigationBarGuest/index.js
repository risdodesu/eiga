import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavigationBarGuest = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

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
      
      <Navbar variant='dark' fixed='top' expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">EIGA WATCH</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Movies" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/login">Popular</NavDropdown.Item>
                <NavDropdown.Item href="/login">Upcoming</NavDropdown.Item>
                <NavDropdown.Item href="/login">Top Rated</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBarGuest;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const NavigationBar = () => {
const [username, setUsername] = useState("")

useEffect(()=> {
  const sessionID = localStorage.getItem("SID")
  if (sessionID) {
    axios({
      method: "get",
      url:`https://api.themoviedb.org/3/account?api_key=${API_KEY}&session_id=${sessionID}`
    }).then(function (response){
      setUsername(response.data.username)
    })
    .catch(function(error){
      alert(error.message)
    })
  }
},[])

const handleLogout = () => {
  window.localStorage.removeItem("SID")
  window.alert("Log out succeed!")
}

  return (
    <>      
      <Navbar variant='dark' fixed='top' expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">EIGA WATCH</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/homepage">Home</Nav.Link>
              <NavDropdown title="Movies" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/popular">Popular</NavDropdown.Item>
                <NavDropdown.Item href="/upcoming">Upcoming</NavDropdown.Item>
                <NavDropdown.Item href="/top-rated">Top Rated</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={handleLogout} href='/'>Logout</Nav.Link>
            </Nav>
            <Navbar.Text>
              Signed in as:  <a href="#profile" >{username}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import pic from '../12.png'

function Header() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container className="justify-content-center">
    <Navbar.Brand href="#home">
            <img
              src={pic}             
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="justify-content-center">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Services</Nav.Link>
          <Nav.Link href="#home">Portfolio</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
              </Nav>
              
          
      </Navbar.Collapse>
      <Col xs="auto">
            <Button type="submit"> 📞 9915841204</Button>
          </Col>
    </Container>
  </Navbar>


  );
}

export default Header;
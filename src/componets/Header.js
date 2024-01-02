import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import pic from '../componets/images/IAW-black-logo.png';


function Header() {
  return (
    
    <Navbar expand="xl">
    <Container className="">
    <Navbar.Brand href="#home">
            <img
              src={pic}             
              width="110px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
        <Nav className="justify-content-center">
  



         <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/About">About Us</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
              </Nav>
              
          
      </Navbar.Collapse>
             <Button type="submit" size="lg">  📞 9915841204</Button>
    </Container>
  </Navbar>


  );
}

export default Header;
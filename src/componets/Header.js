import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import pic from '../componets/images/IAW-black-logo.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col } from 'react-bootstrap';


function Header() {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} >
          <Container className="justify-content-center" >
            <Navbar.Brand href="*"> <img
              src={pic}             
              width="30%"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center"></Navbar.Collapse>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/About">About Us</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
                <Col xl>
                <Button type="submit" size="lg">  📞 9915841204</Button></Col>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

  // return (
    
  //   <Navbar expand="xl">
  //   <Container fluid>
  //   <Navbar.Brand href="#home">
  //           <img
  //             src={pic}             
  //             width="110px"
  //             className="d-inline-block align-top"
  //             alt="React Bootstrap logo"
  //           />
  //         </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //     <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
  //       <Nav className="justify-content-center">
  



  //        <Nav.Link href="/">Home</Nav.Link>
  //         <Nav.Link href="/services">Services</Nav.Link>
  //         <Nav.Link href="/portfolio">Portfolio</Nav.Link>
  //         <Nav.Link href="/About">About Us</Nav.Link>
  //         <Nav.Link href="#link">Contact Us</Nav.Link>
  //             </Nav>
              
          
  //     </Navbar.Collapse>
  //     <Col xl="auto">
  //            
  //         </Col>
  //   </Container>
  // </Navbar>


  // );

export default Header;
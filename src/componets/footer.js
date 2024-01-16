import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lst from './images/f.png'
import photo from './images/IAW-black-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter , faFacebook , faInstagram , faLinkedinIn ,faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function footer() {
  return (
    

    <div className='foot'>
      <div className='boring'>
    < img src={lst} alt='fsf'></img>
  </div>
  

       <Navbar className='footer'>
    <Container >
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                <Nav >

                   <Nav.Link href="*">About Us</Nav.Link>
                   <Nav.Link href="*">Blog</Nav.Link>
                   <Nav.Link href="*">Privacy </Nav.Link>
                   <Nav.Link href="*">Terms & Condition</Nav.Link>
                   <Nav.Link href="*">Contact Us</Nav.Link>
                   <Nav.Link href="*">Career</Nav.Link>

              </Nav>
              
          
      </Navbar.Collapse>
    </Container>
  </ Navbar> 

  <Container>
      <Row>
        <Col md-2>
            <h1> About us</h1>
            <p className='go'>IosAndWeb Technologies believes in achieving goals and client satisfaction. We deliver inspiring & eye-catching websites and conduct profitable marketing campaigns that attract the audience and boost the client’s business. We provide Support & Maintenance even after the completion of the project.</p>
        
        
        
        </Col>
        <Col className='dabba'>
          < img src={photo} alt="fvsdff"/>
        </Col>
        <Col xs  className='aws'>
          <FontAwesomeIcon icon={faFacebook} size='2x' />
          <FontAwesomeIcon icon={faTwitter} size='2x'/> 
          <FontAwesomeIcon icon={faInstagram} size='2x'/>
          <FontAwesomeIcon icon={faLinkedinIn} size='2x' />
          <FontAwesomeIcon icon={faWhatsapp} size='2x' />

           <p> If you would like to connect with us, do not hesitate, We’d love for you to get in touch! See you there.

Let’s connect: 01762-515680  +91-99158-41204
           </p>
        
        
        
        </Col>
      </Row>

  </Container>
  <p className='last'>© 2023 All Rights Reserved | IosAndWeb Technologies. Design by jatin sehgal</p>




    </div>
  )
}

export default footer

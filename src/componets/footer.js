import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'




function footer() {
  return (
    <div className='foot'>

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
        <Col>
            <h1> About us</h1>
            <p>IosAndWeb Technologies believes in achieving goals and client satisfaction. We deliver inspiring & eye-catching websites and conduct profitable marketing campaigns that attract the audience and boost the client’s business. We provide Support & Maintenance even after the completion of the project.</p>
        
        
        
        </Col>
        <Col>
           <p>
            
Facebook-square
Twitter
Instagram
Linkedin
Whatsapp
If you would like to connect with us, do not hesitate,

We’d love for you to get in touch! See you there.

Let’s connect: 01762-515680  +91-99158-41204
           </p>
        
        
        
        </Col>
      </Row>

  </Container>




    </div>
  )
}

export default footer

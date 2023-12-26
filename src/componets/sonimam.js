import React from 'react';
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import photo from './images/com.png';
import jatin from './images//Blockchain.png';
import sehgal from './images/ai.png';
import jj from './images/1-min.png';
import js from './images/3-min.png';
import sj from './images/4-min.png';
import jsj from './images/logo192.png';
function  Sonimam() {
  return (
    <>
    <Carousel pause="hoverfalse">
      <Carousel.Item interval={1000}>
      <img
              src={photo}                 
              alt='slider pic'

            />
        <Carousel.Caption>
          <h3 className="joker">Custom Software Development Company</h3>
          <p>We offer complete business software development solutions. 
We combine this culture of innovation with our capabilities and industry 
expertise to go beyond the other traditional technology..</p>
<Button variant="primary" className='lets'><b>LET'S GET STARTED</b></Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
              src={jatin}            
              alt='slider pic'

            />
        <Carousel.Caption>
          <h3 className="joker">Blockchain Smart Contract 
Development
</h3>
          <p>Our golden experience and the backing of a team of experts in the field
 of blockchain have allowed us to mark a voice for us even in a competitive 
media landscape in the area. .</p>
<Button variant="primary" className='lets'><b>LET'S GET STARTED</b></Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
              src={sehgal}        
              alt='slider pic'

            />
        <Carousel.Caption>
          <h3 className="joker" >AI Transformed 
Digital Marketing Services </h3>
          <p>
          An Award Winning Company - With our focus and dedication, and 
communication, we became an award-winning organization.
          </p>
          <Button variant="primary" className='lets'><b>LET'S GET STARTED</b></Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
  <Container>
      <Row md={4}>
        <Col> <Image src={jsj} alt='fijd'/><p className='text'>LIVE SUPPORT</p></Col>
        <Col xs={6}><img src={sj}  alt='is i right' /><p className='text'>CLIENT SATISFACTION</p></Col>
        <Col><Image src={js} alt='insthis' /><p className='text'>IMMENSE VALUE</p></Col>
        <Col><Image src={jj}  alt='this 1sf'/><p className='text'>CERTIFIED TEAM</p></Col>
      </Row>
    </Container>

   <section>
    <h1 align="center">Approach With a Purpose</h1>
    <p par>Our result’s driven and one of a kind Web development, Web-Graphic  Designing and CRM software development, Digital marketing  solutions are just as unique as your business and its needs. We work on your vision like it’s our own. We as a company have achieved such invaluable insights and shared such precious experiences in this passage of time. With digital marketing and Web development solutions being the core of this organization and a mutual passion for all of us, we have always worked to give our clients nothing but the best. In our quest for outstanding work and more importantly,  work ‘ethics’, we’ve made and maintained some flawless long term professional relations with our clients and we’re proud of that.essional relations with our clients and we’re proud of that.</p>
   </section>

  </>
  );
}
export default Sonimam;
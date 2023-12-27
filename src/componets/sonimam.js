import React from 'react';
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
// import OwlCarousel from 'react-owl-carousel';
import photo from './images/com.png';
import jatin from './images//Blockchain.png';
import sehgal from './images/ai.png';
import jj from './images/1-min.png';
import js from './images/3-min.png';
import sj from './images/4-min.png';
import jsj from './images/logo192.png';
import web from './images/nn.jpg';
import rr from './images/rr.jpg';
import Header from './Header';
// import html from './images/html.png';
// import css from './images/css.png';
// import php from './images/php.png';
// import react from './images/react.png';
// import seo from './images/seo.png';
function Sonimam() {
  return (
    <>
    <Header/>
      <Carousel pause="hoverfalse">
        <Carousel.Item interval={1000}>
          <img
            src={photo}
            alt='slider pic'

          />
          <Carousel.Caption>
            <h3 className="joker">Custom Software Development Company</h3>
            <p className='hehe'>We offer complete business software development solutions.
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
            <p className='hehe'>Our golden experience and the backing of a team of experts in the field
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
            <p className='hehe'>
              An Award Winning Company - With our focus and dedication, and
              communication, we became an award-winning organization.
            </p>
            <Button variant="primary" className='lets'><b>LET'S GET STARTED</b></Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container md>
        <Row md={4}>
          <Col> <Image src={jsj} alt='fijd' /><p className='text'>LIVE SUPPORT</p></Col>
          <Col xs={6}><img src={sj} alt='is i right' /><p className='text'>CLIENT SATISFACTION</p></Col>
          <Col><Image src={js} alt='insthis' /><p className='text'>IMMENSE VALUE</p></Col>
          <Col><Image src={jj} alt='this 1sf' /><p className='text'>CERTIFIED TEAM</p></Col>
        </Row>
      </Container>

      <section>
        <h1 className='ho'>Approach With a Purpose</h1>
        <p className='par'>We are a dynamic team of creatives people of design, marketing, web & apps development.IosAndWeb Technologies believes in achieving goals and client satisfaction. We deliver inspiring & eye-catching websites and conduct profitable marketing campaigns that attract the audience and boost the client’s business. We provide Support & Maintenance even after the completion of the project..</p>
      </section>
      <div className="text-center">
        <Button variant="primary" size="lg">
          Claim Your Free 20-Minutes Strategy Session
        </Button>
      </div>
      <section>
        <h1 className='ho'>IosAndWeb Technologies</h1>
        <p className='par'>Our result’s driven and one of a kind Web development, Web-Graphic  Designing and CRM software development, Digital marketing  solutions are just as unique as your business and its needs. We work on your vision like it’s our own. We as a company have achieved such invaluable insights and shared such precious experiences in this passage of time. With digital marketing and Web development solutions being the core of this organization and a mutual passion for all of us, we have always worked to give our clients nothing but the best. In our quest for outstanding work and more importantly,  work ‘ethics’, we’ve made and maintained some flawless long term professional relations with our clients and we’re proud of that.essional relations with our clients and we’re proud of that.</p>
      </section>
      <Container md>
        <Row md>

          <Col xs className='ooo'> <h5>Develop</h5> <p>
            With our versatile  development services, give your business an edge in a highly dynamic and competitive commercial landscape. Our unbiased services provide high quality web development services to enterprises across scales, equally, in most the customised fashion witnessed.</p></Col>
          <Col xs className='ooo'><h5>Design</h5><p>Nobody understands the significance of aesthetics in consumer acquisition  and ultimately conversion better than us which is why we let our proficient graphics /web designing services speaks. We cater bespoke designs and aesthetics for your varying needs fit for your  or clients’s taste.</p></Col>
          <Col xs className='ooo'><h5>Advertise</h5><p>We assist you in leveraging your business through our unbeatable digital marketing strategies which  amplify your business to rise across scales. The perfect partner for your marketing goals, we build the most creative digital marketing campaigns by the strongest set of algorithms.</p></Col>
        </Row>
      </Container>
      <Container md className='hhh'>
        <Row md>
          
          <Col md><h1 className='g'>Web/Mobile Development</h1>
Our approach is designed to provide you with a systematic and organized process. It’s professional but easy to use; it’s supportive and adaptable. From the inception of the method to the abstraction of site design, our goal is always to have your back. The systematic and planned way ensures you’ll notice we’re adaptable and easy to work with. To put it another way, this gives us the ability to create a website prototype that is unique, noteworthy, and aesthetically pleasing. It represents the success of the site’s online existence in this way.UI/UX DESIGN – The user experience (UX) is the driving force behind the user interface (UI). Our team of UX designers at IosAndWeb Technologies has extensive knowledge in the main areas of user experience, which enables them to create the more OK modules of usability and functionality in-line with business objectives and end-user needs.

          </Col>

          <Col xs><Image className='iii' src={web} alt='web dev' /></Col>
        </Row>
      </Container>
      <Container md className='hhh'>
        <Row md> 
          

          <Col md><h1 className='g'>Digital Marketing </h1>Digital marketing is undergoing a seismic change. There has been a sea change in how people engage with businesses and locate and investigate goods and services. IosAndWeb Technologies is one of India’s best options in terms of digital marketing. We assist our clients in locating their target audience; gauge the level of interest in their products and services, and a host of other things. We follow all the latest marketing tactics. We have a team of digital marketing experts who can help you raise your company’s visibility and generate leads.Advanced SEO Strategy – Thousands of people conduct searches every second. With our SEO services, you may elevate your website to the first page of search engine results for your desired market segment. Consequently, when the search is carried out, your prospects will be the first to come across your name in the results.


          </Col>

          <Col xs><Image className='iii' src={rr} alt='web dev' /></Col>
        </Row>
      </Container>

      <h1 className='jn'> We're Familiar With </h1>
      {/* <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div class='item'>
        Image src={html} 
    </div>
    <div class='item'>
    Image src={css} 
    </div>
    <div class='item'>
        Image src={php} 
    </div>
    <div class='item'>
    Image src={react} 
    </div>
    <div class='item'>
    Image src={react} 
    </div>
    <div class='item'>
    Image src={seo} 
    </div>

    </OwlCarousel> */}
             

    </>
  );
}
export default Sonimam;
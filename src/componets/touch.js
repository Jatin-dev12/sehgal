
// contact form
import React from 'react'
import cf from './images/cf.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Touch() {
     return (
       <Row>
           <Col xs> <img className='cff' src={cf} alt='df' ></img></Col>

        
              <Col xs className='form'> 
                <Form className='cf'>
                 <Row className='d'>
                        <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" />

                        <Form.Label>Number</Form.Label>
                        <Form.Control type="number" />
              <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
          </Form.Group>
            <Form.Group className="mb-3" controlId="ControlTextarea1">
              <Form.Label>Massage</Form.Label>
              <Form.Control as="textarea" rows={3} />
              </Form.Group>
              </Row>
              <Button type="submit">Submit form</Button>
              </Form>
              </Col>
              </Row>
           
  );
}
export default Touch ;

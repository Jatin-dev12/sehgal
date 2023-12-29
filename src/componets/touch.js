
// contact form
import React from 'react'
import cf from './images/cf.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Touch() {
  return (
    <div>
       <Row>
           <Col xs> <img className='cff' src={cf} alt='df' ></img></Col>

        
              <Col xs> 
                <Form className='cf'>
                 <Row className='d'>
                    <Col className='ccc'>
                    <Form.Label>First Name</Form.Label>
                       <Form.Control type='text'/>
                   </Col>
                        <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control />
                       </Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Number</Form.Label>
                        <Form.Control type="number" />
              <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
          </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Massage</Form.Label>
              <Form.Control as="textarea" rows={3} />
              </Form.Group>
              </Row>
              <Button type="submit">Submit form</Button>
              </Form>
              </Col>
              </Row>
    </div>
  )
}
export default Touch ;

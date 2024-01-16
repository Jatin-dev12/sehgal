// contact form
import React, {useState} from 'react'
import cf from './images/cf.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Row from 'react-bootstrap/Row';


function Touch() {
  
    
     const [data, setData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     const [newName, setNewName] = useState('');
     const [newEmail, setNewEmail] = useState('');
     const [newGender, setNewGender] = useState('');
     const [newStatus, setNewStatus] = useState('');
     const [token, setToken] = useState('d8181c3818c8a19a0d2f6a21a31aaa56fbdaf4812efd5fcbcec41a2b93bbe150');


    

     // ...
     
     const handleSubmit = async (event) => {
       event.preventDefault();
     
       const formDataObject = {
        name: newName,
        email: newEmail,
        gender: newGender,
        status: newStatus,
      };
      
      try {
        const response = await axios.post('https://gorest.co.in/public/v2/users', formDataObject, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      
        if (response.status === 200 || response.status === 201) {
          // Handle successful submission, e.g., show a success message
          alert('Your message has been sent successfully!');
        } else {
          // Handle error response from the API
          alert('An error occurred while sending your message. Please try again later.');
        }
      } catch (error) {
        // Handle network errors
        console.error('Error posting data: ', error);
        alert('An error occurred while sending your message. Please try again later.');
      }  
     };

    return (
       <Row>
           <Col xs> <img className='cff' src={cf} alt='df' ></img></Col>
           
           <Col xs className="form">
    <Form className="cf" onSubmit={handleSubmit}>
      <Row className="d">
        <Form.Group className="mb-3" controlId="ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={newName}
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />

          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={newEmail}
            onChange={(event) => {
              setNewEmail(event.target.value);
            }}
          />
          <Form.Label>GENDER</Form.Label>
          <Form.Control
            type="text"
            name="gender"
            value={newGender}
            onChange={(event) => {
              setNewGender(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlTextarea1">
          <Form.Label>STATUS</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={newStatus}
            onChange={(event) => {
              setNewStatus(event.target.value);
            }}
          />
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  </Col>
</Row>  
                    
  );
}
export default Touch ;

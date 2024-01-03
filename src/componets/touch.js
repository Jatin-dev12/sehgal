// contact form
import React, {useState} from 'react'
import cf from './images/cf.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


import Row from 'react-bootstrap/Row';


function Touch() {
  
     const[ name,setname ] = useState("");
     const[ number,setnumber ] = useState("");
     const[ email,setemail ] = useState("");
     const[ massage,setmassage] = useState("");

    function saveData()
    {

      let api ="https://gorest.co.in/public/v2/posts"
      let data={name,number,email,massage}
      // console.warn(data) 
    
      fetch ("https://gorest.co.in/public/v2/posts",{
        method:"POST",
        headers:{
          'Accept':'application/json',
          'content-type':'application/json',
         


        },
        body:JSON.stringify(data)
      }).then((resp)=>{
        console.warn("resp",resp);;
      })
    
    }

    return (
       <Row>
           <Col xs> <img className='cff' src={cf} alt='df' ></img></Col>
           
               <Col xs className='form'> 
                <Form className='cf'>
                 <Row className='d'>
                        <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" name='name'
                        value={name}  onChange={(e) => {setname(e.target.value)} } />

                        <Form.Label>Number</Form.Label>
                        <Form.Control type="number" name='number'
                        value={number}   onChange={(e) => {setnumber(e.target.value)} }/>
              <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email'          
          value={email}  onChange={(e) => {setemail(e.target.value)} }/>
          </Form.Group>
            <Form.Group className="mb-3" controlId="ControlTextarea1">
              <Form.Label>Massage</Form.Label>
              <Form.Control as="textarea" rows={3}  type='text' name='massage'
               value={massage}  onChange={(e) => {setmassage(e.target.value)} }/>
              </Form.Group>
              </Row>
              <Button type="submit" onClick={saveData}>Submit form</Button>
              </Form>
              </Col>
              </Row>  
                    
  );
}
export default Touch ;

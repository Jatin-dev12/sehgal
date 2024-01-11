import React, { useState, useEffect, useMemo } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './Api.css'

function Services() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState('d8181c3818c8a19a0d2f6a21a31aaa56fbdaf4812efd5fcbcec41a2b93bbe150');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gorest.co.in/public/v2/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
    
        setData(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('The requested resource could not be found.');
        } else {
          console.error('Error fetching data: ', error);
          setError(error);
        }
        setLoading(true);
      }
    };
    

    fetchData();
  }, []);

  const tableHeaders = useMemo(() => (
    <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>GENDER</th>
        <th>STATUS</th>
      </tr>
    </thead>
  ), []);



  return (
    <div>
      <h1 className='no'>CONTACT FORM DATA</h1>
      <Table striped bordered hover>
        {tableHeaders}
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Services;
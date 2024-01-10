import React, { useState, useEffect, useMemo } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function Services() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newGender, setNewGender] = useState('');
  const [newStatus, setNewStatus] = useState('');
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://gorest.co.in/public/v2/users', {
        name: newName,
        email: newEmail,
        gender: newGender,
        status: newStatus        
      },
    {
        headers: {
          Authorization: `Bearer ${token}`
        }
       } );
      
      setData([...data, response.data]);
      setNewName('');
      setNewEmail('');
      setNewGender('');
      setNewStatus('');
    } catch (error) {
      console.error('Error posting data: ', error);
      setError(error);
    }
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    if (error === 'The requested resource could not be found.') {
      return <p>{error}</p>;
    } else {
      return <p>Error fetching data: {error.message}</p>;
    }
  }

  return (
    <div>
      <h1>API LIST</h1>
      <Table striped bordered hover>
        {tableHeaders}
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={newName} onChange={(event) => setNewName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={newEmail} onChange={(event) => setNewEmail(event.target.value)} />
        </label>
        <label>
          Gender:
          <select value={newGender} onChange={(event) => setNewGender(event.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Status:
          <select value={newStatus} onChange={(event) => setNewStatus(event.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">I  nactive</option>
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Services;
import React, { useEffect,useState, } from 'react';
import axios from 'axios'

function Services() {

  const [ data, setData] = useState([])
useEffect (() => {
  axios.get(' https://gorest.co.in/public/v2/users')
  .then(res => setData(res.data))  
   .then(json=>{
    //   data = [...data].sort((a, b) => a.name.localeCompare(b.name));

    // data.map((d) => console.log("with localeCompare", d.name, d.email, d.gender,d.status));

    // order an array of names

   })
  
.catch(err => console.log(err )) 



},[])


  return (
    <div className='container'>
      <h1>List of API DATA.</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>ID </th>
            <th>Name </th>
            <th>Email </th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user, index)=>  {
              return <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
              

              </tr>
            })
          }
        </tbody>
      </table>
    </div>

  )
}

export default Services ;

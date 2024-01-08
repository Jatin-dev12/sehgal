import React, { useEffect,useState, } from 'react';
import axios from 'axios'

function Services() {

  const [ data, setData] = useState([])
useEffect (() => {
  axios.get(' https://buying.com/getStakeAlldata/key/12345')
  .then(res => setData(res.data))  
   .then(json=>{
    
   })
.catch(err => console.log(err )) 


})

  return (
    <div >
      <h1>List of API DATA.</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th> Wallet Address </th>
            <th>Staking Date</th>
            <th>Staking Expire Date</th>
            <th>Amount</th>
            <th>Claim Date</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {
  
            data.map((user, index)=>  {
              return <tr key={index}>
                <td>{user.id}</td>
                <td>{user.wallet_address}</td>
                <td>{user.staking_date}</td>
                <td>{user.staking_expire}</td>
                <td>{user.staking_amount}</td>
                <td>{user.staking_date}</td>
                <td>{user.highlight_status}</td>
              

              </tr>
            })
          }
        </tbody>
      </table>
    </div>

  )

        }

      

export default Services ;

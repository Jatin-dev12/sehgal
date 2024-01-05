import React, { useEffect,useState, } from 'react';
import axios from 'axios'

  //   data = [...data].sort((a, b) => a.name.localeCompare(b.name));

    // data.map((d) => console.log("with localeCompare", d.name, d.email, d.gender,d.status));

    // order an array of names
function Services() {

  const [ data, setData] = useState([])
  const [sortType, setSortType] = useState('default');
useEffect (() => {
  axios.get(' https://buying.com/getStakeAlldata/key/12345')
  .then(res => setData(res.data))  
   .then(json=>{
    
   })
.catch(err => console.log(err )) 

function index(props) {
  const { index } = props;
  let sorteduser = [...index];
  sorteduser.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const array = ['id', 'Wallet Address', 'Staking Date' ,'status','Claim Date', 'Amount','Staking Expire Date' , 'status'];
array.sort();
console.log(array);
}}

);
function sortData() {
  let sortedData;
  if (sortType === 'descending') {
    sortedData = [...data].sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  } else if (sortType === 'ascending') {
    sortedData = [...data].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  } else {
    return data;
  }
  setData(sortedData);
  const sort = data.sort((a, b) => b.localeCompare(a))
console.log(sort)
}

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

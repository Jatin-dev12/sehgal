import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

function Services() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [sortColumn, setSortColumn] = useState('wallet_address');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://buying.com/getStakeAlldata/key/12345');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const renderClaimStatus = (status) => {
    if (status === '5') {
      return <span className='text-success'>Approved</span>;
    } else if (status === '1') {
      return <span className='text-danger'>Pending</span>;
    } else {
      return <span className='text-danger'>Pending</span>;
    }
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedData = data.sort((a, b) => {
    const columnA = a[sortColumn];
    const columnB = b[sortColumn];

    if (sortOrder === 'asc') {
      if (typeof columnA < typeof columnB) {
        return -1;
      }
      if (typeof columnA > typeof columnB) {
        return 1;
      }
      return String(columnA).localeCompare(String(columnB));
    } else {
      if (typeof columnA < typeof columnB) {
        return 1;
      }
      if (typeof columnA > typeof columnB) {
        return -1;
      }
      return String(columnB).localeCompare(String(columnA));
    }
  });
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm.length > 0) {
      setFilteredData(data.filter((item) => item.wallet_address.toLowerCase().startsWith(searchTerm)));
    } else {
      setFilteredData(data);
    }
  };

  // const handleSearchChange = (event) => {
  //   const searchTerm = event.target.value.toLowerCase();
  //   setSearch(searchTerm);

  //   if (searchTerm === '') {
  //     setFilteredData(sortedData);
  //   } else {
  //     setFilteredData(
  //       sortedData.filter((item) =>
  //         item.wallet_address.toLowerCase(). includes (searchTerm)
  //       )
  //     );
  //   }
  // };

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>LIST</h1>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onInput={handleSearchChange}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search '
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
            
              <th onClick={() => handleSort('id')}>ID</th>
              <th onClick={() => handleSort('wallet_address')}>ADDRESS</th>
              <th onClick={() => handleSort('staking_date')}>DATE</th>
              <th onClick={() => handleSort('staking_expire')}>EXPIRE</th>
              <th onClick={() => handleSort('staking_amount')}>AMOUNT</th>
              <th onClick={() => handleSort('claim_status')}>STATUS</th>
            </tr>
          </thead>
          <tbody>
                      {sortedData
                        .filter((item) => {
                          return search.toLowerCase() === ''
                            ? item
                            : item.wallet_address.toLowerCase().includes(search);
                        })
                        .map((item, index ,  accessor) => (
                          <tr key={index} onClick={() => handleSort( accessor)}>
                            <td>{item.id}</td>
                            <td>{item.wallet_address.substring(0, 6)}...{item.wallet_address.substring(item.wallet_address.length - 4)}</td>
                            <td>{item.staking_date}</td>
                            <td>{item.staking_expire}</td>
                            <td>{item.staking_amount}</td>
                            <td>{renderClaimStatus(item.claim_status)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </Container>
              </div>
            );
          }
          
          export default Services;
          

// This code have sorting but by default
// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import axios from 'axios';

// function Services() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState('');
//   const [filteredData, setFilteredData] = useState(data);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://buying.com/getStakeAlldata/key/12345');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const renderClaimStatus = (status) => {
//     if (status === '5') {
//       return <span className='text-success'>Approved</span>;
//     } else if (status === '1') {
//       return <span className='text-warning'>Pending</span>;
//     } else {
//       return <span className='text-danger'>Pending</span>;
//     }
//   };

//   // Sort the data alphabetically based on the wallet_address column
//   const sortedData = data.sort((a, b) => {
//     if (a.wallet_address < b.wallet_address) {
//       return -1;
//     } else if (a.wallet_address > b.wallet_address) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   const handleSearchChange = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     setSearch(searchTerm);
   
//     if (searchTerm === '') {
//        setFilteredData(data);
//     } else {
//        setFilteredData(
//          data.filter((item) =>
//            item.wallet_address.toLowerCase().startsWith(searchTerm)
//          )
//        );
//     }
//    };
//   return (
//     <div>
//       <Container>
//         <h1 className='text-center mt-4'>LIST</h1>
//         <Form>
//           <InputGroup className='my-3'>
//             <Form.Control
//              onInput={handleSearchChange}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder='Search '
//             />
//           </InputGroup>
//         </Form>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>ADDRESS</th>
//               <th>DATE</th>
//               <th>EXPIRE</th>
//               <th>Paisa</th>
//               <th>STATUS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedData
//               .filter((item) => {
//                 return search.toLowerCase() === ''
//                   ? item
//                   : item.wallet_address.toLowerCase().includes(search);
//               })
//               .map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.id}</td>
//                   <td>{item.wallet_address}</td>
//                   <td>{item.staking_date}</td>
//                   <td>{item.staking_expire}</td>
//                   <td>{item.staking_amount}</td>
//                   <td>{renderClaimStatus(item.claim_status)}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </Table>
//       </Container>
//     </div>
//   );
// }

// export default Services;


//THIS LIST IS ALL THINGS BUT  NOT SORTING
// import React, { useEffect, useState } from 'react'
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import axios from 'axios';

// function Services() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://buying.com/getStakeAlldata/key/12345');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, []);
  

//   const renderClaimStatus = (status) => {
//     switch (status) {
//       case '5':
//         return <span className='text-success'>Approved</span>;
//       case '1':
//         return <span className='text-warning'>Pending</span>;
//       default:
//         return <span className='text-danger'>pending</span>;
//     }
//   };

//   return (
//     <div>
//       <Container>
//         <h1 className='text-center mt-4'>LIST</h1>
//         <Form>
//           <InputGroup className='my-3'>
//             <Form.Control
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder='Search '
//             />
//           </InputGroup>
//         </Form>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>ADDRESS</th>
//               <th>DATE</th>
//               <th>EXPIRE</th>
//               <th>Paisa</th>
//               <th>STATUS</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data
//               .filter((item) => {
//                 return search.toLowerCase() === ''
//                   ? item
//                   : item.wallet_address.toLowerCase().includes(search);
//               })  
//               .map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.id}</td>
//                   <td>{item.wallet_address}</td>
//                   <td>{item.staking_date}</td>
//                   <td>{item.staking_expire}</td>
//                   <td>{item.staking_amount}</td>
//                   <td>{renderClaimStatus(item.claim_status)}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </Table>
//       </Container>
//     </div>
//   );
// }

// export default Services;

// THIS LIST IS SIMPLE NOT STUS LIST NORMAT LIST
// import React, { useEffect, useState } from 'react'
// import Table from 'react-bootstrap/Table';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import axios from 'axios';

// function Services() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://buying.com/getStakeAlldata/key/12345');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, []);
  

//   return (
//     <div>
//     <Container>
//       <h1 className='text-center mt-4'>LIST</h1>
//       <Form>
//         <InputGroup className='my-3'>

//           {/* onChange for search */}
//           <Form.Control
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder='Search '
//           />
//         </InputGroup>
//       </Form>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>ADDRESS</th>
//             <th>DATE</th>
//             <th>EXPIRE</th>
//             <th>Paisa</th>
//             <th>STATUS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data
//             .filter((item) => {
//               return search.toLowerCase() === ''
//                 ? item
//                 : item.wallet_address.toLowerCase().includes(search);
//             })  
//             .map((item, index) => (
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 <td>{item.wallet_address}</td>
//                 <td>{item.staking_date}</td>
//                 <td>{item.staking_expire}</td>
//                 <td>{item.staking_amount}</td>
//                 <td>{item.claim_status}</td>
//               </tr>
//             ))}
//         </tbody>
//       </Table>
//     </Container>
//   </div>
//     // <div>
//     //   <h1>Services</h1>
//     //   <ul type="none">
//     //     {services.map(service => (
//     //       <li key={service.id}>
//     //         <ul>
//     //           <li>{service.wallet_address}</li>
//     //           <li>{service.staking_date}</li>
//     //           <li>{service.staking_expire}</li>
//     //           <li>{service.staking_amount}</li> 
//     //           <li>{service.claim_status}</li> 

//     //         </ul>
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>
//   );
// }

// export default Services;
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function Portfolio() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [sortColumn, setSortColumn] = useState('wallet_address');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://buying.com/getStakeAlldata/key/12345');
        setData(response.data);
        setFilteredData(response.data);
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

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm.length > 0) {
      setFilteredData(data.filter((item) => item.wallet_address.toLowerCase().startsWith(searchTerm)));
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div>
      <form>
        <input class
              type='text'
              placeholder='Search by wallet address'
              value={search}
              onChange={handleSearchChange}
            /></form>
         <Table striped bordered hover>
      <thead>
        <tr> 
        
              <th onClick={() => setSortColumn('id')}>ID</th>
              <th onClick={() => setSortColumn('wallet_address')}>ADDRESS</th>
              <th onClick={() => setSortColumn('staking_date')}>DATE</th>
              <th onClick={() => setSortColumn('staking_expire')}>EXPIRE</th>
              <th onClick={() => setSortColumn('staking_amount')}>AMOUNT</th>
              <th onClick={() => setSortColumn('claim_status')}>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
             <td>{item.id}</td>
            <td>{item.wallet_address}</td>
            <td>{item.staking_date}</td>
            <td>{item.staking_expire}</td>
            <td>{item.staking_amount}</td> 
            <td>{renderClaimStatus(item.claim_status)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
 
  );
}

export default Portfolio;
// import { useEffect, useState } from 'react'
// import axios from 'axios';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { FilterMatchMode } from 'primereact/api';
// import { AutoComplete } from 'primereact/autocomplete';
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// // Write Down in Diary For API intigration POSTMAN site is best it will help us to 
// // to see api lits and data get and post methods at the same time

// function Portfolio() {
  
//  const [data, setData] = useState([]);
//  const [searchValue, ] = useState(null);
//  const [suggestions, setSuggestions] = useState([]);
//  const [address, setAddress] = useState([]);
//  const [selecteaddress, setSelectedAddress] = useState(null);
//  const [filteredaddress, setFilteredAddress] = useState(null);

//  const fetchInfo = () => {
//     return axios.get('https://buying.com/getStakeAlldata/key/12345')
    
//       .then((res) => setData(res.data))
      
//  };
//  const [filters, ] = useState({
//     global: { value: null, matchmode: FilterMatchMode.CONTAINS },
//  })
//  useEffect(() => {
//     fetchInfo();
//  }, [])

//  const renderStatus = (rowData) => {

//     return rowData.claim_status === "5" ? <span className='p-text-success'>Approved</span> 
//     : <span className='p-text-warning'>Pending</span>;
//  };

//  const onSearch = (event) => {
//     setTimeout(() => {
//         let results = data.filter((row) => row.wallet_address.toLowerCase().startsWith(event.query.toLowerCase()));
//         setSuggestions(results) ;
         
//       // Timeout to emulate a network connection
//       setTimeout(() => {

         
//           let _filteredaddress;

//           if (!event.query.trim().length) {
//               _filteredaddress = [...address];
//           }
//           else {                      
//               _filteredaddress = address.filter((address) => {
//                   return address.name.toLowerCase().startsWith(event.query.toLowerCase());
//               });
//           }

//           setFilteredAddress(_filteredaddress);
//       }, 250);
      
  
        
//     }, );  
// }

// return (
    
    
//  <div>
    
//           <AutoComplete value={searchValue} suggestions={suggestions} multiple={true}
//            completeMethod={onSearch} field='wallet_address'   />

//       <DataTable value={data}  sortMode='multiple' filters={filters} tableStyle={{ minWidth: '50rem' }}>
//         <Column field='id' header='ID' sortable />
//         <Column field='wallet_address' header='WALLET ADDRESS' sortable />
//         <Column field='staking_date' header='STAKING DATE' sortable />
//         <Column field='staking_expire' header='STAKING EXPIRE' sortable />
//         <Column field='staking_amount' header='STAKING AMOUNT' sortable />
//         <Column field='claim_status' header='STATUS' body={renderStatus} sortable />
//       </DataTable>
      
//     </div>

//  )
  
// };
// export default Portfolio;



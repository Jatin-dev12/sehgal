import React, { useEffect, useState, useCallback } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { FaSort, FaSortUp , FaSortDown } from 'react-icons/fa';
import './Api.css'

function About () {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [sortColumn, setSortColumn] = useState('wallet_address');
  const [sortDirection, setSortDirection] = useState('asc');


  const handleSearchChange = useCallback((e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm.length > 0) {
      setFilteredData(data.filter((item) => item.wallet_address.toLowerCase().startsWith(searchTerm)));
    } else {
      setFilteredData(data);
    }
  }, [data]);

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
    } else {
      return <span className='text-danger'>Pending</span>;
    }
  };

  const sortData = (column) => {
    const direction = column === sortColumn && sortDirection === 'asc' ? 'desc' : 'asc';
    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setSortColumn(column);
    setSortDirection(direction);
    setFilteredData(sortedData);
  };

  const getSortIcon = (column) => {
    if (column === sortColumn) {
      return sortDirection === 'asc' ? <FaSortUp /> : <FaSortDown />;
    } else {
      return <FaSort />;
    }
  };

  return (
    <div>
      <input className='api'
        type='text'
        placeholder=' Search wallet address '
        value={search}
        onChange={handleSearchChange}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => sortData('id')}>ID {getSortIcon('id')}</th>
            <th onClick={() => sortData('wallet_address')}>ADDRESS {getSortIcon('wallet_address')}</th>
            <th onClick={() => sortData('staking_date')}>DATE {getSortIcon('staking_date')}</th>
            <th onClick={() => sortData('staking_expire')}>EXPIRE {getSortIcon('staking_expire')}</th>
            <th onClick={() => sortData('staking_amount')}>AMOUNT {getSortIcon('staking_amount')}</th>
            <th onClick={() => sortData('claim_status')}>STATUS {getSortIcon('claim_status')}</th>
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
export default About;
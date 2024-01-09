import { useEffect, useState } from 'react'
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { AutoComplete } from 'primereact/autocomplete';
import "primereact/resources/themes/lara-light-cyan/theme.css";
// Write Down in Diary For API intigration POSTMAN site is best it will help us to 
// to see api lits and data get and post methods at the same time

function Portfolio() {
  
 const [data, setData] = useState([]);
 const [searchValue, ] = useState(null);
 const [suggestions, setSuggestions] = useState([]);
 const [address, setAddress] = useState([]);
 const [selecteaddress, setSelectedAddress] = useState(null);
 const [filteredaddress, setFilteredAddress] = useState(null);

 const fetchInfo = () => {
    return axios.get('https://buying.com/getStakeAlldata/key/12345')
    
      .then((res) => setData(res.data))
      
 };
 const [filters, ] = useState({
    global: { value: null, matchmode: FilterMatchMode.CONTAINS },
 })
 useEffect(() => {
    fetchInfo();
 }, [])

 const renderStatus = (rowData) => {

    return rowData.claim_status === "5" ? <span className='p-text-success'>Approved</span> 
    : <span className='p-text-warning'>Pending</span>;
 };

 const onSearch = (event) => {
    setTimeout(() => {
        let results = data.filter((row) => row.wallet_address.toLowerCase().startsWith(event.query.toLowerCase()));
        setSuggestions(results) ;
         
      // Timeout to emulate a network connection
      setTimeout(() => {

         
          let _filteredaddress;

          if (!event.query.trim().length) {
              _filteredaddress = [...address];
          }
          else {                      
              _filteredaddress = address.filter((address) => {
                  return address.name.toLowerCase().startsWith(event.query.toLowerCase());
              });
          }

          setFilteredAddress(_filteredaddress);
      }, 250);
      
  
        
    }, );  
}

return (
    
    
 <div>
    
          <AutoComplete value={searchValue} suggestions={suggestions} multiple={true}
           completeMethod={onSearch} field='wallet_address'   />

      <DataTable value={data}  sortMode='multiple' filters={filters} tableStyle={{ minWidth: '50rem' }}>
        <Column field='id' header='ID' sortable />
        <Column field='wallet_address' header='WALLET ADDRESS' sortable />
        <Column field='staking_date' header='STAKING DATE' sortable />
        <Column field='staking_expire' header='STAKING EXPIRE' sortable />
        <Column field='staking_amount' header='STAKING AMOUNT' sortable />
        <Column field='claim_status' header='STATUS' body={renderStatus} sortable />
      </DataTable>
      
    </div>

 )
  
};
export default Portfolio;



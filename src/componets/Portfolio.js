import { useEffect, useState } from 'react'
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
// import { AutoComplete } from 'primereact/autocomplete';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function Portfolio() {
  
 const [data, setData] = useState([]);

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
  console.log('Claim Status:', rowData.claim_status);
  return rowData.claim_status === "5" ? <span className='p-text-success'>Approved</span> 
  : <span className='p-text-warning'>Pending</span>;
};


return (
    
    
<div>
  
          
         <DataTable value={data} sortMode='multiple' filters={filters} tableStyle={{ minWidth: '50rem' }}>
        <Column field='id' header='ID' sortable />
        <Column field='wallet_address' header='WALLET ADDRESS' sortable />
        <Column field='staking_date' header='STAKING DATE' sortable />
        <Column field='staking_expire' header='STAKING EXPIRE' sortable />
        <Column field='staking_amount' header='STAKING AMOUNT' sortable />
        <Column body={renderStatus} header='STATUS' sortable />
      </DataTable>
      
    </div>

 )
  
};
export default Portfolio;


















// import { useEffect, useState } from 'react'
// import axios from 'axios';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { FilterMatchMode } from 'primereact/api';
//  import "primereact/resources/themes/lara-light-cyan/theme.css";
// // import { AutoComplete } from 'primereact/autocomplete';
// // I Wanna do in status row if value comes 5 then its aaprove .
// // other wise it will be show pendings.s

// function Portfolio() {
  
//   const [data, setData] = useState([]);


//   const fetchInfo = () => {
//     return axios.get('https://buying.com/getStakeAlldata/key/12345')
    
//       .then((res) => setData(res.data))
      
//   };
//   const [filters, ] = useState({
//     global: { value: null, matchmode: FilterMatchMode.CONTAINS },
//   })
//   useEffect(() => {
//     fetchInfo();
//   }, [])
 
//   return (
    
    
// <div>
  
          
//          <input type='text' placeholder='Search..'/>

//       <DataTable value={data} sortMode='multiple' filters={filters} tableStyle={{ minWidth: '50rem' }}>
//         <Column field='id' header='ID' sortable />
//         <Column field='wallet_address' header='WALLET ADDRESS' sortable />
//         <Column field='staking_date' header='STAKING DATE' sortable />
//         <Column field='staking_expire' header='STAKING EXPIRE' sortable />
//         <Column field='staking_amount' header='STAKING AMOUNT' sortable />
//         <Column field='claim_status' header='STATUS'sortable />
//       </DataTable>
      
//     </div>

//   )
  
// };
// export default Portfolio;

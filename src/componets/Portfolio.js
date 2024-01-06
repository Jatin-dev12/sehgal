import { useEffect, useState } from 'react'
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

// I Wanna do in status row if value comes 5 then its aaprove .
// other wise it will be show pendings.s

function Portfolio() {
  const [searchTerm,setSearchTerm]=  useState("")
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
  return (
    <div>

      {/* <InputText
        onInput={(e) =>
          setFilters({
            global: { value: e.target.value, matchmode: FilterMatchMode.CONTAINS }
          })} /> */}
          
      <input type="text"
      placeholder="Search.." 
      onChange={event =>{
      setSearchTerm(event.target.value)}} />      


      <DataTable value={data} sortMode='multiple' filters={filters} tableStyle={{ minWidth: '50rem' }}>
        <Column field='id' header='ID' sortable />
        <Column field='wallet_address' header='WALLET ADDRESS' sortable />
        <Column field='staking_date' header='STAKING DATE' sortable />
        <Column field='staking_expire' header='STAKING EXPIRE' sortable />
        <Column field='staking_amount' header='STAKING AMOUNT' sortable />
        <Column field='highlight_status' header='STATUS' sortable />
      </DataTable>
    </div>
  )

};
export default Portfolio;




import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://buying.com/getStakeAlldata/key/12345');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Services</h1>
      <ul type="none">
        {services.map(service => (
          <li key={service.id}>
            <ul>
              <li>{service.wallet_address}</li>
              <li>{service.staking_date}</li>
              <li>{service.staking_expire}</li>
              <li>{service.staking_amount}</li> 
              <li>{service.claim_status}</li> 

            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
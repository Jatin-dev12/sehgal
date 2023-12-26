import React from "react";
import Spinner from 'react-bootstrap/Spinner';

function services() {
  return (

    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default services;
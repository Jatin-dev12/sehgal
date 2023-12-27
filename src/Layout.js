import React from "react";
import { Outlet, } from "react-router-dom";


const Layout = () => {
  return (
    <>
         {/* <nav>
        <ul>
          <li>
            <Link to="/sonimam">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/ about us">About Us</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Layout;
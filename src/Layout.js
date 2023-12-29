import React from "react";
import { Outlet, } from "react-router-dom";
import Header from "./componets/Header";
import Footer from "./componets/footer";
import Touch from "./componets/touch";


const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Touch/>
      <Footer/>
    </>
  )
};

export default Layout;
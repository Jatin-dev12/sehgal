import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Services from './componets/services'
import Home from './componets/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Portfolio from './componets/Portfolio'
import About from './componets/About '
import Layout from './Layout';

function App() {
  return (
    

    <BrowserRouter >

      <Routes>

        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="services" element={<Services />} />
          <Route path="Portfolio" element={<Portfolio/>} />
          <Route path="About" element={<About />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;

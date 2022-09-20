import React from 'react';
import Service from './components/Service';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { BrowserRouter,Routes, Route } from 'react-router-dom';

export const App = () => {
  return (

    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>


    </Routes>

    </BrowserRouter></>
        
  )
}

export default App;

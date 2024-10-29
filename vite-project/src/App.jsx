import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




import Home from './Home';

import Nav from './Nav';
import Shoes from './Shoes'
import About from './About'
import Men from './Men';

import Signin from './Signin'
import Navigation from './Navigation';




function App() {
  return (
    
    <Router>
       <Navigation/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/men" element={<Men/>} />

      </Routes>
    </Router>
    
  );
}

export default App;


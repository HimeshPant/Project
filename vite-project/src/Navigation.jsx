import React from 'react'

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nav">Nav</Link></li>
        <li><Link to="/about">About</Link></li>

        
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/shoes">Shoes</Link></li>
        <li><Link to="/men">Men</Link></li>




      </ul>
    </nav>
  );
}

export default Navigation;


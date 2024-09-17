import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Navbar.css'; 
import logo from './fercss.png';

const Navbar = () => {
  return (
    <footer className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
       
      <h1>F-E-R Customer Satisfaction System</h1>
      <nav>
      <NavLink to="/" className="nav-item" activeClassName="active">Home</NavLink>
        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
        <NavLink to="/register" activeClassName="active-link">Register</NavLink>
        {/* <NavLink to="/historicalData" activeClassName="active-link">Historical Data</NavLink> */}
      </nav>
    </footer>
  );
};

export default Navbar;

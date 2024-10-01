import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="nav-items">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
      <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>Cart</Link>
    </nav>
  );
};

export default Navbar;
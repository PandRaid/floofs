import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navit.css';
import fluff from '../images/fluff.png';
import fluffy from '../images/fluffy.png';

const Navit = () => (
  <nav className="navit">
    <NavLink to="/" >
      
      <img
        src={fluff}
        className="mb-4 mt-4 responsive"
      />
      <img
        src={fluffy}
        className="mb-4 mt-4 responsive-wide"
      />
    </NavLink>
    <NavLink
      exact
      activeClassName="navit__link--active"
      className="navit__link"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link"
      to="/about"
    >
      About
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link"
      to="/available"
    >
      Available
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link"
      to="/queens"
    >
      Queens
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link"
      to="/studs"
    >
      Studs
    </NavLink>
  </nav>
);

export default Navit;

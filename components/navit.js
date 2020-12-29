import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navit.css';
import fluff from '../images/fluff.png';
import fluffy from '../images/fluffy.png';

const Navit = () => (
  <nav className="navit">
    <div className="div1">
    <NavLink to="/">
      <img
        src={fluff}
        className="mb-4 mt-4 responsive"
      />
      <img
        src={fluffy}
        className="mb-4 mt-4 responsive-wide"
      />
    </NavLink>
    </div>

    <div className="div2">
    <NavLink
      exact
      activeClassName="navit__link--active"
      className="navit__link mb-4 mt-4"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link mb-4 mt-4"
      to="/about"
    >
      About
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link mb-4 mt-4"
      to="/available"
    >
      Available
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link mb-4 mt-4"
      to="/queens"
    >
      Queens
    </NavLink>
    <NavLink
      activeClassName="navit__link--active"
      className="navit__link mb-4 mt-4"
      to="/studs"
    >
      Studs
    </NavLink>
    </div>
  </nav>
);

export default Navit;

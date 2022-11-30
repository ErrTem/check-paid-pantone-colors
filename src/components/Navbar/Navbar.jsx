import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import logo from '../../assets/images/logo.png';

function Navbar() {
  const activeLink = ({ isActive }) => (isActive ? s.active : '');
  return (
    <header className={s.header}>
      <div>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <div className={s.child}>
        <NavLink className={activeLink} to="/">
          Home
        </NavLink>
      </div>
      <div className={s.child}>
        <NavLink className={activeLink} to="/info">
          Color Palette
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;

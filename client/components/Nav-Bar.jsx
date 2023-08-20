/**
 * ************************************
 *
 * @module  Nav-Bar.jsx
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sum, Brandon Chmiel
 * @date 08/18/2023
 * @description The modularized Nav-Bar to use as needed on individual pages
 *
 * ************************************
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () => {

  let navigate = useNavigate();
  const toCreate = () => {
    let path = '/create';
    navigate(path);
  };

  return (
    <div className="nav-bar">
      <h1>Green Leaf</h1>
      <img className='headerLogo' src={logo} alt="" />
    </div>
  );
};
export default NavBar;

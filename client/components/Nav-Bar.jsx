/**
 * ************************************
 *
 * @module  Nav-Bar.jsx
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description The modularized Nav-Bar to use as needed on individual pages
 *
 * ************************************
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () => {
  //Direct the user back to home
  let navigate = useNavigate();
  const toHome = () => {
    let path = '/home';
    navigate(path);
  };

  //Direct the user to the create user page
  const toCreate = () => {
    let path = '/create';
    navigate(path);
  };

  //Direct the user to the discover plant page
  const toDiscover = () => {
    let path = '/discover';
    navigate(path);
  };

  //Enact sign out function to log out the currently logged out user
  const signOut = () => {
    console.log('sign out');
    // sign out functionality here
  };
//return the rendering of the nav-bar 
  return (
    <div className='nav-bar'>
      <div className='nav-barLogo'>
        <h1>MyPlantPal</h1>
        <img className='headerLogo' src={logo} alt='' />
      </div>
      <div>
        <a className='navLinks' onClick={toDiscover}>
          Discover
        </a>
        <a className='navLinks' onClick={toCreate}>
          New Plant
        </a>
        <a className='navLinks' onClick={toHome}>
          My Plants
        </a>
        <a className='navLinks' onClick={signOut}>
          Sign Out
        </a>
      </div>
    </div>
  );
};
export default NavBar;

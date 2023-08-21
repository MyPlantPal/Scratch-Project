/**
 * ************************************
 *
 * @module  NavSidePanel
 * @authors Preston Coldwell, John Le, Christopher Le, Geoffrey Sun, Brandon Chmiel
 * @date 08/18/2023
 * @description Navigation panel for use on relevant pages, and the navigate method to switch between different routes
 *
 * ************************************
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavSidePanel = () => {
  let navigate = useNavigate();
  const toCreate = () => {
    let path = '/create';
    navigate(path);
  };

  return (
    <div className="navSidePanel">
      <button className="navButton">My Plants</button>
      <hr />
      <button className="navButton" onClick={toCreate}>
        New Plants
      </button>
      <hr />
      <button className="navButton">Discover</button>
    </div>
  );
};

export default NavSidePanel;

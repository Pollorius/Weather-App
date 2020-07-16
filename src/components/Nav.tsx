import React from 'react';
// import Logo from './logoHenry.png'
import SearchBar from './SearchBar';
import './Nav.css';

import { SearchBarProps } from './SearchBar'


function Nav({ onSearch }: SearchBarProps ) {
  return (
    <div className="navbar">
      <nav className={`navbar navbar-dark bg-dark`}>
        <div className="navbar">
          <div>
            <img width="30" height="30" className={`d-inline-block align-top`} alt=""/>
            <span> Weather App </span>         
          </div>
        </div>
        <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  );
};

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../img/hot.png'
import SearchBar from './SearchBar';

import { SearchBarProps } from './SearchBar'


function Nav({ onSearch }: SearchBarProps ) {
  return (
    <div >
      <nav className='navbar navbar-dark bg-secondary'>     
        <Link to='/'>
        <span className="navbar-brand m-0 h1" > 
        <img src={Logo} width="30" height="30" className="d-inline-block mr-3  align-top" alt="" loading="lazy"/>
          Weather App 
        </span>
        </Link>
        <SearchBar onSearch={onSearch}/>
        <Link to='/about' className="text-decoration-none text-light ">
          <span>About</span>
        </Link>      
      </nav>
    </div>
  );
};

export default Nav;
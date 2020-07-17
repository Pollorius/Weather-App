import React from 'react';
import Logo from '../img/logoHenry.png'

export default function Footer(){
    return (
        <nav className="navbar fixed-bottom navbar-light bg-light">
            <small>Made with ♥ by <a className="text-decoration-none" href="http://www.github.com/Pollorius"> Pollorius </a> for 
                <img src={Logo} width="20" height="20" alt=""/> 
                <a className="text-decoration-none" href="http://www.soyhenry.com"> Henry </a> 
            </small>
        </nav>
    )
}
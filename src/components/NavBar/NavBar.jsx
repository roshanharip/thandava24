
import React from 'react';
import './NavBar.scss';
import Logo from '../../assets/logo.png';
const NavBar = () => {
  return (
    <div className='Header'>
            <div className='Logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='Links'>
                <a href="">Home</a>
                <a href="">Events</a>
            </div>
    </div>
  )
}
export default NavBar;
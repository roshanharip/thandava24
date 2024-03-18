
import React from 'react';
import './NavBar.scss';
import Logo from '../../assets/logo.png';
import { Outlet } from 'react-router';
const NavBar = () => {
  return (
    <>
    <div className='Header'>
            <div className='Logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='Links'>
                <a href="/">Home</a>
                <a href="/events">Events</a>
            </div>
    </div>
    <Outlet/>
    </>
  )
}
export default NavBar;

import React from 'react';
import './NavBar.scss';
import Logo from '../../assets/logo.png';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
    <div className='Header'>
            <div className='Logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='Links'>
                <Link to='/'>Home</Link>
                <Link  to='/events'>Events</Link>
            </div>
    </div>
    <Outlet/>
    </>
  )
}
export default NavBar;
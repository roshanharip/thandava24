import React from 'react'
import InstaLogo from '../../assets/insta.png';
import './Contact.scss';
const Contact = () => {
  return (
    <footer className='Contact'>
      <div className='Details'>
        <h4>Coordinators</h4>
        Ashwin John : <a href="tel:+918301969408">+918301969408</a><br />
        Siril Sam Varghese : <a href="tel:+919961751491">+919961751491</a><br />
        <h4>Technical Support</h4>
        Roshan Hari P : <a href="tel:+917249021681">+917249021681</a><br />
      </div>
      <div className='InstaLogo'>
        <a href="https://www.instagram.com/thandava2k24/"><img src={InstaLogo} alt="" /></a>
      </div>
    </footer>
  )
}

export default Contact

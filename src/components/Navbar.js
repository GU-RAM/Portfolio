import React from 'react';
import logo from '../logo.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
      <div className='container'>
        <a
          className='navbar-brand d-flex align-items-center flex-column'
          href='#'
        >
          <img className='logo' src={logo} alt='logo' />
          <div className='text-light'>GURAM DGEBUADZE</div>
        </a>
        <button
          className='navbar-toggler bg-light align-items-start'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon bg-light'></span>
        </button>

        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ml-auto text-light'>
            <li className='nav-item active'>
              <a className='nav-link text-light' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-light' href='#'>
                about me
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-light' href='#'>
                services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-light' href='#'>
                experience
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-light' href='#'>
                portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link text-light' href='#'>
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

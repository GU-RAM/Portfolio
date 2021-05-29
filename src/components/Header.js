import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1>არსებული გამოცდილება</h1>
        <Typed
          className='typed-text'
          strings={['მარკაპერი', 'რეაქტ ჯეიეს დეველოპერი', 'სოფტვეარ მენეჯერი']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href='' className='btn-main-offer'>
          დამიკავშირდი
        </a>
      </div>
    </div>
  );
};

export default Header;

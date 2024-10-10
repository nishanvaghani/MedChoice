import React from 'react';
import Logo from './assets/img/logo.png';

const Header = ({ openModal }) => {
  return (
    <header className="header">
      <div className="headerSection">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav className="menu">
          <ul className="menuList">
            <li><a href="#services">Services</a></li>
            <li><a href="#compare">Compare</a></li>
            <li><a href="#contactUs">Contact Us</a></li>
            <li><a href="#aboutUs">About Us</a></li>
          </ul>
          <div className="auth">
            <a className="loginBtn" onClick={openModal}>Login</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

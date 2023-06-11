import React from 'react';
import * as S from './NavBar.styled';

const NavBar = () => {
  return (
    <S.NavBar>
      <div className="logo">PSS</div>
      <ul className="nav-links">
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
        <div className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/">Cart</a></li>
          <li><a href="/">About</a></li>
        </div>
      </ul>
    </S.NavBar>
  );
};

export default NavBar;

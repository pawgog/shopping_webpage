import React from 'react';
import * as S from './NavBar.styled';

const NavBar = () => {
  return (
    <S.NavBar>
      <div className="logo">PSS</div>
      <ul>
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
        <S.NavMenu>
          <li><a href="/">Home</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/">About</a></li>
        </S.NavMenu>
      </ul>
    </S.NavBar>
  );
};

export default NavBar;

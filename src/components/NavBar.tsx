import React from 'react';
import * as S from './NavBar.styled';
import { staticText } from '../utils/staticText';

const NavBar = () => {
  return (
    <S.NavBar>
      <div className="logo">PSS</div>
      <ul>
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
        <S.NavMenu>
          <li><a href="/">{staticText.home}</a></li>
          <li><a href="/">{staticText.products}</a></li>
          <li><a href="/cart">{staticText.cart}</a></li>
          <li><a href="/">{staticText.about}</a></li>
        </S.NavMenu>
      </ul>
    </S.NavBar>
  );
};

export default NavBar;

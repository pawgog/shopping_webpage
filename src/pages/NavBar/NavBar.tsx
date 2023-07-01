import React from 'react';
import * as S from './NavBar.styled';
import { NavLink } from 'react-router-dom';
import { staticText } from '../../utils/staticText';

const NavBar = () => {
  return (
    <S.NavBar>
      <div className="logo">PSS</div>
      <ul>
        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
        <S.NavMenu>
          <NavLink to="/">{staticText.home}</NavLink>
          <NavLink to="/products">{staticText.products}</NavLink>
          <NavLink to="/cart">{staticText.cart}</NavLink>
          <NavLink to="/about">{staticText.about}</NavLink>
        </S.NavMenu>
      </ul>
    </S.NavBar>
  );
};

export default NavBar;

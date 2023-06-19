import React from 'react';
import * as S from './Dashboard.styled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UrlContext, serverUrl } from '../utils/context';
import NavBar from './NavBar';
import Products from './Products';
import Cart from './Cart/Cart';

const Dashboard = () => {
  return (
    <UrlContext.Provider value={serverUrl}>
      <S.Dashboard>
      <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </Router>
      </S.Dashboard>
    </UrlContext.Provider>
  );
};

export default Dashboard;

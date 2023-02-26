import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as S from './Dashboard.styled';
import Products from './Products';
import Cart from './Cart';
import { UrlContext, serverUrl } from '../utils/context';

const Dashboard = () => {
  return (
    <UrlContext.Provider value={serverUrl}>
      <S.Dashboard>
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

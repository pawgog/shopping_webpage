import React from 'react';
import * as S from './Dashboard.styled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UrlContext, serverUrl } from '../utils/context';
import NavBar from './NavBar';
import HomePage from './Home';
import Products from './Products';
import Cart from './Cart/Cart';
import AboutPage from './About';

const Dashboard = () => {
  return (
    <UrlContext.Provider value={serverUrl}>
      <Router>
      <NavBar />
        <S.Dashboard>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </S.Dashboard>
      </Router>
    </UrlContext.Provider>
  );
};

export default Dashboard;

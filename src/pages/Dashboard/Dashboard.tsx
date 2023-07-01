import React from 'react';
import * as S from './Dashboard.styled';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <S.Dashboard>
        <Outlet />
      </S.Dashboard>    
    </>
  );
};

export default Dashboard;

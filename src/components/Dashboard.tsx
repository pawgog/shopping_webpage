import React from 'react';
import * as S from './Dashboard.styled';
import Products from './Products';
import { UrlContext, serverUrl } from '../utils/context';

const Dashboard = () => {
  return (
    <UrlContext.Provider value={serverUrl}>
      <S.Dashboard>
        <Products />
      </S.Dashboard>
    </UrlContext.Provider>
  );
};

export default Dashboard;

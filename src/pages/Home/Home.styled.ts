import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../globalStyle/colors';

export const HomeStyled = styled.div`
  position: relative;
  width: 100%;
  height: 91.7vh;
  margin-top: -1.7rem;

  &::before {
    content: '';
    background: url(https://drive.google.com/uc?export=view&id=1gjnttGlYhtW0X6uMaPmQb66vjnR5d51c) no-repeat center
      center fixed;
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
`;

export const HomeContentStyled = styled.div`
  position: relative;
  padding: 0 3rem;
  top: 25%;
`;

export const HomeBoxStyled = styled.div`
  position: absolute;
  width: 35%;
  left: 10%;
  padding: 2rem;
  background-color: ${colors.whiteOpacity};

  & > p {
    text-align: justify;
  }
`;

export const MoreProductsBtn = styled(Link)`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  color: ${colors.white};
  background: ${colors.blue};
  border-radius: 0.2rem;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.blueStrong};
  }
`;

export const SpinnerHomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

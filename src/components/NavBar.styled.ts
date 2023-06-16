import styled from 'styled-components';
import { deviceMaxWidth } from '../globalStyle/devices';
import { colors } from '../globalStyle/colors';

export const NavBar = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: ${colors.grey};
  color: ${colors.white};

  .logo {
    font-size: 32px;
  }

  input[type=checkbox] {
    display: none;
  } 

  .hamburger {
    display: none;
    font-size: 24px;
    user-select: none;
  }

  ${deviceMaxWidth.lg`
    .hamburger {
      display: block;
    }
  `}
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 1rem;

  & li:hover {
    background-color: ${colors.grey};
    border-radius: 1rem;
    transition: 0.3s ease;
  }

  & li {
    padding: 0.5rem 1rem;
  }

  ${deviceMaxWidth.lg`
    display:none;
    position: absolute;
    background-color: #7f7d7d;
    right: 0;
    left: 0;
    margin-top: 1rem;
    text-align: center;
    padding: 1rem 0;

    input[type=checkbox]:checked ~ & {
      display: block;
    }

    & li:hover {
      display: inline-block;
      transition: 0.3s ease;
    }

    & li + li {
      margin-top: 1rem;
    }
  `}
`;
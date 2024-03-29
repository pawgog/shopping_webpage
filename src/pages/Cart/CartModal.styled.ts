import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../globalStyle/colors';
import { deviceMaxWidth } from '../../globalStyle/devices';

interface IProps {
  isModalOpen: boolean;
}

export const CartModal = styled.div<IProps>`
  position: fixed;
  width: 30%;
  height: 100vh;
  top: 0;
  right: ${({ isModalOpen }) => (isModalOpen ? 0 : '-45%')};
  overflow-y: auto;
  z-index: 1000;
  background: ${colors.white};
  box-shadow: -2px 5px 35px ${colors.grey};
  transition: all 0.6s;

  & h2 {
    text-align: center;
  }

  & div:last-of-type {
    border: none;
  }

  ${({ isModalOpen }) => isModalOpen ? deviceMaxWidth.lg`
    width: 100%;
    right: -110%;
  `: deviceMaxWidth.lg`
    width: 100%;
    right: 0;
  `}
`;

export const CartModalContent = styled.div`
  padding: 0 1rem;

  ${deviceMaxWidth.lg`
    padding: 0 2rem;
  `}
`;

export const CheckoutBtn = styled(Link)`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${colors.blue};
  border-radius: 0.2rem;
  transition: background-color .3s;
  cursor: pointer;
  
  &:hover {
    background-color: ${colors.blueOpacity};
  }
`;
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../globalStyle/colors';

interface IProps {
  isModalOpen: boolean;
}

export const CartModal = styled.div<IProps>`
  position: fixed;
  width: 30%;
  height: 100vh;
  top: 0;
  right: ${({ isModalOpen }) => (isModalOpen ? 0 : '-45%')};
  padding: 1rem;
  overflow-y: auto;
  z-index: 1000;
  background: ${colors.white};
  box-shadow: -2px 5px 35px ${colors.grey};
  transition: all 0.6s;

  & h2 {
    text-align: center;
  }
`;

export const CheckoutBtn = styled(Link)`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  padding: 15px;
  border: 1px solid #8EAECC;
  border-radius: 4px;
  cursor: pointer;
`;
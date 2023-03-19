import styled from 'styled-components';
import { colors } from '../../globalStyle/colors';

interface IProps {
  isModalOpen: boolean;
}

export const CartModal = styled.div<IProps>`
  position: fixed;
  width: 40%;
  height: 100vh;
  top: 0;
  right: ${({ isModalOpen }) => (isModalOpen ? 0 : '-45%')};
  padding: 1rem;
  overflow-y: auto;
  background: ${colors.white};
  box-shadow: -2px 5px 35px ${colors.grey};
  transition: all 0.6s;
`;

import styled from 'styled-components';
import { colors } from '../globalStyle/colors';

interface IProps {
  isModalOpen: boolean;
}

export const CartModal = styled.div<IProps>`
  position: fixed;
  width: 40%;
  height: 100vh;
  top: 0;
  right: ${({ isModalOpen }) => (isModalOpen ? 0 : '-45%')};
  background: ${colors.white};
  transition: all 0.6s;
`;

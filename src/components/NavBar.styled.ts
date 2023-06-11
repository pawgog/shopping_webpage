import styled from 'styled-components';
import { colors } from '../globalStyle/colors';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${colors.grey};
  color: ${colors.white};
`;

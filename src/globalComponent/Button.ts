import styled from 'styled-components';
import { colors } from '../globalStyle/colors';

interface IButtonStyled {
  $width: string;
  $height: string;
}

const Button = styled.button<IButtonStyled>(
  ({ $width, $height }) => `
    width: ${$width};
    height: ${$height};
    margin: 0.4rem;
    padding: 0.4rem;
    background-color: ${colors.white};
    border: 1px solid ${colors.blue};
    border-radius: 4px;
    cursor: pointer;
    transition: background-color .3s;
    &:hover {
      background-color: ${colors.blueOpacity};
    }
  `
);

export default Button;

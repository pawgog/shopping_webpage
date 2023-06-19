import styled from 'styled-components';
import { colors } from '../globalStyle/colors';

interface IButtonStyled {
  $width: string;
  $height: string;
  $border?: boolean;
}

const Button = styled.button<IButtonStyled>(
  ({ $width, $height, $border = true }) => `
    width: ${$width};
    height: ${$height};
    margin: 0.4rem;
    padding: 0.4rem;
    background-color: ${colors.white};
    cursor: pointer;
    border: ${$border ? `1px solid ${colors.blue}` : `none`};
    border-radius: 4px;
    transition: background-color .3s;
    &:hover {
      background-color: ${colors.blueOpacity};
    }
  `
);

export default Button;

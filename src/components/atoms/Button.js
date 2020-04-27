import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 190px;
  height: 40px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.7px;
  color: #fff;
  border: none;
  border-radius: 8px;
  background-color: #ff78a1;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 64px;
      color: #969dad;
      background-color: #fff;
    `}
`;

export default Button;

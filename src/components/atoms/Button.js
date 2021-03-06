import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 190px;
  height: 40px;
  font-family: 'Fira Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.medium};
  line-height: 1.5;
  letter-spacing: 0.7px;
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.pink};
  cursor: pointer;
  outline: none;

  ${({ secondary }) =>
    secondary &&
    css`
      margin: 0 24px;
      width: 64px;
      color: ${({ theme }) => theme.blueygrey};
      background-color: ${({ theme }) => theme.white};
    `}
`;

export default Button;

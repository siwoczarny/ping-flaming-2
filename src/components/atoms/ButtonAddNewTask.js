import styled, { css } from 'styled-components';

const ButtonAddNewTask = styled.button`
  display: block;
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 50%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40px;
  background-color: ${({ theme }) => theme.pink};
  outline: none;
  cursor: pointer;

  ${({ transparent }) =>
    transparent &&
    css`
      background-color: inherit;
      background-size: 64px;
    `}
`;

export default ButtonAddNewTask;

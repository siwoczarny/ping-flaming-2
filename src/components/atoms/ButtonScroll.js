import styled, { css } from 'styled-components';

const ButtonScroll = styled.button`
  display: block;
  width: 41px;
  height: 56px;
  border: none;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 24px;
  background-color: ${({ theme }) => theme.dimgrey};
  outline: none;
  cursor: pointer;

  ${({ left }) =>
    left &&
    css`
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
    `}

  ${({ right }) =>
    right &&
    css`
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
    `}
`;

export default ButtonScroll;

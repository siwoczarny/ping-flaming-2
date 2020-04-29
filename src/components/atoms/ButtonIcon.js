import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 24px;
  background-color: ${({ theme }) => theme.dimgrey};
  outline: none;
  cursor: pointer;

  ${({ caption }) =>
    caption &&
    css`
      width: 56px;
      height: 56px;
      padding: 32px 0 0 0;
      font-size: ${({ theme }) => theme.fontSize.xxs};
      line-height: 1.33;
      letter-spacing: 0.4px;
      background-position: 50% 25%;
      color: ${({ theme }) => theme.white};
    `}

  ${({ transparent }) =>
    transparent &&
    css`
      background-color: transparent;
    `}
`;

export default ButtonIcon;

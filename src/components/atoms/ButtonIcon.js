import styled from 'styled-components';

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
`;

export default ButtonIcon;

import styled from 'styled-components';

const Input = styled.input`
  padding: 8px 16px;
  width: 100%;
  height: 40px;
  font-family: 'Lato', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.slateygrey};
  border: 1px solid;
  border-color: ${({ theme }) => theme.midgrey};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.white};
  outline: none;

  ::placeholder {
    font-weight: ${({ theme }) => theme.light};
    color: ${({ theme }) => theme.blueygrey};
    opacity: 1;
  }
`;

export default Input;

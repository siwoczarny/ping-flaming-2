import styled from 'styled-components';

const Input = styled.input`
  padding: 8px 16px;
  width: 100%;
  height: 40px;
  font-family: 'Lato', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 1.71;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.dark};
  border: 1px solid;
  border-color: ${({ theme }) => theme.midgrey};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.white};

  ::placeholder {
    color: ${({ theme }) => theme.blueygrey};
    opacity: 1;
  }
`;

export default Input;

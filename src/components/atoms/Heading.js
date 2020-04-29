import styled from 'styled-components';

const Heading = styled.h3`
  font-family: 'Fira Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.medium};
  line-height: 1.33;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.white};
`;

export default Heading;

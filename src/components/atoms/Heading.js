import styled, { css } from 'styled-components';

const Heading = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  line-height: 1.43;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.blueygrey};

  ${({ big }) =>
    big &&
    css`
      font-family: 'Fira Sans', sans-serif;
      font-size: ${({ theme }) => theme.fontSize.m};
      font-weight: ${({ theme }) => theme.medium};
      line-height: 1.33;
      letter-spacing: 0.15px;
    `}
`;

export default Heading;

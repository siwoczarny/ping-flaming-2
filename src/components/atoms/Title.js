import styled, { css } from 'styled-components';

const Title = styled.h4`
  font-family: 'Lato', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  line-height: 1.43;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.blueygrey};

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xxs};
      font-weight: ${({ theme }) => theme.light};
      line-height: 1.33;
      letter-spacing: 0.4px;
      color: ${({ theme }) => theme.white};
      opacity: 0.6;
    `}

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.bold};
      line-height: 1.5;
      letter-spacing: 0.2px;
      color: ${({ theme }) => theme.white};
    `}
`;

export default Title;

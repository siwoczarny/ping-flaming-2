import styled from 'styled-components';

const Paragraph = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.light};
  line-height: 1.29;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.white};
`;

export default Paragraph;

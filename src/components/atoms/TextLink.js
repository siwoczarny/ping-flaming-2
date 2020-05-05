import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TextLink = styled(Link)`
  font-family: 'Fira Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.medium};
  line-height: 1.5;
  letter-spacing: 0.7px;
  color: ${({ theme }) => theme.slateygrey};
  text-decoration: none;
`;

export default TextLink;

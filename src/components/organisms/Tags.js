import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';

const StyleWrapper = styled.div`
  padding: 0 56px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.dark};
`;

const StyledHeading = styled(Heading)`
  margin: 0 24px 0 0;
`;

const Tags = () => (
  <StyleWrapper>
    <StyledHeading>Tags:</StyledHeading>
    <ButtonIcon icon={plusIcon} />
  </StyleWrapper>
);

export default Tags;

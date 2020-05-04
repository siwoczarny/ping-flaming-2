import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import ButtonIcon from 'components/atoms/ButtonIcon';
import magnifierIcon from 'assets/icons/magnifier.svg';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin: 0 0 0 32px;
  padding: 12px 48px 12px 8px;
  width: 350px;
  height: 48px;
  color: ${({ theme }) => theme.white};
  border: none;
  background-color: ${({ theme }) => theme.dimgrey};

  ::placeholder {
    color: ${({ theme }) => theme.white};
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  transform: translateX(-40px);
`;

const SearchBar = () => (
  <StyledWrapper>
    <StyledInput placeholder="Znajdź to, czego szukasz" />
    <StyledButtonIcon icon={magnifierIcon} />
  </StyledWrapper>
);

export default SearchBar;

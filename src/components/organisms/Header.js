import React from 'react';
import styled from 'styled-components';
import ActionBar from 'components/molecules/ActionBar';
import SearchBar from 'components/molecules/SearchBar';
import logo from 'assets/logo/logo.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 112px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.dark};
`;

const StyledLogo = styled.img`
  width: 200px;
  height: auto;
`;

const Header = () => (
  <StyledWrapper>
    <SearchBar />
    <StyledLogo src={logo} />
    <ActionBar />
  </StyledWrapper>
);

export default Header;

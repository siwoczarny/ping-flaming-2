import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import logo from 'assets/logo/logo-name.svg';
import flamingLeft from 'assets/images/flaming-1.svg';
import flamingRight from 'assets/images/flaming-2.svg';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: ${({ theme }) => theme.dark}; */
`;

const StyledLogo = styled.img`
  display: flex;
  margin: 80px auto 0;
  background-color: ${({ theme }) => theme.dark};
`;

const StyledFlaming = styled.img`
  position: absolute;

  ${({ left }) =>
    left &&
    css`
      top: 184px;
      left: 0;
      width: auto;
      height: 392px;
      transform: scaleX(-1) translateX(67px);
    `}

  ${({ right }) =>
    right &&
    css`
      top: 224px;
      right: 0;
    `}
`;

const AuthTemplate = ({ children }) => (
  <MainWrapper>
    <StyledLogo src={logo} />
    {children}
    <StyledFlaming left src={flamingLeft} />
    <StyledFlaming right src={flamingRight} />
  </MainWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthTemplate;

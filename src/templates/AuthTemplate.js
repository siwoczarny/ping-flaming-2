import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import logo from 'assets/logo/logo-name.svg';
import flamingLeft from 'assets/images/flaming-1.svg';
import flamingRight from 'assets/images/flaming-2.svg';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.dark};
`;

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 24px 0;
  width: 464px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLogo = styled.img`
  margin: 0 auto;
  padding: 28px 0 0;
  display: flex;
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

class AuthTemplate extends Component {
  state = {
    isPasswordVisible: 'password',
  };

  togglePassword = () => {
    this.setState({
      isPasswordVisible: 'text',
    });
  };

  render() {
    const { children } = this.props;
    const { isPasswordVisible } = this.state;

    return (
      <MainWrapper>
        <StyledLogo src={logo} />
        <StyledWrapper isPasswordVisible={isPasswordVisible} togglePassword={this.togglePassword}>
          {children}
        </StyledWrapper>
        <StyledFlaming left src={flamingLeft} />
        <StyledFlaming right src={flamingRight} />
      </MainWrapper>
    );
  }
}

AuthTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthTemplate;

import React from 'react';
import styled, { css } from 'styled-components';
import logo from 'assets/logo/logo-name.svg';
import flamingLeft from 'assets/images/flaming-1.svg';
import flamingRight from 'assets/images/flaming-2.svg';
import Title from 'components/atoms/Title';
import Input from 'components/atoms/Input';
import ButtonIcon from 'components/atoms/ButtonIcon';
import showIcon from 'assets/icons/show.svg';
import TextLink from 'components/atoms/TextLink';
import Button from 'components/atoms/Button';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const StyledWrapper = styled.div`
  margin: 72px auto 0;
  width: 464px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  margin: 8px 28px 16px 28px;
  position: relative;

  ${({ flex }) =>
    flex &&
    css`
      margin: 0px 28px 48px 28px;
      display: flex;
      justify-content: space-between;
    `}
`;

const StyledFlaming = styled.img`
  position: absolute;

  ${({ left }) =>
    left &&
    css`
      top: 188px;
      left: 0;
      width: auto;
      height: 392px;
      transform: scaleX(-1) translateX(67px);
    `}

  ${({ right }) =>
    right &&
    css`
      top: 229px;
      right: 0;
    `}
`;

const StyledLogo = styled.img`
  margin: 0 0 24px 0;
  background-color: ${({ theme }) => theme.dark};
`;

const StyledTitle = styled(Title)`
  margin: 0 28px;
  color: ${({ theme }) => theme.slateygrey};

  ${({ big }) =>
    big &&
    css`
      margin: 0 0 56px 0;
      text-align: center;
    `}
`;

const StyledInput = styled(Input)`
  border: 2px solid;
  border-color: ${({ theme }) => theme.slateygrey};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  top: 4px;
  right: 8px;
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

const LoginPage = () => (
  <MainWrapper>
    <StyledWrapper>
      <StyledLogo src={logo} />
      <StyledTitle big>
        Ping Flaming to narzędzie ułatwiające organizację Twojej pracy, życia i wszystkiego, co
        potrzebuje organizacji.
        <br />
        Zaloguj się i działaj!
      </StyledTitle>
      <StyledTitle>Login</StyledTitle>
      <InnerWrapper>
        <StyledInput placeholder="Podaj swój login" />
      </InnerWrapper>
      <StyledTitle>Hasło</StyledTitle>
      <InnerWrapper>
        <StyledInput placeholder="Podaj swoje hasło" />
        <StyledButtonIcon transparent icon={showIcon} />
      </InnerWrapper>
      <InnerWrapper flex>
        <TextLink>Przypomnij hasło</TextLink>
        <TextLink>Zarejestruj się!</TextLink>
      </InnerWrapper>
      <StyledButton>Zaloguj mnie</StyledButton>
    </StyledWrapper>
    <StyledFlaming left src={flamingLeft} />
    <StyledFlaming right src={flamingRight} />
  </MainWrapper>
);

export default LoginPage;

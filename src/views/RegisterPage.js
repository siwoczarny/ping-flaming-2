import React from 'react';
import styled, { css } from 'styled-components';
import AuthTemplate from 'templates/AuthTemplate';
import Title from 'components/atoms/Title';
import Input from 'components/atoms/Input';
import ButtonIcon from 'components/atoms/ButtonIcon';
import showIcon from 'assets/icons/show.svg';
import TextLink from 'components/atoms/TextLink';
import Button from 'components/atoms/Button';

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

const RegisterPage = () => (
  <AuthTemplate>
    <StyledTitle big>
      Ping Flaming to narzędzie ułatwiające organizację Twojej pracy, życia i wszystkiego, co
      potrzebuje organizacji.
      <br />
      Zarejestruj się i działaj!
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
    <StyledTitle>Powtórz hasło</StyledTitle>
    <InnerWrapper>
      <StyledInput placeholder="Powtórz swoje hasło" />
      <StyledButtonIcon transparent icon={showIcon} />
    </InnerWrapper>
    <InnerWrapper flex>
      <TextLink to="/">Zobacz demo</TextLink>
      <TextLink to="/login">Zaloguj się!</TextLink>
    </InnerWrapper>
    <StyledButton>Zarejestruj mnie</StyledButton>
  </AuthTemplate>
);

export default RegisterPage;

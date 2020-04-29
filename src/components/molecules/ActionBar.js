import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import ButtonIcon from 'components/atoms/ButtonIcon';
import downIcon from 'assets/icons/down.svg';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled.img`
  margin: 0 8px 0 0;
  width: 48px;
  height: 48px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.white};
  border-radius: 50%;
`;

const StyledButton = styled(Button)`
  padding: 8px 48px 8px 16px;
  width: 256px;
  height: 48px;
  text-align: left;
  color: ${({ theme }) => theme.white};
  border: none;
  background-color: ${({ theme }) => theme.dimgrey};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  transform: translateX(-40px);
`;

const ActionBar = () => (
  <StyledWrapper>
    <StyledAvatar src="https://avatars.io/twitter/siwoczarny" />
    <StyledButton>siwoczarny</StyledButton>
    <StyledButtonIcon icon={downIcon} />
  </StyledWrapper>
);

export default ActionBar;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button';
import ButtonIcon from 'components/atoms/ButtonIcon';
import downIcon from 'assets/icons/down.svg';
import logOutIcon from 'assets/icons/log-out.svg';

const StyledWrapper = styled.div`
  position: relative;
  width: min-content;
  display: flex;
  align-items: center;
`;

const StyledAvatar = styled.img`
  margin: 0 8px;
  width: 48px;
  height: 48px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.white};
  border-radius: 50%;
`;

const StyledButton = styled(Button)`
  padding: 8px 48px 8px 8px;
  width: 256px;
  height: 48px;
  text-align: left;
  color: ${({ theme }) => theme.white};
  border: none;
  background-color: ${({ theme }) => theme.dimgrey};
  z-index: 9997;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  transform: translateX(-40px);
  z-index: 9998;
`;

const StyledList = styled.div`
  position: absolute;
  top: -1px;
  left: 63px;
  padding: 48px 8px 8px 8px;
  width: 258px;
  height: 98px;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.rose};
  background-color: ${({ theme }) => theme.dimgrey};
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
`;

const InnerWrapper = styled.div`
  padding: 8px 0 0 0;
  border-top: 1px dashed;
  border-color: ${({ theme }) => theme.white};
`;

const ActionBar = () => {
  const [open, setOpen] = React.useState(false);

  function toggleUserList() {
    setOpen(!open);
  }

  return (
    <StyledWrapper>
      <StyledAvatar src="https://avatars.io/twitter/siwoczarny" />
      <StyledButton onClick={toggleUserList}>siwoczarny</StyledButton>
      <StyledButtonIcon icon={downIcon} onClick={toggleUserList} />
      {open ? (
        <StyledList>
          <InnerWrapper>
            <StyledLink to="/login">
              Wyloguj się
              <ButtonIcon icon={logOutIcon} />
            </StyledLink>
          </InnerWrapper>
        </StyledList>
      ) : null}
    </StyledWrapper>
  );
};

export default ActionBar;

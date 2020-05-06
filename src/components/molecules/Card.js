import React from 'react';
import styled, { css } from 'styled-components';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon';
import deleteIcon from 'assets/icons/delete.svg';
import editIcon from 'assets/icons/edit.svg';

const StyledWrapper = styled.div`
  margin: 8px 0;
  padding: 16px;
  width: 100%;
  min-height: 256px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.dimgrey};
`;

const StyledTitle = styled(Title)`
  margin: 0;

  ${({ small }) =>
    small &&
    css`
      margin: 16px 0 0;
    `}
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
`;

const InnerWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`;

const Card = () => (
  <StyledWrapper>
    <StyledTitle big>Title</StyledTitle>
    <StyledTitle small>Opis</StyledTitle>
    <StyledParagraph>
      Curabitur tincidunt at, mollis nibh risus, pellentesque a, dui. Integer aliquet molestie.
      Vivamus iaculis, diam vitae wisi nunc, fringilla mollis. Proin volutpat a, convallis accumsan,
      dolor auctor tincidunt. Sed sit amet dui sodales lectus varius vitae, lorem
    </StyledParagraph>
    <StyledTitle small>Tagi</StyledTitle>
    <InnerWrapper>
      <ButtonIcon icon={deleteIcon} caption>
        Usuń
      </ButtonIcon>
      <ButtonIcon icon={editIcon} caption>
        Edytuj
      </ButtonIcon>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;

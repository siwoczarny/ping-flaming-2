import React from 'react';
import styled, { css } from 'styled-components';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon';
import deleteIcon from 'assets/icons/delete.svg';
import editIcon from 'assets/icons/edit.svg';

const StyledWrapper = styled.div`
  padding: 16px;
  width: 320px;
  min-height: 256px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.dimgrey};
`;

const StyledTitle = styled(Title)`
  margin: 0;

  ${({ main }) =>
    main &&
    css`
      margin: 0 0 8px 0;
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
    <StyledTitle big main>
      Title
    </StyledTitle>
    <StyledTitle small>Opis</StyledTitle>
    <StyledParagraph>
      Curabitur tincidunt at, mollis nibh risus, pellentesque a, dui. Integer aliquet molestie.
      Vivamus iaculis, diam vitae wisi nunc, fringilla mollis. Proin volutpat a, convallis accumsan,
      dolor auctor tincidunt. Sed sit amet dui sodales lectus varius vitae, lorem
    </StyledParagraph>
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

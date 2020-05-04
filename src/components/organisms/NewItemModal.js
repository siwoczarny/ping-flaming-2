import React from 'react';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Title from 'components/atoms/Title';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import crossIcon from 'assets/icons/cross.svg';
import { Formik, Form } from 'formik';

const StyledModal = styled.div`
  margin: 112px auto;
  width: 50vw;
  max-width: 624px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  width: 100%;

  ${({ header }) =>
    header &&
    css`
      position: relative;
      height: 56px;
      text-align: center;
      background-color: ${({ theme }) => theme.blueygrey};
    `}

  ${({ buttons }) =>
    buttons &&
    css`
      margin: 24px 0;
      display: flex;
      justify-content: flex-end;
    `}
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const StyledForm = styled(Form)`
  padding: 0 16px;
`;

const StyledTitle = styled(Title)`
  margin: 32px 0 8px 0;
`;

const StyledInput = styled(Input)`
  ${({ textarea }) =>
    textarea &&
    css`
      min-height: 80px;
    `}
`;

const NewItemModal = () => {
  return (
    <StyledModal>
      <InnerWrapper header>
        <Heading>Dodaj nowe zadanie</Heading>
        <StyledButtonIcon transparent icon={crossIcon} />
      </InnerWrapper>
      <Formik>
        <StyledForm>
          <StyledTitle>Tytuł</StyledTitle>
          <StyledInput type="text" name="title" placeholder="Wpisz tytuł swojego zadania" />
          <StyledTitle>Opis</StyledTitle>
          <StyledInput
            textarea
            as="textarea"
            name="content"
            placeholder="Opisz zadanie, stwórz kryteria akceptacji lub dodaj niezbędne informacje o tym zadaniu…"
          />
          <StyledTitle>Opis</StyledTitle>
          <StyledInput as="select">
            <option value="" disabled selected>
              {' '}
            </option>
            <option value="value1">Do zrobienia</option>
            <option value="value2">W trakcie</option>
            <option value="value3">Gotowe</option>
          </StyledInput>
          <InnerWrapper buttons>
            <Button secondary>Anuluj</Button>
            <Button>Zatwierdź zmiany</Button>
          </InnerWrapper>
        </StyledForm>
      </Formik>
    </StyledModal>
  );
};

export default NewItemModal;

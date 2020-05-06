import React from 'react';
import styled, { css } from 'styled-components';
import CarouselTemplate from 'templates/CarouselTemplate';
import Heading from 'components/atoms/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon';
import moreIcon from 'assets/icons/more.svg';
import rectangleIcon from 'assets/icons/rectangle.svg';
import Card from 'components/molecules/Card';

const ColumnWrapper = styled.div`
  padding: 0 8px;
  height: 100%;
  border-left: 1px dashed;
  border-right: 1px dashed;
  border-color: ${({ theme }) => theme.dimgrey};

  ${({ add }) =>
    add &&
    css`
      border: none;
    `}
`;

const InnerWrapper = styled.div`
  padding: 0 16px;
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.dimgrey};

  ${({ add }) =>
    add &&
    css`
      background-color: transparent;
    `}
`;

const ColumnTemplate = () => (
  <CarouselTemplate>
    <ColumnWrapper>
      <InnerWrapper>
        <Heading>Do zrobienia</Heading>
        <ButtonIcon icon={moreIcon} />
      </InnerWrapper>
      <Card />
      <Card />
    </ColumnWrapper>
    <ColumnWrapper>
      <InnerWrapper>
        <Heading>W trakcie</Heading>
        <ButtonIcon icon={moreIcon} />
      </InnerWrapper>
      <Card />
    </ColumnWrapper>
    <ColumnWrapper>
      <InnerWrapper>
        <Heading>Gotowe</Heading>
        <ButtonIcon icon={moreIcon} />
      </InnerWrapper>
      <Card />
      <Card />
      <Card />
    </ColumnWrapper>
    <ColumnWrapper>
      <InnerWrapper />
    </ColumnWrapper>
    <ColumnWrapper>
      <InnerWrapper />
    </ColumnWrapper>
    <ColumnWrapper add>
      <InnerWrapper add>
        <Heading>Dodaj nową kolumnę</Heading>
        <ButtonIcon transparent icon={rectangleIcon} />
      </InnerWrapper>
    </ColumnWrapper>
  </CarouselTemplate>
);

export default ColumnTemplate;

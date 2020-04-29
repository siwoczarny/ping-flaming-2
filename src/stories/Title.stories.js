import React from 'react';
import Title from 'components/atoms/Title';

export default {
  title: 'Atoms/Title',
  component: Title,
};

export const Normal = () => <Title>Tytuł</Title>;
export const Small = () => <Title small>Opis</Title>;
export const Big = () => <Title big>Aktualizacja baz danych</Title>;

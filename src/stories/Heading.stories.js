import React from 'react';
import Heading from 'components/atoms/Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
};

export const Normal = () => <Heading>Tytuł</Heading>;
export const Big = () => <Heading big>Dodaj nowe zadanie</Heading>;

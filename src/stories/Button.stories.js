import React from 'react';
import Button from 'components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Save = () => <Button>Zatwierdź zmiany</Button>;
export const Cancel = () => <Button secondary>Anuluj</Button>;

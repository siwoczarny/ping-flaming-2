import React from 'react';
import ButtonAdd from 'components/atoms/ButtonAdd';
import plusIcon from 'assets/icons/plus.svg';
import plusCircleIcon from 'assets/icons/plus-circle.svg';

export default {
  title: 'Atoms/ButtonAdd',
  component: ButtonAdd,
};

export const Color = () => <ButtonAdd icon={plusIcon} />;
export const Transparent = () => <ButtonAdd transparent icon={plusCircleIcon} />;

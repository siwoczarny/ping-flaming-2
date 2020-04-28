import React from 'react';
import ButtonAddNewTask from 'components/atoms/ButtonAddNewTask';
import plusIcon from 'assets/icons/plus.svg';
import plusCircleIcon from 'assets/icons/plus-circle.svg';

export default {
  title: 'Atoms/ButtonAddNewTask',
  component: ButtonAddNewTask,
};

export const Color = () => <ButtonAddNewTask icon={plusIcon} />;
export const Transparent = () => <ButtonAddNewTask transparent icon={plusCircleIcon} />;

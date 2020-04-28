import React from 'react';
import ButtonScroll from 'components/atoms/ButtonScroll';
import leftIcon from 'assets/icons/left.svg';
import rightIcon from 'assets/icons/right.svg';

export default {
  title: 'Atoms/ButtonScroll',
  component: ButtonScroll,
};

export const Left = () => <ButtonScroll left icon={leftIcon} />;
export const Right = () => <ButtonScroll right icon={rightIcon} />;

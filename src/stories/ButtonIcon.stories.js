import React from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import magnifierIcon from 'assets/icons/magnifier.svg';
import deleteIcon from 'assets/icons/delete.svg';
import editIcon from 'assets/icons/edit.svg';
import downIcon from 'assets/icons/down.svg';
import moreIcon from 'assets/icons/more.svg';
import rectangleIcon from 'assets/icons/rectangle.svg';
import crossIcon from 'assets/icons/cross.svg';

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
};

export const Plus = () => <ButtonIcon icon={plusIcon} />;
export const Search = () => <ButtonIcon icon={magnifierIcon} />;
export const Delete = () => <ButtonIcon icon={deleteIcon} />;
export const Edit = () => <ButtonIcon icon={editIcon} />;
export const More = () => <ButtonIcon icon={moreIcon} />;
export const Down = () => <ButtonIcon transparent icon={downIcon} />;
export const Rectangle = () => <ButtonIcon transparent icon={rectangleIcon} />;
export const Cross = () => <ButtonIcon transparent icon={crossIcon} />;

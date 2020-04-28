import React from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import searchIcon from 'assets/icons/search.svg';
import deleteIcon from 'assets/icons/delete.svg';
import editIcon from 'assets/icons/edit.svg';
import downIcon from 'assets/icons/down.svg';
import moreIcon from 'assets/icons/more.svg';

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
};

export const Plus = () => <ButtonIcon icon={plusIcon} />;
export const Search = () => <ButtonIcon icon={searchIcon} />;
export const Delete = () => <ButtonIcon icon={deleteIcon} />;
export const Edit = () => <ButtonIcon icon={editIcon} />;
export const Down = () => <ButtonIcon icon={downIcon} />;
export const More = () => <ButtonIcon icon={moreIcon} />;

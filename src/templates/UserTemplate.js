import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/organisms/Header';
import Tags from 'components/organisms/Tags';

const UserTemplate = ({ children }) => (
  <>
    <Header />
    <Tags />
    {children}
  </>
);

UserTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserTemplate;

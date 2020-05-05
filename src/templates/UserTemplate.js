import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/organisms/Header';

const UserTemplate = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

UserTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserTemplate;

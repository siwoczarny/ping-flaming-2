import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/organisms/Header';

const UserPageTemplate = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;

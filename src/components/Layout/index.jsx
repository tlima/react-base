import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

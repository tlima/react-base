import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { increaseCountAction } from 'store/actions/counters';

import styles from './style.scss';

const TopBar = ({ upCount }) => (
  <div className={styles.bar}>
    <Link to="/" className={styles.link} onClick={() => upCount('home')}>Home</Link>
    <Link to="/one" className={styles.link} onClick={() => upCount('one')}>Page one</Link>
    <Link to="/two" className={styles.link} onClick={() => upCount('two')}>Page two</Link>
  </div>
);

TopBar.propTypes = {
  upCount: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  upCount: target => dispatch(increaseCountAction(target)),
});

export default connect(null, mapDispatchToProps)(TopBar);

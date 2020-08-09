import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increaseCountAction } from 'store/actions/counters';

import * as styles from './style';

const { StyledLink } = styles;

const TopBar = ({ upCount }) => (
  <div css={styles.bar}>
    <StyledLink to="/" onClick={() => upCount('home')}>Home</StyledLink>
    <StyledLink to="/one" onClick={() => upCount('one')}>Page one</StyledLink>
    <StyledLink to="/two" onClick={() => upCount('two')}>Page two</StyledLink>
  </div>
);

TopBar.propTypes = {
  upCount: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  upCount: (target) => dispatch(increaseCountAction(target)),
});

export default connect(null, mapDispatchToProps)(TopBar);

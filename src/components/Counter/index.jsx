import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { eraseCountAction } from 'store/actions/counters';

import styles from './style.scss';

const Counter = ({ counters, zeroCount }) => (
  <div>
    <div>
      <span className={styles.removebutton} onClick={() => zeroCount('home')}>❎ </span>
      Counter Home: {counters.home}
    </div>
    <div>
      <span className={styles.removebutton} onClick={() => zeroCount('one')}>❎ </span>
      Counter One: {counters.one}
    </div>
    <div>
      <span className={styles.removebutton} onClick={() => zeroCount('two')}>❎ </span>
      Counter Two: {counters.two}
    </div>
  </div>
);

Counter.propTypes = {
  counters: PropTypes.object,
  zeroCount: PropTypes.func,
};

const mapStateToProps = state => ({
  counters: state.counters,
});

const mapDispatchToProps = dispatch => ({
  zeroCount: target => dispatch(eraseCountAction(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

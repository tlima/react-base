/* eslint-disable camelcase */
import React from 'react';

import Counter from 'components/Counter';

const Home = () => (
  <div>
    <div>Landing page{_IS_DEVELOPMENT_ && `- Build ${__webpack_hash__}`}</div>
    <Counter />
  </div>
);

export default Home;

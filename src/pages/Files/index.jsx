import React from 'react';

import cubeImage from 'assets/cube.png';
import data from './data.json';

const Files = () => (
  <div>
    <div>{`${data.title} - ${data.info}`}</div>
    <img src={cubeImage} alt='cubeImage' />
  </div>
);

export default Files;

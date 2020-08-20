import React from 'react';

import data from './data.json';

const One = () => (
  <div>
    <div>{data.title}</div>
    <div>{data.info}</div>
  </div>
);

export default One;

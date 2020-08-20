import React from 'react';

import data from './data.json';

const One = () => (
  <div>
    <div>Page one</div>
    <div>{data.title} - {data.info}</div>
  </div>
);

export default One;

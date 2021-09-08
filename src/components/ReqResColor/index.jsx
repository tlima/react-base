import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { getColor } from 'store/selectors/colorsSelector';

import { ColorContainer, ColorBox, TextBox } from './style';

const ReqResColor = ({ id }) => {
  const reqResColor = useSelector(getColor(id));

  return (
    <ColorContainer>
      <ColorBox color={reqResColor.color} />
      <TextBox>{`${reqResColor.name} (${reqResColor.year})`}</TextBox>
    </ColorContainer>
  );
};

ReqResColor.propTypes = {
  id: PropTypes.number,
};

export default ReqResColor;

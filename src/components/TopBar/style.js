import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const bar = css`
  padding: 0.25em;
  background-color: lightgray;
`;

export const StyledLink = styled(Link)`
  padding: 0.5em 1em;
  color: black;
  font-weight: 500;
  text-decoration: none;

  :visited {
    color: black;
  }
`;

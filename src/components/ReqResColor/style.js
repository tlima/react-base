import styled from 'styled-components';

export const ColorContainer = styled.div`
  padding: 0.5rem;
  margin: 0.25rem;
  height: fit-content;
  width: fit-content;
  background-color: #FFFFED;
  border: 1px solid lightslategray;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-gap: 0.5rem;
`;

export const ColorBox = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${props => props.color};
`;

export const TextBox = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1.75rem;
`;

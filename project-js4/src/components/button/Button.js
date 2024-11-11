import React from 'react';
import { StyledButton } from './ButtonStyle';

function Button({ caption, onClick }) {
  return <StyledButton $borderRadius={".5em"} onClick={onClick}>{caption}</StyledButton>;
};

export default Button;
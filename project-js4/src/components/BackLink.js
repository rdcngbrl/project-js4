
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: 1rem 0;

  &:hover {
    background-color: #555;
  }
`;

const BackLink = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <BackButton onClick={handleBackClick}>
      &larr; Back
    </BackButton>
  );
};

export default BackLink;

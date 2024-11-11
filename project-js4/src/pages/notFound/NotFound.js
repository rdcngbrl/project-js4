import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackLink from '../../components/BackLink';

const NotFoundLinks = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;

const NotFoundLink = styled(Link)`
  color: mediumseagreen;
  text-decoration: none;
  margin: 0 1rem;
  width: fit-content;
    padding: 3px;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <>
    <div>
      <h1>NotFound</h1>
      <p>Here are the links to other pages...</p>
    </div>
    <NotFoundLinks>
        <NotFoundLink to="/">Home</NotFoundLink>
        <NotFoundLink to="/abonament">Abonament</NotFoundLink>
        <NotFoundLink to="/activitati">Activitati</NotFoundLink>
        <NotFoundLink to="/admin">Admin</NotFoundLink>
        <NotFoundLink to="/cont">Cont</NotFoundLink>
        <NotFoundLink to="/contact">Contact</NotFoundLink>
        <NotFoundLink to="/forgot-password">Forgot Password</NotFoundLink>
        <NotFoundLink to="/galerie">Galerie</NotFoundLink>
        <NotFoundLink to="/login">Login</NotFoundLink>
        <NotFoundLink to="/membrii">Membrii</NotFoundLink>
        <NotFoundLink to="/inregistrare">Inregistrare</NotFoundLink>
        </NotFoundLinks>
    <p>Or you can go back to the last visited page:</p>
    <BackLink />
    </>
  );
};

export default NotFound;

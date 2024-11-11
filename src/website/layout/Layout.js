// src/components/Layout.js
import React,{useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import styled from 'styled-components';


const Main = styled.main`
  flex: 1; 
  overflow-y: auto; 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ loggedIn, onLogout }) => {

  useEffect(()=>console.log("layout de 2 ori"),[])
  return (
    <Container>
      <Header loggedIn={loggedIn} onLogout={onLogout} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  @media (max-width: 996px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    right: 0;
    background: linear-gradient(180deg, #161616 0%, #333333 35%, #333333de 100%);
    width: 100%;
    text-align: center;
    height:100%;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;

  @media (max-width: 996px) {
    display: block;
    padding: 1rem;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 996px) {
    display: block;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px;
`;



const Header = ({ loggedIn, onLogout }) => {
  const [open, setOpen] = useState(false);

  const handleBurgerClick = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    onLogout(); 
    handleBurgerClick()
  }

  console.log(loggedIn);

  return (
    <HeaderContainer>
      <Logo>ReactFit</Logo>
      <Burger onClick={handleBurgerClick}>
        <Line />
        <Line />
        <Line />
      </Burger>
      <Nav open={open}>
        {loggedIn ? (
          loggedIn.status === "Administrator" ? (
            <>
              <NavLink to="/admin" onClick={handleBurgerClick}>Admin</NavLink>
              <NavLink to="/membrii" onClick={handleBurgerClick}>Membrii</NavLink>
              <NavLink to="/" onClick={handleLogOut}>Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" onClick={handleBurgerClick}>Home</NavLink>
              <NavLink to="/activitati" onClick={handleBurgerClick}>Activitati</NavLink>
              <NavLink to="/galerie" onClick={handleBurgerClick}>Galerie</NavLink>
              <NavLink to="/abonament" onClick={handleBurgerClick}>Abonament</NavLink>
              <NavLink to="/cont" onClick={handleBurgerClick}>Cont</NavLink>
              <NavLink to="/contact" onClick={handleBurgerClick}>Contact</NavLink>
              <NavLink to="/" onClick={handleLogOut}>Logout</NavLink>
            </>
          )
        ) : (
          <>
            <NavLink to="/" onClick={handleBurgerClick}>Home</NavLink>
            <NavLink to="/activitati" onClick={handleBurgerClick}>Activitati</NavLink>
            <NavLink to="/galerie" onClick={handleBurgerClick}>Galerie</NavLink>
            <NavLink to="/abonament" onClick={handleBurgerClick}>Abonament</NavLink>
            <NavLink to="/login" onClick={handleBurgerClick}>Login</NavLink>
            <NavLink to="/contact" onClick={handleBurgerClick}>Contact</NavLink>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};




// const Header = ({ loggedIn, onLogout }) => {
//   const [open, setOpen] = useState(false);

//   const handleBurgerClick = () => {
//     setOpen(!open);
//   };

//   const handleLogOut = () => {
//     onLogout(); 
//     handleBurgerClick()
//   }

//   console.log(loggedIn);

//   return (
//     <HeaderContainer>
//       <Logo>MyLogo</Logo>
//       <Burger onClick={handleBurgerClick}>
//         <Line />
//         <Line />
//         <Line />
//       </Burger>
//       <Nav open={open}>
//         {loggedIn ? (
//           <>
//             <NavLink to="/" onClick={handleBurgerClick}>Home</NavLink>
//             <NavLink to="/activitati" onClick={handleBurgerClick}>Activitati</NavLink>
//             <NavLink to="/galerie" onClick={handleBurgerClick}>Galerie</NavLink>
//             <NavLink to="/abonament" onClick={handleBurgerClick}>Abonament</NavLink>
//             <NavLink to="/cont" onClick={handleBurgerClick}>Cont</NavLink>
//             <NavLink to="/contact" onClick={handleBurgerClick}>Contact</NavLink>
//             <NavLink to="/" onClick={handleLogOut}>Logout</NavLink>
//           </>
//         ) : (
//           <>
//             <NavLink to="/" onClick={handleBurgerClick}>Home</NavLink>
//             <NavLink to="/activitati" onClick={handleBurgerClick}>Activitati</NavLink>
//             <NavLink to="/galerie" onClick={handleBurgerClick}>Galerie</NavLink>
//             <NavLink to="/abonament" onClick={handleBurgerClick}>Abonament</NavLink>
//             <NavLink to="/login" onClick={handleBurgerClick}>Login</NavLink>
//             <NavLink to="/contact" onClick={handleBurgerClick}>Contact</NavLink>
//           </>
//         )}
//       </Nav>
//     </HeaderContainer>
//   );
//};




  // return (
  //   <HeaderContainer>
  //     <Logo>MyLogo</Logo>
  //     <Burger onClick={handleBurgerClick}>
  //       <Line />
  //       <Line />
  //       <Line />
  //     </Burger>
  //     <Nav open={open}>
  //       <NavLink to="/" onClick={handleBurgerClick}>Home</NavLink>
  //       <NavLink to="/abonament" onClick={handleBurgerClick}>Abonament</NavLink>
  //      
  //       <NavLink to="/admin" onClick={handleBurgerClick}>Admin</NavLink>
  //       <NavLink to="/cont" onClick={handleBurgerClick}>Cont</NavLink>
  //       <NavLink to="/contact" onClick={handleBurgerClick}>Contact</NavLink>
  //       <NavLink to="/forgot-password" onClick={handleBurgerClick}>Forgot Password</NavLink>
  //       
  //       <NavLink to="/login" onClick={handleBurgerClick}>Login</NavLink>
  //       <NavLink to="/membrii" onClick={handleBurgerClick}>Membrii</NavLink>
  //       <NavLink to="/inregistrare" onClick={handleBurgerClick}>Inregistrare</NavLink>
  //     </Nav>
  //   </HeaderContainer>
  // );


  


export default Header;

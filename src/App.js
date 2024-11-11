import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './website/layout/Layout';
import HomePage from './pages/homePage/HomePage';
import Abonament from './pages/abonament/Abonament';
import Activitati from './pages/activitati/Activitati';
import Admin from './pages/admin/Admin';
import Cont from './pages/cont/Cont';
import Contact from './pages/contact/Contact';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import ResetPassword from './pages/resetPassword/ResetPassword';
import Galerie from './pages/galerie/Galerie';
import Login from './pages/login/Login';
import Membrii from './pages/membrii/Membrii';
import Inregistrare from './pages/inregistrare/Inregistrare';
import Terms from './pages/termsAndCo/Terms';
import NotFound from './pages/notFound/NotFound';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout loggedIn={loggedIn} onLogout={() => setLoggedIn(null)} />}>
          <Route index element={<HomePage />} />
          <Route path="abonament" element={<Abonament loggedIn={loggedIn} updateLoggedIn={setLoggedIn}/>} />
          <Route path="activitati" element={<Activitati />} />
          <Route path="admin" element={<Admin />} />
          <Route path="cont" element={<Cont loggedIn={loggedIn} updateLoggedIn={setLoggedIn}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="galerie" element={<Galerie />} />
          <Route path="login" element={<Login onLogin={setLoggedIn} />} />
          <Route path="membrii" element={<Membrii />} />
          <Route path="inregistrare" element={<Inregistrare onAddUser={(response) => response && setLoggedIn(response)} />} />
          <Route path="termeni" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

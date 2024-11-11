import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../api/users';
import { ForgotPasswordStyled, ForgotPasswordForm, ForgotPasswordInput, ForgotPasswordButton } from './ForgotPasswordStyled'; // Make sure to create styled components

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    resetPassword(email, (userId) => {
      setMessage('Un Link de confirmare pentru resetarea parolei a fost trimis pe email.');
      setTimeout(() => navigate('/reset-password', { state: { email } }), 3000); // Redirect to reset-password page with email in state
    }, (err) => {
      setMessage('Nu exista un cont create cu acest email!');
    });
  }

  return (
    <ForgotPasswordStyled>
      <ForgotPasswordForm onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <ForgotPasswordInput
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ForgotPasswordButton type="submit">Trimiteti link de resetare</ForgotPasswordButton>
        {message && <p>{message}</p>}
      </ForgotPasswordForm>
    </ForgotPasswordStyled>
  );
}

export default ForgotPassword;

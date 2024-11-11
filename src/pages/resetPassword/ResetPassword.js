import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { updatePassword } from '../../api/users';
import { ResetPasswordStyled, ResetPasswordForm, ResetPasswordInput, ResetPasswordButton } from './ResetPasswordStyled'; // Make sure to create styled components

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    updatePassword(email, newPassword, (response) => {
      setMessage('Password has been successfully updated.');
      setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
    }, (err) => {
      setMessage('Failed to update password. Please try again.');
    });
  }

  return (
    <ResetPasswordStyled>
      <ResetPasswordForm onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <ResetPasswordInput
          type="email"
          name="email"
          value={email}
          readOnly
        />
        <ResetPasswordInput
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <ResetPasswordInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <ResetPasswordButton type="submit">Update Password</ResetPasswordButton>
        {message && <p>{message}</p>}
      </ResetPasswordForm>
    </ResetPasswordStyled>
  );
}

export default ResetPassword;

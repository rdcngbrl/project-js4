import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUser, getSubscriptionById } from '../../api/users'; // Ensure paths are correct
import {
  ContStyled,
  ContStatusSection,
  ContButtonContainer,
  ContButton,
  ContAdminSection,
  ContRow,
  ContColumn,
  ContInput
} from './ContStyled';
import Modal from '../../components/modal/Modal';

const Cont = ({ loggedIn, updateLoggedIn }) => {
  const [subscription, setSubscription] = useState(null);
  const [fullName, setFullName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cardholderName: '',
    cvv: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingCard, setIsEditingCard] = useState(false);
  const [cardError, setCardError] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');
  const [cvvError, setCvvError] = useState('');
  const [cardholderNameError, setCardholderNameError] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      // Fetch subscription data if needed
      if (loggedIn.subscription_id) {
        getSubscriptionById(
          loggedIn.subscription_id,
          (userSubscription) => {
            if (userSubscription) {
              setSubscription(userSubscription);
            }
          },
          (err) => {
            console.error('Error fetching subscription:', err);
          }
        );
      }

      // Set initial state for fullName and card details
      setFullName(loggedIn.fullName);
      if (loggedIn.card_details) {
        setCardDetails({
          cardNumber: loggedIn.card_details.card_number,
          expiryDate: loggedIn.card_details.expiry_date,
          cardholderName: loggedIn.card_details.cardholder_name,
          cvv: loggedIn.card_details.cvv
        });
      }
    }
  }, [loggedIn]);

  const handleSave = (e) => {
    e.preventDefault();
    if (isEditing) {
      if (oldPassword && oldPassword !== loggedIn.password) {
        setErrorPassword("Parola actuala este incorecta!");
        return;
      } else {
        setErrorPassword(''); // Resetare eroare parolă
      }
      const userData = {
        ...loggedIn,
        fullName: fullName,
      };
      if (newPassword) {
        userData.password = newPassword;
      }
      updateUser(
        loggedIn.id,
        userData,
        (updatedUser) => {
          console.log('User updated successfully:', updatedUser);
          setFullName(updatedUser.fullName);
          setNewPassword('');
          setOldPassword('');
          setIsEditing(false);
          // Update loggedIn with the new data
          updateLoggedIn(updatedUser);
        },
        (err) => {
          console.error('Error updating user:', err);
        }
      );
    } else {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFullName(loggedIn.fullName);
    setNewPassword('');
    setOldPassword('');
    setErrorPassword(''); // Resetare eroare parolă
  };

  const handleSaveCardDetails = (e) => {
    e.preventDefault();

    // Validate card number
    if (cardDetails.cardNumber.length !== 16) {
      setCardError('Card number must have 16 characters');
      return;
    } else {
      setCardError('');
    }

    // Validate expiry date format and future date
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDatePattern.test(cardDetails.expiryDate)) {
      setExpiryDateError('Data trebuie sa aiba formatul ll/aa');
      return;
    } else {
      const [month, year] = cardDetails.expiryDate.split('/').map(Number);
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();

      // Convert the 2-digit year to a 4-digit year
      const expiryYear = year + (year < 50 ? 2000 : 1900);

      if (expiryYear < currentYear || (expiryYear === currentYear && month < currentMonth)) {
        setExpiryDateError('Cardul a expirat!');
        return;
      } else {
        setExpiryDateError('');
      }
    }

    // Validate cardholder name
    if (!cardDetails.cardholderName) {
      setCardholderNameError('Numele detinatorului cardului este obligatoriu');
      return;
    } else {
      setCardholderNameError('');
    }

    // Validate CVV
    if (!cardDetails.cvv) {
      setCvvError('CVV-ul este obligatoriu');
      return;
    } else {
      setCvvError('');
    }

    const updatedCardDetails = {
      ...loggedIn.card_details,
      card_number: cardDetails.cardNumber,
      expiry_date: cardDetails.expiryDate,
      cardholder_name: cardDetails.cardholderName,
      cvv: cardDetails.cvv
    };

    const userData = {
      ...loggedIn,
      card_details: updatedCardDetails
    };

    updateUser(
      loggedIn.id,
      userData,
      (updatedUser) => {
        console.log('Card details updated successfully:', updatedUser);
        setCardDetails({
          cardNumber: updatedUser.card_details.card_number,
          expiryDate: updatedUser.card_details.expiry_date,
          cardholderName: updatedUser.card_details.cardholder_name,
          cvv: updatedUser.card_details.cvv
        });
        setIsEditingCard(false);
        setCardError('');
        setExpiryDateError('');
        setCardholderNameError('');
        setCvvError('');
        // Update loggedIn with the new data
        updateLoggedIn(updatedUser);
      },
      (err) => {
        console.error('Error updating card details:', err);
      }
    );
  };

  const handleCancelCardDetails = () => {
    setIsEditingCard(false);
    setCardDetails({
      cardNumber: loggedIn.card_details.card_number,
      expiryDate: loggedIn.card_details.expiry_date,
      cardholderName: loggedIn.card_details.cardholder_name,
      cvv: loggedIn.card_details.cvv
    });
    setCardError('');
    setExpiryDateError('');
    setCardholderNameError('');
    setCvvError('');
  };

  const handleStopSubscription = () => {
    const userData = {
      ...loggedIn,
      subscription_id: null,
      subscription_status: "inactive",
      subscription_created_at: null
    };

    updateUser(
      loggedIn.id,
      userData,
      (updatedUser) => {
        console.log('Subscription stopped successfully:', updatedUser);
        // Update loggedIn with the new data
        updateLoggedIn(updatedUser);
        // Update the subscription state
        setSubscription(null);
        setModalOpened(false);
      },
      (err) => {
        console.error('Error stopping subscription:', err);
      }
    );
  };

  return (
    <ContStyled>
    <h1>Cont Page</h1>
    <ContStatusSection>
      <h2>Status</h2>
      {loggedIn.subscription_status ? (
        <>
          {loggedIn.subscription_status === 'active' ? (
            <span style={{color:"#03ff03"}}><strong>Abonament activ</strong><br/></span>
          ) : (
            <span style={{color:"red"}}><strong>Abonament inactiv</strong><br/></span>
          )}
          {subscription ? (
            <>
              <span><strong>Tip abonament:</strong><br/> {subscription.name}<br/></span>
              <span><strong>Features:</strong><br/> {subscription.features.join(', ')}<br/></span>
              <span><strong>Pret:</strong><br/> {subscription.price} RON<br/></span>
              <span><strong>Data Crearii:</strong><br/> {new Date(loggedIn.subscription_created_at).toLocaleDateString()}<br/></span>
            </>
          ) : (
            <span>Detalii Abonament: N/A</span>
          )}
        </>
      ) : (
        <span>N/A</span>
      )}
      <ContButtonContainer>
        {loggedIn.subscription_status ? (
          loggedIn.subscription_status === 'active' ? (
            <ContButton onClick={(e) => {
              e.preventDefault();
              setModalOpened(true);
            }}>Opreste Abonament</ContButton>
          ) : (
            <ContButton onClick={() => navigate('/abonament')}>Activeaza Abonament</ContButton>
          )
        ) : (
          <ContButton onClick={() => navigate('/abonament')}>Cumpara Abonament</ContButton>
        )}
      </ContButtonContainer>
    </ContStatusSection>

    <ContAdminSection>
      <h2>Administrare Cont</h2>
      <ContRow>
        <ContColumn>
          <span>Nume</span>
          <ContInput
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            disabled={!isEditing}
          />
        </ContColumn>
        <ContColumn>
          <span>Parola Curenta</span>
          <ContInput
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Current Password"
            disabled={!isEditing}
          />
          {errorPassword && <span>{errorPassword}</span>}
        </ContColumn>
        <ContColumn>
          <span>Noua Parola</span>
          <ContInput
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            disabled={!isEditing}
          />
        </ContColumn>
        <ContColumn>
          <span>Email</span>
          <span>{loggedIn.email}</span>
        </ContColumn>
        <ContColumn>
          <span>Abonament</span>
          <span>{subscription ? subscription.name : 'N/A'}</span>
        </ContColumn>
        <ContColumn>
          <span>Actiuni</span>
          <div>
            {isEditing ? (
              <ContButton onClick={handleSave}>Salveaza</ContButton>
            ) : (
              <ContButton onClick={(e) => { e.preventDefault(); setIsEditing(true); }}>Editeaza</ContButton>
            )}
            {isEditing && (
              <ContButton onClick={handleCancel}>Anuleaza</ContButton>
            )}
          </div>
        </ContColumn>
      </ContRow>
    </ContAdminSection>

    <ContAdminSection>
      <h2>Administrare Card</h2>
      <ContRow>
        <ContColumn>
          <span>Card Number</span>
          <ContInput
            type="text"
            value={cardDetails.cardNumber}
            onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
            placeholder="Card Number"
            disabled={!isEditingCard}
          />
          {cardError && <span>{cardError}</span>}
        </ContColumn>
        <ContColumn>
          <span>Expiry Date (mm/yy)</span>
          <ContInput
            type="text"
            value={cardDetails.expiryDate}
            onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
            placeholder="Expiry Date (mm/yy)"
            disabled={!isEditingCard}
          />
          {expiryDateError && <span>{expiryDateError}</span>}
        </ContColumn>
        <ContColumn>
          <span>Cardholder Name</span>
          <ContInput
            type="text"
            value={cardDetails.cardholderName}
            onChange={(e) => setCardDetails({ ...cardDetails, cardholderName: e.target.value })}
            placeholder="Cardholder Name"
            disabled={!isEditingCard}
          />
          {cardholderNameError && <span>{cardholderNameError}</span>}
        </ContColumn>
        <ContColumn>
          <span>CVV</span>
          <ContInput
            type="password"
            value={cardDetails.cvv}
            onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
            placeholder="CVV"
            disabled={!isEditingCard}
          />
          {cvvError && <span>{cvvError}</span>}
        </ContColumn>
        <ContColumn>
          <span>Actiuni</span>
          <div>
            {isEditingCard ? (
              <>
                <ContButton onClick={handleSaveCardDetails}>Salveaza</ContButton>
                <ContButton onClick={handleCancelCardDetails}>Anuleaza</ContButton>
              </>
            ) : (
              <ContButton onClick={(e) => { e.preventDefault(); setIsEditingCard(true); }}>Editeaza</ContButton>
            )}
          </div>
        </ContColumn>
      </ContRow>
    </ContAdminSection>
    <Modal
      title="Esti sigur?"
      text="Daca opriți abonamentul, banii din zilele rămase vor fi returnați pe cardul dvs."
      onCancel={() => setModalOpened(false)}
      onSubmit={handleStopSubscription}
      isOpened={modalOpened}
    />
  </ContStyled>
);
};    
export default Cont;

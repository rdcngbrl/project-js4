import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AbonamentMainBanner, AbonamentMainBannerTitle, AbonamentMainBannerDescription, AbonamentContainer, AbonamentCard, AbonamentTitle, AbonamentSubtitle, AbonamentList, AbonamentListItem, AbonamentButton } from '../abonament/AbonamentStyled';
import { getSubscriptionList, updateUser } from '../../api/users'; // Adjust the import path as necessary
import Modal from '../../components/modal/Modal';

const Abonament = ({ loggedIn, updateLoggedIn }) => {
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
  const [cardErrorModalOpened, setCardErrorModalOpened] = useState(false);
  const [errorCardDetails, setErrorCardDetails] = useState('');
  const navigate = useNavigate();

    useEffect(() => {
      listSubscriptions();
    }, []);

  const listSubscriptions = () => {
    getSubscriptionList(
      (data) => {
        setSubscriptionData(data);
      },
      (err) => {
        console.error('Failed to fetch subscription data:', err);
      }
    );
  }

  const handleButtonClick = (plan) => {
    if (!loggedIn) {
      navigate('/login');
      return;
    }
    
    const { card_details = {} } = loggedIn;
    const { card_number, expiry_date, cardholder_name, cvv } = card_details;
  
    if (!card_number || !expiry_date || !cardholder_name || !cvv) {
      setErrorCardDetails('Pentru a activa abonamentul trebuie să aveți datele cardului completate.');
      setCardErrorModalOpened(true);
    } else {
      const now = new Date();
      const userSubscriptionData = {
        ...loggedIn,
        subscription_id: plan.id,
        subscription_status: "active",
        subscription_created_at: now.toISOString()
      };
      updateUser(loggedIn.id, userSubscriptionData, (updatedUser) => {
        console.log('User updated successfully:', updatedUser);
        updateLoggedIn(updatedUser);
      }, (err) => {
        console.error('Error updating user:', err);
      });
    }
  };

  const handleStopSubscription = () => {
    if (!loggedIn) {
      console.error('Cannot stop subscription: User is not logged in.');
      return;
    }
  
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
        updateLoggedIn(updatedUser);
        listSubscriptions();
        setModalOpened(false);
      },
      (err) => {
        console.error('Error stopping subscription:', err);
      }
    );
  };

  return (
    <>
     <AbonamentMainBanner>
    <AbonamentMainBannerTitle>Planurile de Abonament</AbonamentMainBannerTitle>
    <AbonamentMainBannerDescription>
      Descoperiți planul perfect pentru dumneavoastră și alegeți pachetul de beneficii care vă avantajează cel mai mult. 
      Îmbunătățiți-vă experiența cu cele mai bune opțiuni de abonament adaptate nevoilor dumneavoastră.
    </AbonamentMainBannerDescription>
  </AbonamentMainBanner>
    <AbonamentContainer>
        
    {subscriptionData.map((plan) => (
      <AbonamentCard
        key={plan.id}
        style={{
          opacity: loggedIn && loggedIn.subscription_id ? (loggedIn.subscription_id === plan.id ? 1 : 0.5) : 1
        }}
      >
        <AbonamentTitle>Abonament</AbonamentTitle>
        <AbonamentSubtitle>{plan.name}</AbonamentSubtitle>
        <p>Oferă acces la:</p>
        <AbonamentList>
          {plan.features.map((feature) => (
            <AbonamentListItem key={feature}>{feature}</AbonamentListItem>
          ))}
        </AbonamentList>
        <p>Preț: {plan.price} RON/lună</p>
        {loggedIn && loggedIn.subscription_id === plan.id && loggedIn.subscription_status === "active" ? (
          <>
            <p>Abonament Activ</p>
            <AbonamentButton onClick={(e) => {
              e.preventDefault();
              setModalOpened(true);
            }}>Opriți Abonamentul</AbonamentButton>
          </>
        ) : (
          (loggedIn && loggedIn.subscription_status !== "active") ? (
            <AbonamentButton onClick={() => handleButtonClick(plan)}>Alegeți Abonamentul</AbonamentButton>
          )
          :
          (!loggedIn) && (<AbonamentButton onClick={() => handleButtonClick(plan)}>Autentificare</AbonamentButton>)
        )}
      </AbonamentCard>
    ))}
    {errorCardDetails && <Modal   
      title="Atentie!" 
      text="Pentru a activa abonamentul trebuie să aveți datele cardului completate." 
      onCancel={() => setCardErrorModalOpened(false)} 
      onSubmit={() => navigate('/cont')} 
      isOpened={cardErrorModalOpened}       
        
         
    />}
    <Modal 
      title="Ești sigur?" 
      text="Dacă opriți abonamentul, banii din zilele rămase vor fi returnați pe cardul dvs." 
      onCancel={() => setModalOpened(false)} 
      onSubmit={() => handleStopSubscription()} 
      isOpened={modalOpened} 
    />
  </AbonamentContainer>

  </>
  );
};

export default Abonament;

import React, { useState } from 'react';
import { 
  Container, 
  SectionTitle, 
  ContactInfo, 
  ContactDetails, 
  FormContainer, 
  FormField, 
  FormLabel, 
  FormInput, 
  FormTextArea, 
  SubmitButton 
} from './ContactStyled';
import { sendContactForm } from '../../api/users'; // Importă funcția de API

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    sendContactForm(
      formData,
      (data) => {
        setStatus('Mesaj trimis cu succes');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      },
      (error) => {
        setStatus('Mesajul nu s-a putut trimite. Verificati campurile!');
        console.error(error);
      }
    );
  };

  return (
    <Container>
      <SectionTitle>Contactează-ne</SectionTitle>
      <ContactInfo>
        <ContactDetails>
          <h3>Informații de Contact</h3>
          <p><strong>Adresă:</strong> Strada Fitnessului, Nr. 123, București, România</p>
          <p><strong>Telefon:</strong> +40 123 456 789</p>
          <p><strong>Email:</strong> contact@reactfit.ro</p>
          <p><strong>Ore de lucru:</strong> Luni - Vineri: 08:00 - 20:00, Sâmbătă: 09:00 - 15:00</p>
        </ContactDetails>
        <FormContainer>
          <h3>Formular de Contact</h3>
          <form onSubmit={handleSubmit}>
            <FormField>
              <FormLabel htmlFor="name">Nume</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </FormField>
            <FormField>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </FormField>
            <FormField>
              <FormLabel htmlFor="message">Mesaj</FormLabel>
              <FormTextArea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="5" 
                required 
              />
            </FormField>
            <SubmitButton type="submit">Trimite</SubmitButton>
          </form>
          {status && <p>{status}</p>}
        </FormContainer>
      </ContactInfo>
    </Container>
  );
};

export default Contact;
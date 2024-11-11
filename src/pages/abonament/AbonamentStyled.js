import styled from "styled-components";

const breakpoints = {
  tablet: '996px',
  phone: '767px',
};


export const AbonamentMainBanner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin: 30px 0 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

  @media (max-width: ${breakpoints.tablet}) {
    padding: 30px 10px 50px;  
  }

  @media (max-width: ${breakpoints.phone}) {
    padding: 20px 90px 40px;
  }
`;

export const AbonamentMainBannerTitle = styled.h1`
  font-size: 2rem;
    font-weight: bold;
    margin: 0 auto;
    padding: 40px 0 20px;
 

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.8rem;
    padding: 20px 60px;
  }

  @media (max-width: ${breakpoints.phone}) {
    font-size: 1.5rem;
    padding: 20px 0; 
  }
`;

export const AbonamentMainBannerDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 115px 40px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    padding:0 60px;
  }

  @media (max-width: ${breakpoints.phone}) {
    font-size: 0.9rem;
    padding:0;
  }
`;








export const AbonamentContainer = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items:center;
  margin-bottom:50px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const AbonamentCard = styled.div`
  flex: 1 1 300px; /* Dimensiune fixă cu flexibilitate pentru a se alinia corect */
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #fff;
  min-width: 150px;
  max-width: 300px; /* Asigură aceeași dimensiune maximă */
  box-sizing: border-box;

  /* Primul card - bronz închis */
  &:nth-of-type(1) {
    background-color: #633306; /* Bronz închis */
  }

  /* Al doilea card - argintiu închis */
  &:nth-of-type(2) {
    background-color: #5e5e5e; /* Argintiu închis */
  }

  /* Al treilea card - auriu închis */
  &:nth-of-type(3) {
    background-color: #936900; /* Auriu închis */
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex: 1 1 60%;
    max-width: 80%;
    padding: 15px 15px 40px;
    min-width: 60%;
  }

  @media (max-width: ${breakpoints.phone}) {
    flex: 1 1 100%; /* Pe mobile să fie cum sunt */
    max-width: 100%;
    padding: 15px 15px 40px;
    min-width: 60%;
  }
`;


export const AbonamentTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AbonamentSubtitle = styled.h4`
  font-weight: normal;
  margin-bottom: 10px;
`;

export const AbonamentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 200px;

  @media (max-width: ${breakpoints.tablet}) {
    min-height: auto; /* Înălțimea minimă auto pentru tablete */
  }

  @media (max-width: ${breakpoints.phone}) {
    min-height: auto; /* Înălțimea minimă auto pentru telefoane */
  }
`;

export const AbonamentListItem = styled.li`
  margin-bottom: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 5px; /* Reducerea spațiului între items */
  }

  @media (max-width: ${breakpoints.phone}) {
    margin-bottom: 2px; /* Și mai puțin spațiu pe telefoane */
  }
`;

export const AbonamentButton = styled.button`
  
  padding: 10px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    border: 1px white solid;
    margin: 20px 2px 0;  

  &:hover {
    background-color: #0056b3;
  }
  &:active{
    background-color: #00254d;
  }  

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 10px; /* Reducerea spațiului de deasupra butonului */
  }

  @media (max-width: ${breakpoints.phone}) {
    margin-top: 5px; /* Și mai puțin spațiu pe telefoane */
  }
`;

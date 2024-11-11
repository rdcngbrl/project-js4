import styled from 'styled-components';

// Main container with padding and margin
export const Container = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 1200px;

  @media (max-width: 996px) {
    padding: 15px;
  }

  @media (max-width: 767px) {   
    padding: 10px;
  }
`;

// Main banner section
export const MainBanner = styled.div`
  background-color: #333;
  padding: 50px 20px;
  text-align: center;

  @media (max-width: 996px) {
    padding: 40px 15px;
  }

  @media (max-width: 767px) {
    padding: 30px 10px;
  }
`;

export const BannerText = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  margin: 0;

  @media (max-width: 996px) {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

// Section for membership plans
export const MembershipSection = styled.section`
  background-color: #333;
  padding: 40px 20px;
  margin: 20px 0;
  text-align: center;

  @media (max-width: 996px) {
    padding: 30px 15px;
  }

  @media (max-width: 767px) {
    padding: 20px 10px;
  }
`;

export const SectionTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 20px;

  @media (max-width: 996px) {
    font-size: 1.75rem;
  }

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const SectionDescription = styled.p`
  color: #ccc;
  font-size: 1.2rem;
  margin-bottom: 40px;

  @media (max-width: 996px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  @media (max-width: 767px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  background-color: #444;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;

  @media (max-width: 996px) {
    max-width: 250px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 996px) {
    font-size: 1.25rem;
  }

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;

  @media (max-width: 996px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }

  @media (max-width: 767px) {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  
  color: #fff;
  padding: 10px 20px;
  
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  

   
    outline: none;
    
    
    
    
    background-color: #007bff;
    
    cursor: pointer;
    border: 1px white solid;
   

  &:hover {
    background-color: #0056b3;
  }
  &:active{
    background-color: #00254d;
  }  

  @media (max-width: 996px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (max-width: 767px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

// Section for activities
export const ActivitiesSection = styled.section`
  background-color: #333;
  padding: 40px 20px;
  margin: 20px 0;
  text-align: center;

  @media (max-width: 996px) {
    padding: 30px 15px;
  }

  @media (max-width: 767px) {
    padding: 20px 10px;
  }
`;

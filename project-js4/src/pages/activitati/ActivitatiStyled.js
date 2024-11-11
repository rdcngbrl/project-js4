import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const MainBanner = styled.div`
  width: 100%;
  background-color: #333;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  @media (max-width: 996px) {
    padding: 40px 20px;
  }

  @media (max-width: 767px) {
    padding: 30px 15px;
  }
`;

export const BannerText = styled.h1`
  font-size: 36px;
  color: #fff;
  
  @media (max-width: 996px) {
    font-size: 30px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const BannerDescription = styled.p`
  font-size: 18px;
  color: #ccc;
  margin: 10px 0 20px 0;
  
  @media (max-width: 996px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const BannerButton = styled(Link)`
  color: #fff;
  padding: 10px 20px;
  text-decoration:none;
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



export const ActivityDetailCard = styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  width: 80%;
  margin: 15px 0;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  
  @media (max-width: 996px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 15px;
  }
`;

export const ActivityTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

export const ActivityDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

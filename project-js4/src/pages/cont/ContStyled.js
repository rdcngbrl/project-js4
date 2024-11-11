import styled from "styled-components";

const breakpoints = {
  tablet: '1200px',
  phone: '767px',
};

export const ContStyled = styled.div`
  width: 77.5em;
  margin: auto;
  h1 {
    text-align: center;
    color: white;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width:100%;
  }
`;

export const ContSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h2 {
    color: white;
  }
`;

export const ContStatusSection = styled(ContSection)`
  background-color:#333;
  justify-content: space-between;
  padding: 20px 70px;
  flex-direction: row;

  span {
    color: white;
    margin: auto 0;
    text-align: center;
    padding: 10px 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ContAdminSection = styled(ContSection)`
  margin-top: 50px;
  padding: 20px 70px;
  background-color:#333;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
  }
`;

export const ContButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  span{
    padding-top:5px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const ContRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  span{
    padding-top:5px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;

  span {
    color: white;
    margin-bottom: 5px;
    text-align: center;
    padding-top:5px;
  }
`;

export const ContInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
`;

export const ContButton = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    border: 1px white solid;
    margin: 0 2px;  

  &:hover {
    background-color: #0056b3;
  }
  &:active{
    background-color: #00254d;
  }  
`;

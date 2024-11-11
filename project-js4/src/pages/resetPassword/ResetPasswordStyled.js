import styled from "styled-components";



export const ResetPasswordStyled = styled.div`
    max-width: 600px;
    min-height:500px;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    border-radius: 1em;
    height: 20em;
`

export const ResetPasswordForm = styled.form`
    margin: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    h1{
        font-size:2.5rem;
        color:#fff;
    }
    p{
      color:white;
    }    
`

export const ResetPasswordInput = styled.input`
    border-radius: .2em;
    outline: none;
    border: none;
    margin: .2em 0;
    background-color: #fff;
    font-size: 2em;
    width: 100%;
    padding: .1em .2em;
`
export const ResetPasswordButton = styled.button`
    border-radius: .2em;
    outline: none;
    margin: .2em 0;
    font-size: 2em;
    width: 100%;
    padding: .1em .2em;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border: 1px white solid;
   

  &:hover {
    background-color: #0056b3;
  }
  &:active{
    background-color: #00254d;
  }  
`
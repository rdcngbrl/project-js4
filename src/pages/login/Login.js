import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginInput, LoginForm, LoginStyled, LoginButton } from "./LoginStyled";
import { loginUser } from "../../api/users";

function Login({ onLogin }) {
    const [credentials, setCredentials] = useState({
        "username": "",
        "password": ""
    });

    const [correctCredentials, setCorrectCredentials] = useState(true);
    const [errorMessage, setErrorMessage] = useState(""); // Adaugă un state pentru mesajele de eroare

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        // Validare pentru a verifica dacă câmpurile sunt completate
        if (!credentials.username || !credentials.password) {
            setCorrectCredentials(false);
            setErrorMessage("Te rugăm să completezi toate câmpurile!");
            return;
        }

        loginUser(credentials.username, credentials.password, (user) => {
            if (user) {
                onLogin(user); // Asigură-te că `user` este corect și că `onLogin` primește datele necesare
                navigate("/cont"); // Redirect to my account
            } else {
                setCorrectCredentials(false);
                setErrorMessage("Username-ul sau Parola sunt incorecte!");
                // Mesaj de eroare sau alte acțiuni - login eșuat
            }
        });
    }

    function handleChange(event) {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    return (
        <LoginStyled>
            <LoginForm onSubmit={handleSubmit}>
                <h1>Formular de Autentificare</h1>
                {!correctCredentials && <h2>{errorMessage}</h2>}
                <LoginInput
                    type="text"
                    name="username"
                    placeholder="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <LoginInput
                    type="password"
                    name="password"
                    placeholder="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <LoginButton type="submit">Login</LoginButton>
                <LoginButton type="button" onClick={() => navigate("/inregistrare")}>Inregistrare</LoginButton>
                <LoginButton type="button" onClick={()=> navigate("/forgot-password")}>Am uitat parola</LoginButton>
            </LoginForm>
        </LoginStyled>
    );
}

export default Login;

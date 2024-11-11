import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InregistrareInput, InregistrareForm, InregistrareStyled, InregistrareButton } from "./InregistrareStyled";
import { addUser } from "../../api/users";

function Inregistrare({ onAddUser }) {
    const [addCredentials, setAddCredentials] = useState({
        username: "",
        password: "",
        email: "",
        fullName: "",
        subscription_id: null,
        subscription_status: "inactive",
        subscription_created_at: null,
        card_details: {
            card_number: null,
            expiry_date: null,
            cardholder_name: null,
            cvv: null
        }
    });

    const [correctAddCredentials, setCorrectAddCredentials] = useState(true);
    const [addErrorMessage, setAddErrorMessage] = useState(""); // Add a state for error messages

    const navigate = useNavigate();

    function handleAddCredentials(event) {
        event.preventDefault();

        // Verificam daca campurile sunt completate
        if (!addCredentials.username || !addCredentials.password || !addCredentials.email || !addCredentials.fullName) {
            setCorrectAddCredentials(false);
            setAddErrorMessage("Te rugăm să completezi toate câmpurile!");
            return;
        }

        console.log("Added credentials:", addCredentials);
        addUser(addCredentials, (response) => {
            console.log("User added successfully:", response);
            onAddUser(response); // Call onAddUser with the user object as the argument
            navigate("/cont");
          }, (err) => {
            console.error("Error adding user:", err);
            setAddErrorMessage("Eroare la adăugarea utilizatorului.");
          });
    }

    function handleAddCredentialsChange(event) {
        setAddCredentials({
            ...addCredentials,
            [event.target.name]: event.target.value
        });
    }

    return (
        <InregistrareStyled>
            <InregistrareForm onSubmit={handleAddCredentials}>
                <h1>Formular de Autentificare</h1>
                {!correctAddCredentials && <h2>{addErrorMessage}</h2>}
                <InregistrareInput
                    type="text"
                    name="username"
                    placeholder="username"
                    value={addCredentials.username}
                    onChange={handleAddCredentialsChange}
                />
                <InregistrareInput
                    type="password"
                    name="password"
                    placeholder="password"
                    value={addCredentials.password}
                    onChange={handleAddCredentialsChange}
                />
                <InregistrareInput
                    type="text"
                    name="email"
                    placeholder="email"
                    value={addCredentials.email}
                    onChange={handleAddCredentialsChange}
                />
                <InregistrareInput
                    type="text"
                    name="fullName"
                    placeholder="fullName"
                    value={addCredentials.fullName}
                    onChange={handleAddCredentialsChange}
                />
                <InregistrareButton type="submit">Inregistrare</InregistrareButton>
                <InregistrareButton type="button" onClick={() => navigate("/login")}>Login</InregistrareButton>
                <InregistrareButton type="button" onClick={()=> navigate("/forgot-password")}>Am uitat parola</InregistrareButton>
            </InregistrareForm>
        </InregistrareStyled>
    );
}

export default Inregistrare;

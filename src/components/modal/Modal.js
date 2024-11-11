import React from 'react';
import styled from 'styled-components';

// Stilul pentru overlay
const ModalOverlay = styled.div`
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;

// Stilul pentru containerul modal
const ModalContainer = styled.div`
    width: 80%;
    max-width: 400px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Stilul pentru butoane
const ModalButton = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    border: 1px white solid;
    margin: 0 2px;
    font-size: 16px;
    border: none;

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        background-color: #00254d;
    }
`;

// Componentul Modal
const Modal = ({ title, text, onCancel, onSubmit, isOpened }) => {
    if (!isOpened) {
        return null;
    }

    return (
        <ModalOverlay>
            <ModalContainer>
                <h2>{title}</h2>
                <p>{text}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <ModalButton onClick={onCancel}>Renunta</ModalButton>
                    <ModalButton onClick={onSubmit}>Continua</ModalButton>
                </div>
            </ModalContainer>
        </ModalOverlay>
    );
}

export default Modal;

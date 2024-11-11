import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  margin: 20px 0;
  text-align: center;
  color: #333;
`;

export const GallerySection = styled.div`
  width: 80%;
  margin: 15px 0;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 996px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 15px;
  }
`;

export const ImageCard = styled.div`
  position: relative;
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    margin: 5px;
  }

  &:hover .image-overlay {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  ${ImageCard}:hover & {
    transform: scale(1.2);
  }
`;

export const ImageOverlay = styled.div`
   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.image-overlay:hover {
  opacity: 1;
}
`;



export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #333;
  width: 50px;
  height: 50px;

  &:hover {
    background: #f5f5f5;
  }
`;
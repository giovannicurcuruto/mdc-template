import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 15px;
  }
`;

// Estilizando o campo de entrada
export const SearchInput = styled.input`
  width: 300px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003d80;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const GridCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  //background-color: #f9f9f9;
  border-radius: 8px;

  @media (max-width: 700px) {
    gap: 8px;
  }
`;

export const ImgCard = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 4px;

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;

export const ResumeCard = styled.div`
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 4px;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const CliqueMe = styled.a`
  text-decoration: none;
  color: var(--primary-color);
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);    
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: gray;
    border-radius: 8px;
    padding: 20px;
    width: 90%;
    max-width: 700px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    text-align: center;

    img{
      padding-top: 50px;
    }

    h3{
      padding-top: 25px;
    }
    
    p{
      padding-top: 25px;
      margin: 0 auto;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;       
    border-radius: 25px;
    font-size: 3rem;
    cursor: pointer;
    color: #333;
`;


import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;

  @media (max-width: 700px) {
    flex-direction: column; /* Empilha os elementos no mobile */
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
    width: 100%; /* O input ocupa toda a largura no mobile */
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
    font-size: 14px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Duas colunas no desktop */
  gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr; /* Uma coluna no mobile */
    gap: 1.5rem;
  }
`;

export const GridCard = styled.div`
 display: grid;
  grid-template-columns: 2fr 2fr;
  padding-bottom: 50px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr; /* Organiza os itens verticalmente no mobile */
    padding-bottom: 30px;
    text-align: center;
  }
`;

export const ImgCard = styled.img`
  max-width: 300px;

  @media (max-width: 700px) {
    width: 100%; /* Ajusta a largura para ocupar todo o espaço no mobile */
    max-width: none;
  }
`;

export const ResumeCard = styled.div`
  background-color: gray;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  
  height: 100px; /* Define uma altura fixa */
  min-height: 100px; /* Garantia para manter um tamanho mínimo */
  max-height: 300px;  
  width: 100%; /* Faz o card ocupar toda a largura do grid */

  @media (max-width: 700px) {
    font-size: 14px; /* Ajusta o tamanho do texto no mobile */
    height: 80px; /* Reduz um pouco a altura no mobile */
  }
`;

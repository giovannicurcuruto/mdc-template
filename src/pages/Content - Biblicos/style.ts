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
    width: 100%; /* Input ocupa toda a largura no mobile */
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
    width: 100%; /* Botão ocupa toda a largura no mobile */
    font-size: 14px; /* Reduz o tamanho da fonte */
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr; /* Uma coluna no mobile */
    gap: 1.5rem;
  }
`;

export const GridCard = styled.div`
display: grid;
  grid-template-rows: auto auto;
  gap: 10px;
  padding-bottom: 50px;
  text-align: center;


  @media (max-width: 700px) {
    gap: 8px; /* Ajusta o espaçamento entre elementos no mobile */
    padding-bottom: 30px;
  }
`;

export const ImgCard = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 4px;

  @media (max-width: 700px) {
    max-width: 100%; /* Ajusta para ocupar a largura disponível no mobile */
  }
`;


export const ResumeCard = styled.div`
background-color: blue;
padding: 10px;
border-radius: 4px;
text-align: center;
font-size: 14px;
color: white;

@media (max-width: 700px) {
  font-size: 12px; /* Reduz o tamanho da fonte no mobile */
}
`;

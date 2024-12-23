import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column; /* Elementos empilhados por padrão */
    gap: 20px; /* Espaçamento entre os itens */
    margin: 0 auto;
    padding: 20px;
    max-width: var(--max-width);

    .formulario {
        width: 100%; /* Garante que o formulário ocupe toda a largura no mobile */
    }

    .mapa {
        width: 100%; /* Garante que o mapa também ocupe toda a largura no mobile */
        height: 300px; /* Altura mínima para o mapa em dispositivos móveis */
    }

    @media (min-width: 768px) {
        flex-direction: row; /* Elementos lado a lado em telas maiores */
        align-items: start; /* Alinha os itens ao topo */
        gap: 40px; /* Maior espaçamento em telas grandes */

        .formulario, .mapa {
            width: 50%; /* Cada item ocupa 50% da largura */
        }
    }
`;

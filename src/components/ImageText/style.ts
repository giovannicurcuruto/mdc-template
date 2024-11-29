import styled from "styled-components";

export const ImageTextContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

export const ImgContent = styled.div`
  position: relative;
  width: 50%;
`;

export const BgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /* Fundo escuro translúcido */
  z-index: -1;
`;

export const ImgBox = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const TextContent = styled.div`
  width: 45%;
  text-align: left;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;
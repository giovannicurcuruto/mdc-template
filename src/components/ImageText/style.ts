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
  right: 5.2rem;
  bottom: -0.9rem;
  clip-path: polygon(0% 50%, 50% 100%, 0% 100%);
  width: 500px;
  height:500px;
  background-color: var(--primary-color);
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
  display: grid;
  place-items: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: var(--mc-grey-text);
    margin-bottom: 1.5rem;
  }
`;

export const Button = styled.button`
  
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 250px;

  &:hover {
    background-color: #005bb5;
  }
`;
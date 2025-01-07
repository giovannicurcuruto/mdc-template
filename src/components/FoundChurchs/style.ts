import styled from "styled-components";

export const ContainerChurchs = styled.div`   

`;

export const Card = styled.div`
  max-width: 24rem;
  height: 45rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #e5e7eb;
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    display: block;
  }

  img:hover{
    opacity: 0.5;
  }
`;

export const CardContent = styled.div`
  padding: 1.25rem;
`;

export const CardTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 1.3rem;
  line-height: 1.5rem;
  padding-bottom: 5px;
  color: #374151;
  margin: 0 auto;
  text-align: justify;
`;


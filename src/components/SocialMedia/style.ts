import styled from "styled-components";

export const SocialMedia = styled.div`
  padding: 2rem;
  font-size: 2.5rem;

  i {
    color: black;
  }

  a {
    color: var(--mc-grey-light);
    text-decoration: none;
  }

  a:hover {
    color: var(--mc-grey-text); /* Muda a cor no hover */
  }
`;
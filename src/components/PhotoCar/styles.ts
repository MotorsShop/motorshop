import styled from "styled-components";

export const Container = styled.div`
background-color: var(--white);
display: flex;
align-items: center;
justify-content: center;
padding: 24px;

  figure {
    max-width: 441px;
    width: 100%;
    background-color: gold;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: fill;
      width: 100%;
      background-position: center;
    }
  }
`;

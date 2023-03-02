import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  div{
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-size: 20px;
    font-family: "Lexend";
    font-weight: 600;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (max-width: 700px) {
    &>div {
      flex-direction: column;
    }
    div{
      justify-content: flex-start;
      row-gap: 20px;
    }

    
  }
`;

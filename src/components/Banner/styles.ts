import styled from "styled-components";

export const ContainerBanner = styled.div`
  background-color: var(--brand02);
  height: 580px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  div {
    margin: 0 auto;
    max-width: 748px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    div {
      flex-direction: row;
    }

    h2 {
      font-weight: 700;
      font-size: 44px;
    }
    p {
      font-size: 16px;
      font-weight: 400;
    }
    h2,
    p {
      color: var(--whiteFixed);
      text-align: center;
    }

    @media screen and (max-width: 600px) {
      div{
        
        flex-direction: column;
       
       
      }
      h2{
        font-size: 2rem;
      }
      button{
        width: 100%;
      }
       
      
    }
  }
`;

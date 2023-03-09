import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background: var(--grey00);
  width: 100%;
  min-height: 140px;
  position: relative;
  bottom: 0;
  padding: 0 5%;
  display: flex;
  align-items: center;
  margin-top:50px;
  justify-content: space-between;
  
  p {
    color: var(--whiteFixed);
    font-weight: 400;
    font-size: 0.875rem;
  }
  button {
    width: 3.125rem;
    height: 3.125rem;
    background-color: var(--grey01);
    cursor: pointer;
    z-index: 9999999;
  }

  @media screen and (max-width: 600px) {
    & {
      padding: 2.8125rem 5% 2.8125rem 5%;
      flex-direction: column;
      gap: 1.375rem;
    }
  }
`;

import styled from "styled-components";

export const ContainerMenu = styled.div`
 
  ul {
    padding: 32px 0px;
    display: flex;
    flex-direction: column;
    gap: 44px;
    li {
      display: flex;
      padding: 0 4%;
      font-weight: 600;
      justify-content: flex-start;
    }
  }
  ul:first-child {
    border-bottom: solid var(--grey06) 2px;
  }

 
`;

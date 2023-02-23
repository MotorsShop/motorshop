import styled from "styled-components";

export const ContainerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 4%;
  background-color: white;
  font-weight: 400;
  border-bottom: solid 2px var(--grey06);

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div {
    width: 100%;
    justify-content: flex-end;
    display: flex;

    ul:first-child {
      border-right: solid var(--grey06) 2px;
      
      
    }

    ul {
      height: 80px;
      display: flex;
      align-items: center;
      display: flex;
      gap: 44px;
      padding: 0 44px;

     
    }

    .container_btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @media screen and (max-width: 900px) {
      ul, .container_btns{
        display: none;
      }
    }
  }
`;

import styled from "styled-components";

export const ContainerBack = styled.div`
  width: 100%;
  position: absolute;
  background-color: var(--brand02);
  height: 480px;
  top: 0;
  z-index: -1;
`;

export const ContainerVehicle = styled.div`
  width: 100%;
  min-height: 100vh;
  section {
    width: 100%;
    max-width: 726px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    & > div,
    & > ul {
      padding: 44px 5%;
    }
  }

  .row {
    padding: 40px 10px 0 10px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-direction: row;
    gap: 3%;
  }

  .aside {
    max-width: 440px;
    width: 100%;
  }

  @media screen and (max-width: 1050px) {
    .row {
      align-items: center;
      flex-direction: column;
    }
    .aside {
      max-width: 726px;
      width: 100%;
      div {
        margin: 0 auto;
      }
    }
  }
`;

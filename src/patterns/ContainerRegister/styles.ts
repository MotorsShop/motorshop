import styled from "styled-components";

export const ContainerTotal = styled.div`
  width: 99vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 290px;
    background-color: #fdfdfd;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 48px 16px;
    border-radius: 10px;
    padding: 30px 16px;
    overflow: hidden;

    input {
      border-radius: 5px;
      border: 1px solid #dee2e6;
      color: #868e96;
      font-size: 16px;
      font-weight: 400;
      padding: 8px;
      margin-bottom: 20px;
    }

    @media screen and (min-width: 769px) {
      width: 350px;
      padding: 40px 24px;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }

    label {
      font-size: 14px;
      color: #212529;
      font-weight: 500;
      margin-bottom: 5px;
    }

    .row {
        display: flex;
        flex-direction: column;
      div {
        width: 100%;
        display: flex;
        gap: 10px;
        justify-content: space-between;
        margin: 20px 0;
      }
    }
    p {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    span {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;

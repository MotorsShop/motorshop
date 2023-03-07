import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  h2 {
    font-size: 16px;
    font-family: "Lexend";
    font-weight: 500;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .error-message{
    margin-top: 10px;
    color:red;
    font-size: 12px;
  }
  .input-url {
    display: flex;
    flex-direction: column;
    gap: 10px;
    div {
      display: flex;
      justify-content: center;
      button {
        margin: 9px 0 0 0;
        height: 50px;
      }
      label {
        margin: 10px 0 0 0;
      }
    }
  }
  input {
    width: 100%;
    padding: 0 16px;
    margin-top: 10px;
    height: 48px;
    border: var(--grey07) 1.5px solid;
    color: var(--grey03);
    outline: var(--grey03) 1.5px solid;
  }
  .container-flex {
    gap: 8px;
    display: flex;
    justify-content: space-between;
  }
  .container-btns_create {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
  }
  textarea {
    margin-top: 10px;
    width: 100%;
    resize: none;
    border: var(--grey07) 1.5px solid;
    padding: 10px;
    color: var(--grey03);
    outline: var(--grey03) 1.5px solid;
  }
`;

export const InputForm = styled.input`
  height: 24px;
  width: 100%;
  border: 1.5px solid #838080;
  border-radius: 4px;
  padding: 16px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    margin-top: 10px;
  }
`;

export const ContainerUrl = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
`;

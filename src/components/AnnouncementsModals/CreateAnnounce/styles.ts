import styled from "styled-components";


export const ContainerForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 98%;
  gap: 10px;
  
  textarea{
    resize: none;
    padding: 15px;
  }
  label{
    font-weight: 500;
  }
  .container-flex{
    display: flex;
    gap: 15px;
    input{
      margin-top: 10px;
    }
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
`;

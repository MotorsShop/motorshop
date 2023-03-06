import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  row-gap: 19px;
  .container-btns{
    display: flex;
    gap:8px;
    button{
    background-color: var(--grey06);
    border-radius: 24px;
    padding: 5px 12px;
    color: var(--grey03);
    }
  }
  .container-input{
    display: flex;
    flex-direction: column;
    max-width: 672px;
    width: 100%;
    height: 128px;
    align-items: flex-end;
    border: solid var(--grey06) 1.5px;
    padding: 10px 20px 10px 20px;
    .text-area{
      width: 100%;
      border: none;
      outline: none;
      resize: none;
      height: 100%;
    }
  }
  .container-user{

    display: flex;
    gap: 4px;
    align-items: center;
    span{
      list-style: circle;
      font-size: 12px;
      font-family: 'Inter';
    }
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
  }
`;

import styled, { css } from "styled-components";

interface containerProps {
  types?: "navbar" | "close" | "withoutClose";
  width?: string;
  borderColor?: string;
  fontColor?: string;
  padding?: string;
}

export const Container = styled.div<containerProps>`
  background-color: rgba(0, 0, 0, 0.48);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  h3 {
    margin: 0;
    font-family: "Lexend";
    font-size: 16px;
    font-weight: 500;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap:25px;
    padding: 25px 0px;
    border-radius: 8px;
    background-color: white;
    max-width: 530px;
    width: 100%;
    div {
      display: flex;
    }
    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 24px;
      height: max-content;

      button {
        height: max-content;
      }
    }
    .body {
      padding: 0 24px;
      flex-direction: column;
      gap: 20px;
    }
    .container-btns{
        display: flex;
        justify-content: flex-end;
        padding: 0 15px;
        gap: 12px;
      }
  }
`;

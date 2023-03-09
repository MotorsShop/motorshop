import styled, { css } from "styled-components";

interface containerProps {
  types?: "navbar" | "close" | "withoutClose";
  width?: string;
  borderColor?: string;
  fontColor?: string;
  padding?: string;
}

export const Container = styled.div<containerProps>`
  background-color: rgba(0, 0, 0, 0.5);;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
   h3{
    font-family: 'Lexend';
    font-size: 16px;
    font-weight: 500;
   }
  &>div {
    border-radius: 8px;
    background-color: white;
    max-width: 520px;
    width: 100%;
    margin: 0 5%;
    div {
      display: flex;
    }
    .header {
      display: flex;
      justify-content: space-between;
      padding: 24px;
      
    }
    .body {
      padding: 24px;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

import styled, { css } from "styled-components";



export const Container = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999999;
  .header {
    position: sticky;
    top: 0;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 24px;
    padding: 15px 24px;

    button {
      height: max-content;
      img {
        width: 18px;
      }
    }
  }
  h3 {
    margin: 0;
    font-family: "Lexend";
    font-size: 16px;
    font-weight: 500;
  }
  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 25px;
    border-radius: 8px;
    background-color: white;
    max-width: 520px;
    width: 100%;
    z-index: 2;
    height: 90vh;
    overflow: auto;
    padding-bottom: 50px;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-button {
      width: 0px;
    }
    &::-webkit-scrollbar-thumb {
      background: #4529e6;
      border-radius: 50px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }

    &::-webkit-scrollbar-track {
      background: #666666;
      border: 0px none #ffffff;
      border-radius: 50px;
    }

    div {
      display: flex;
    }

    .body {
      padding: 0 24px;
      flex-direction: column;
      gap: 20px;
    }
    .container-btns {
      display: flex;
      justify-content: flex-end;
      padding: 0 15px;
      gap: 12px;
    }
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
`;

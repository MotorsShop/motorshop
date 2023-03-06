import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 100%;
  padding: 40px 3%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  div {
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;

    h2{
        margin-bottom: 25px;
    }
    ul {
      justify-content: flex-start;
      row-gap: 16px;
      column-gap: 8px;
      display: flex;
      flex-wrap: wrap;
      li {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 108px;
        height: 108px;

        background-color: var(--grey07);

        figure {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 94px;
          overflow: hidden;
          height: 54px;

          img {
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

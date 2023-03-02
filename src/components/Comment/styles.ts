import styled from "styled-components";

export const Container = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 32px;

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

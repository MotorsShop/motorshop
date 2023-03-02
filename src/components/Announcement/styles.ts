import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 312px;
  flex-shrink: 0;
  overflow: hidden;
  margin-right: 48px;
  gap: 16px;
  .container-btns {
    display: flex;
    gap: 20px;
  }
  .container-text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    .data {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  figure {
    width: 312px;
    height: 152px;
    overflow: hidden;
    vertical-align: middle;
    margin: 16px 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

import styled from "styled-components";

export const ContainerUser = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-left: 44px;
  div {
    text-align: center;
    vertical-align: middle;
    background-color: var(--brand02);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-weight: 700;
    font-size: 14px;
    line-height: 32px;
    p {
      color: var(--whiteFixed);
      vertical-align: middle;
    }
  }
  @media screen and (max-width: 900px) {
    & {
      display: none;
    }
  }
`;

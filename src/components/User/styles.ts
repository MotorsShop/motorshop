import styled from "styled-components";
interface containerProps {
  fontColor: string;
}
export const ContainerUser = styled.div<containerProps>`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--brand02);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    p {
      color: var(--whiteFixed);
      vertical-align: middle;
    }
  }

  p {
    color: ${({ fontColor }) => (fontColor ? fontColor : "black")};
  }

  @media screen and (max-width: 900px) {
    & {
      display: none;
    }
  }
`;

import styled, { css } from "styled-components";
interface containerProps {
  size: "small" | "medium" | "big";
  fontColor: string;
  lines?: string;
}
export const ContainerDescription = styled.div<containerProps>`
  gap: 16px;
  display: flex;
  flex-direction: column;
  height: 70px;
  h2,
  p {
    text-align: left;
    color: ${({ fontColor }) => (fontColor ? fontColor : "")};
  }
  h2 {
    text-align: left;
  }
  .limit-css {
    overflow: hidden;
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: ${({ lines }) => (lines ? lines : "1")};
    -webkit-box-orient: vertical;
  }
  ${({ size }) =>
    size === "small" &&
    css`
      h2 {
        font-size: 16px;
        font-weight: 600;
      }
      p {
        font-size: 14px;
        font-weight: 400;
      }
    `}

  ${({ size }) =>
    size === "big" &&
    css`
      h2 {
        font-size: 20px;
        font-weight: 600;
        line-height: 25px;
      }
      p {
        font-size: 16px;
        font-weight: 400;
      }
    `}
`;

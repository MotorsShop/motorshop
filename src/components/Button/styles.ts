import styled from "styled-components";

interface containerProps {
  color?: string;
  width?: string;
  borderColor?: string;
  fontColor?: string;
  padding?: string;
}

export const ContainerButton = styled.button<containerProps>`
  ${({ color }) => (color ? `background-color: ${color}` : `background: none`)};
  ${({ width }) => (width ? `width: ${width}` : "width: auto")};
  color: ${({ fontColor }) => (fontColor ? fontColor : "black")};
  border: ${({ borderColor }) =>
    borderColor ? `2px ${borderColor} solid` : "none"};
  height: 48px;
  border-radius: 4px;
  padding: ${({ padding }) => (padding ? padding : "10px 15px")};
  font-weight: 600;
  font-size: 16px;
`;

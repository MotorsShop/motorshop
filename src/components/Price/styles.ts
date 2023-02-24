import styled from "styled-components";
interface containerProps{
  fontColor: string
}
export const Container = styled.span<containerProps>`
  font-size: 16px;
  font-weight: 500;
  color: ${({fontColor})=> fontColor ? fontColor : "black"};
`;

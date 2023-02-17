import styled, {css} from "styled-components";

interface containerProps {
  types?: "navbar" | "close"| "withoutClose" ; 
  width?: string;
  borderColor?: string;
  fontColor?: string;
  padding?:string;

}

export const ContainerModal = styled.div<containerProps>`
  display: none;
  position: absolute;
  background-color: white;
  z-index: 99999;
  ${({types}) => types=="navbar"  && css`
    width: 100%;
    @media screen and (max-width: 900px) {
    & {
      display: block;
    }
  }
  `}
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height:100vh;
`;
import styled, {css} from "styled-components";

interface containerProps {
  types?: "navbar" | "close"| "withoutClose" ; 
  width?: string;
  borderColor?: string;
  fontColor?: string;
  padding?:string;

}

export const ContainerModal = styled.div<containerProps>`
  display: block;
  position: absolute;
  background-color: white;
  z-index: 99999;
  width: 250px;
  margin-right: 10px;
  ${({types}) => types=="navbar"  && css`
    
    @media screen and (max-width: 900px) {
    & {
      width: 100%;
      margin-right: 0;
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
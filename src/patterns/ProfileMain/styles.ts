import styled from "styled-components";

export const ContainerProfile = styled.div`
.container{
    display: flex;
    justify-content: center;
    
    .container-user{
    width: 100%;
    max-width: 1200px;
    background-color: var(--grey10);
    z-index: 100;
    margin: 75px 16px 0 16px;
    border-radius: 4px;
    padding: 42px;
    display: flex;
    flex-direction: column;
    gap: 24px;   
 }

 .container-back{
    background-color: var(--brand01);
    height: 300px;
    width: 100%;
    position: absolute;
 }
}

`;

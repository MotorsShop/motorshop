import styled from "styled-components";

export const ContainerTotal = styled.div`
    width: 99vw;
    height: 290vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 769px){
        height: 250vh;
    }
`
export const Container = styled.form`
    width: 290px;
    height: 1550px;
    background-color: #FDFDFD;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 48px 16px;
    border-radius: 10px;
    padding: 30px 16px;
    overflow: hidden;
    

    @media screen and (min-width: 769px){
        width: 350px;
        height: 1550px;
        padding: 40px 24px;
    }

    h1{
        font-size: 24px;
        margin-bottom: 16px;
    }

    label{
        font-size: 14px;
        color: #212529;
        font-weight: 500;
        margin-bottom: 5px;
    }
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
    }
    p{
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    span{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`
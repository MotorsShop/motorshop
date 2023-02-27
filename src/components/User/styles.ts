import styled, { css } from "styled-components";

interface containerProps {
  fontColor: string;
  profile?: boolean;
}

export const ContainerUser = styled.div<containerProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  div {
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    ${({ profile }) =>
      profile
        ? css`
            flex-direction: column;
            gap: 24px;

            p{
              font-size: 20px;
              font-weight: 500;
            }

            div{
              flex-direction: row;
            }

            .profile-name{
              font-size: 36px;
              font-family: 'Inter'
              font-weight: 500;
            }
            &>div:first-child{
              justify-content: center;
              align-items: center;
              height: 104px;
              width: 104px;
              background-color: var(--brand02);
              border-radius: 50%;
            }

            
            &>div:nth-child(2){
              display: flex;
              gap:9px;
            }
            @media screen and (max-width: 900px) {
              gap: 8px;
      
              & {
                display: "flex";
              }
            }
          }
        `
        : css`
    gap:15px;

    div{
    display: flex;
    justify-content: center;
    align-items: center;
    
    .profile-name{
      font-size: 14px;
      font-family: 'Inter'
      font-weight: 600;
      color: white;
    }

    }
    div:first-child {
    width: 36px;
    height: 36px;
    font-weight: 500;
    background-color: var(--brand02);
    border-radius: 50%;
    
  }

  @media screen and (max-width: 900px) {
    flex-direction: row;
    align-items: center;
    
    & {
      display: "none"
    };
  `}

    .profile-name {
      color: ${({ fontColor }) => (fontColor ? fontColor : "black")};
      font-family: "Lexend", sans-serif;
    }

    .profile-type {
      padding: 4px 8px;
      background-color: var(--brand04);
      color: var(--brand01);
    }
  }
`;

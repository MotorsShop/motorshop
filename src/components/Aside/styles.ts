import { px } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  .cotainer-fixed_profile {
    width: 100%;
    background-color: white;
    padding: 32px 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    p:nth-child(2) {
      text-align: center;
      max-width: 350px;
      width: 100%;
      font-weight: 400;
    }
  }

  .container-btn {
    max-width: 500px;
    display: flex;
    justify-content: center;
  }
  .whatsapp {
    width: 50px;
    height: 50px;
    padding-left: 20px;
  }
  .what_img {
    width: 48px;
    height: 48px;
    border-radius: 10%;
  }
`;

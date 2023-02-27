import styled from "styled-components";
interface containerProps {
  fontColor: string;
}

export const ContainerBlue = styled.div`
  height: 357px;
  width: 100vw;
  background-color: var(--brand01);
  position: absolute;
  z-index: -1;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 155px;
  background-color: var(--gray10);
`;

export const ContainerImgUser = styled.div<containerProps>`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--brand02);
    width: 104px;
    height: 104px;
    border-radius: 50%;
    font-weight: 500;
    font-size: 36px;
    line-height: 32px;
    p {
      color: var(--whiteFixed);
      vertical-align: middle;
    }
  }

  p {
    color: ${({ fontColor }) => (fontColor ? fontColor : "black")};
  }
`;

export const ContainerDescriptonUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 406px;
  width: 1248px;
  background: #fdfdfd;
`;

export const ContainerIntern = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  height: 80%;
`;

export const ContainerUserAdm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  gap: 0.6rem;

  p:nth-child(1) {
    font-weight: 600;
  }
`;
export const ContainerUserAdmTag = styled.p`
  background-color: #edeafd;
  width: 98px;
  color: #4529e6;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Demostrativo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
`;

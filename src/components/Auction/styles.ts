import styled from "styled-components";

export const ContainerAuction = styled.div`
  height: 388px;
  width: 735px;
  margin-right: 30px;
  flex-shrink: 0;
  text-align: center;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  z-index: -1;

  .container-btns {
    gap: 16px;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    height: 62px;
    display: flex;
    align-items: center;
    background-color: var(--brand01);
    padding: 0 36px;

    p {
      color: var(--whiteFixed);
      font-size: 16px;
      font-weight: 600;
    }
  }
  .container-front {
    width: inherit;
    height: inherit;
    position: absolute;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

    .container-text {
      display: flex;
      flex-direction: column;
      padding: 24px 36px;
      gap: 28px;
      .data {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  figure {
    overflow: hidden;
    vertical-align: middle;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

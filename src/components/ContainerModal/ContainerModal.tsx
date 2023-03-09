import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Container, Overlay,  } from "./styles";

interface Iprops {
  children: ReactNode;
  open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  title: string;
}

export default function ContainerModal({title, children, open, close }: Iprops) {
  function handleChildClick(event: any) {
    event.stopPropagation();
    close(false)
  }
  return open ? (
    <Container >
      <div>
        <div className="header">
          <h3>{title}</h3>
          <button  onClick={handleChildClick}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/btnClose.png" alt="btn" />
          </button>
        </div>
        <div className="body">{children}</div>
      </div>
      <Overlay  onClick={handleChildClick}/>
    </Container>
  ) : (
    <></>
  );
}

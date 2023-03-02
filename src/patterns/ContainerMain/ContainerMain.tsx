import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";
import React from "react";
import Footer from "@/components/Footer/Footer";
import { Main } from "./styles";

interface Iprops {
  children: ReactNode;
}

export default function ContainerMain({ children }: Iprops) {
  return (
    <Main>
      
      <Navbar />
      <div className="container-pages">{children}</div>
      <Footer />
    </Main>
  );
}

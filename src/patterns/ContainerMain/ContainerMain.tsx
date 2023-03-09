import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";
import React from "react";
import Footer from "@/components/Footer/Footer";
import { ToastContextProvider } from "@/contexts/ToastyContext";
import Popup from "@/components/Popup/Popup";
import ModalConfirme from "@/components/ModalConfirm/ModalConfirm";
interface Iprops {
  children: ReactNode;
}

export default function ContainerMain({ children }: Iprops) {
  return (
    <>
      <ToastContextProvider>
        <Navbar />
        <Popup/>
        <ModalConfirme/>
        <div className="container-pages">{children}</div>
        <Footer />
      </ToastContextProvider>
    </>
  );
}

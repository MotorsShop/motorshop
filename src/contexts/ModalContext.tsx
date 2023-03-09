import { IAnouncementRequest, IAnouncement } from "@/@types/PropsComponents";
import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    Dispatch,
    SetStateAction,
  } from "react";
  
  interface ContextData {
    modalEdite: boolean;
    setModalEdite: Dispatch<SetStateAction<boolean>>;
    modalCreate: boolean;
    setModalCreate: Dispatch<SetStateAction<boolean>>;
    setModalCreateData: Dispatch<SetStateAction<null | IAnouncementRequest>>;
    setModalEditeData: Dispatch<SetStateAction<null | IAnouncement>>;
    modalCreateData: null | IAnouncementRequest;
    modalEditeData:null | IAnouncement;
  }
  
  interface ContextProps {
    children: ReactNode;
  }
  
  export const ModalContext = createContext({} as ContextData);
  
  export const ToastContextProvider = ({ children }: ContextProps) => {
    const [modalEdite, setModalEdite] = useState(false);
    const [modalCreate, setModalCreate] = useState(false);
    const [modalCreateData, setModalCreateData] = useState<null | IAnouncementRequest>(null);
    const [modalEditeData, setModalEditeData] = useState<null | IAnouncement>(null);
  
    return (
      <ModalContext.Provider value={{setModalCreateData, modalCreateData, modalEditeData, setModalEditeData, modalCreate, setModalCreate, modalEdite, setModalEdite }}>
        {children}
      </ModalContext.Provider>
    );
  };
import {
    createContext,
    useState,
    useEffect,
    ReactNode,
    Dispatch,
    SetStateAction,
  } from "react";
  
  interface ToastContextData {
    toastAtivo: boolean;
    setToastAtivo: Dispatch<SetStateAction<boolean>>;
  }
  
  interface ToastContextProps {
    children: ReactNode;
  }
  
  export const ToastContext = createContext({} as ToastContextData);
  
  export const ToastContextProvider = ({ children }: ToastContextProps) => {
    const [toastAtivo, setToastAtivo] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setToastAtivo(false);
      }, 3000);
    }, []);
  
    return (
      <ToastContext.Provider value={{ toastAtivo, setToastAtivo }}>
        {children}
      </ToastContext.Provider>
    );
  };
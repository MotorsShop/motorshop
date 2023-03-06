import { ReactNode, useState, createContext, Dispatch, SetStateAction} from "react";
import React from "react";

export interface AuthContextData {
    isLogged: boolean
    setIsLogged: Dispatch<SetStateAction<boolean>>;
    isOpenMenu: boolean
    setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export interface AuthContextProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthContextProps) =>{
    const [isOpenMenu , setOpenMenu] = useState<boolean>(false);
    const [isLogged , setIsLogged] = useState<boolean>(true);

    

    return (
        <AuthContext.Provider value ={{isLogged, setIsLogged, isOpenMenu, setOpenMenu}}>
            {children}
        </AuthContext.Provider>
    )
}
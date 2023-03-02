import { ReactNode, useState, createContext, Dispatch, SetStateAction, useEffect} from "react";
import api from  "../services/api";
import React from "react";

export interface ApiContextData { 
    annoucements: IList[]
    annoucement: IList| null
    retriveAnnoucement: (data: string | string[]) => void;
    setAnnoucement: Dispatch<SetStateAction<IList| null>>;
}

export interface IList {
    id: string;
    title: string;
    price: number;
    km: number;
    cover_img: string;
    description: string;
    vehicle_type: string;
    year: number;
    ad_type: string;
    created: string;
    published: boolean;
    sold: boolean;
}

export interface ApiContextProps {
    children: ReactNode
}

export const ApiContext = createContext<ApiContextData>({} as ApiContextData);

export const ApiProvider = ({ children }: ApiContextProps) =>{
    const [annoucements, setAnnoucements] = useState<never[]>([])
    const [annoucement, setAnnoucement] = useState<IList| null>(null)

    useEffect(()=>{
        listAnnoucements()
    }, [])    


    const listAnnoucements = async  () => {
        try {
          const response = await api.get('/anouncement');
          setAnnoucements(response.data)
        } catch (error) {
          console.error(error);
        }
      }

      const retriveAnnoucement = async (data:string | string[]) => {
        try {
          const response = await api.get(`/anouncement/${data}`);
          setAnnoucement(response.data)
        } catch (error) {
          console.error(error);
        }
      }
    return (
        <ApiContext.Provider value ={{annoucements, annoucement, retriveAnnoucement, setAnnoucement}}>
            {children}
        </ApiContext.Provider>
    )
}
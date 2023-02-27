import { ReactNode, useState, createContext, Dispatch, SetStateAction, useEffect} from "react";
import internal from "stream";
import api from  "../services/api"
export interface ApiContextData { 
    annoucements: IList[]
}

export interface IList {
    title: string
    price: number
    km: number
    cover_img: string
    description: string
    vehicle_type: string
    year: number
    ad_type: string
    created: string
    published: boolean
    sold: boolean
}

export interface ApiContextProps {
    children: ReactNode
}

export const ApiContext = createContext<ApiContextData>({} as ApiContextData);

export const ApiProvider = ({ children }: ApiContextProps) =>{
    const [annoucements, setAnnoucements] = useState<never[]>([])

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

    return (
        <ApiContext.Provider value ={{annoucements}}>
            {children}
        </ApiContext.Provider>
    )
}
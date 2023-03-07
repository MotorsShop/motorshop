import {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import api from "../services/api";
import React from "react";
import { AxiosResponse } from "axios";
export interface ApiContextData {
  annoucements: IList[];
  annoucement: IList | null;
  comment: (annoucementId: string, authorId: string, data: Idata) => void;
  post: (data: AnnouncementRequest, closemodal: any) => void;
  update: (data: AnnouncementRequest, closemodal: any, id?: string) => void;
  setAnnoucement: Dispatch<SetStateAction<IList | null>>;
}

export interface IComment {
  id: string;
  comment: string;
  authorId: string;
  created: Date;
  AnouncementId: string;
  user: {
    name: string;
    id: string;
    email: string;
    cpf: string;
    phone: string;
    date_of_birth: string;
    description: string;
    type: string;
  };
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
  user: any;
  comments: Comment[];
  images: Images[];
}
export interface AnnouncementRequest {
  title?: string;
  price?: number | "";
  km?: number | "";
  cover_img?: string;
  description?: string;
  vehicle_type?: string;
  year?: number | "";
  ad_type?: string;
  images?: string[];
}

export interface Comment {
  id: string;
  comment: string;
  authorId: string;
  anouncementId: string;
  created: string;
}

export interface Images {
  id: string;
  url: string;
  anouncementId: string;
}

export interface Idata {
  comment: string;
  authorId: string;
}
export interface ApiContextProps {
  children: ReactNode;
}

export const ApiContext = createContext<ApiContextData>({} as ApiContextData);

export const ApiProvider = ({ children }: ApiContextProps) => {
  const [annoucements, setAnnoucements] = useState<never[]>([]);
  const [annoucement, setAnnoucement] = useState<IList | null>(null);
  const [comments, setComments] = useState<AxiosResponse<any, any>>();
  const [state, setState] = useState<AxiosResponse<any, any>>();
  // const [updated, setUpdated] = useState<AxiosResponse<any, any>>();
  useEffect(() => {
    listAnnoucements();
  }, [comments, state]);

  const listAnnoucements = async () => {
    try {
      const response = await api.get("/anouncement");
      setAnnoucements(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const comment = async (
    annoucementId: string,
    authorId: string,
    data: Idata
  ) => {
    try {
      const response = await api.post(`/comment/${annoucementId}`, data);
      if (response) {
        setComments(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const post = async (data: AnnouncementRequest, closemodal: any) => {
    try {
      const response = await api.post(`anouncement`, data);
      closemodal()
      setState(response)
    } catch (error) {
      console.error(error);
    }
  };

  const update = async (data: AnnouncementRequest, closemodal: any, id?: string) => {
    try {
      const response = await api.patch(`anouncement/${id}`, data);
      closemodal()
      setState(response)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        annoucements,
        annoucement,
        setAnnoucement,
        comment,
        post,
        update,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

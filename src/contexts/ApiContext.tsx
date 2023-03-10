import {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { api } from "../services/api";
import React from "react";
import { AxiosResponse } from "axios";
import { IAnouncement } from "@/@types/PropsComponents";
import Router from "next/router";
import { IUser, Ilogin } from "@/@types/PropsComponents";
import { setCookie, parseCookies, destroyCookie } from "nookies";
export interface ApiContextData {
  annoucements: IAnouncement[];
  annoucement: IAnouncement | null;
  retriveUser: (
    id: string | string[] | undefined
  ) => Promise<AxiosResponse<any, any> | undefined>;
  comment: (annoucementId: string, data: Idata) => Promise<void>;
  post: (data: AnnouncementRequest, closemodal: any) => void;
  deleteAnnouncement: (id: string) => void;
  update: (data: AnnouncementRequest, closemodal: any, id?: string) => void;
  setAnnoucement: Dispatch<SetStateAction<IAnouncement | null>>;
  setListToast: Dispatch<SetStateAction<IlistToast[]>>;

  confirmeModal: IModalConfirme[];
  setConfirmeModal: Dispatch<SetStateAction<IModalConfirme[]>>;
  logout: () => void;
  login: (data: Ilogin) => Promise<void>;
  register: (data: IUserRequest) => Promise<void>;
  currentUser: IUser | null;
  isOpenMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  listToast: IlistToast[];
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

export interface AnnouncementRequest {
  title?: string;
  price?: number | "";
  km?: number | "";
  cover_img?: string;
  description?: string;
  vehicle_type?: "car"| "motorbike";
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
  authorId: string | undefined;
}

export interface ApiContextProps {
  children: ReactNode;
}

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  description: string;
  type: string;
  password: string;
  date_of_birth: string;
}

interface IlistToast {
  title: string;
  text: string;
  header: string;
}

interface IModalConfirme {
  functionAction: (id: any) => any;
  title: string;
  text: string;
  header: string;
}

export const ApiContext = createContext<ApiContextData>({} as ApiContextData);

export const ApiProvider = ({ children }: ApiContextProps) => {
  const [annoucements, setAnnoucements] = useState<never[]>([]);
  const [annoucement, setAnnoucement] = useState<IAnouncement | null>(null);
  const [comments, setComments] = useState<AxiosResponse<any, any>>();
  const [state, setState] = useState<AxiosResponse<any, any>>();
  const [listToast, setListToast] = useState<IlistToast[]>([]);
  const [confirmeModal, setConfirmeModal] = useState<IModalConfirme[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    listAnnoucements();
  }, [state]);

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    const { "nextauth.userId": id } = parseCookies();
    console.log(id)
    if (token) {
      retriveUser(id).then((response) => {
        setCurrentUser(response?.data);
      });
    }
  }, [state]);

  const listAnnoucements = async () => {
    try {
      const response = await api.get("/anouncement");
      setAnnoucements(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const retriveUser = async (id: string | string[] | undefined) => {
    try {
      const response = await api.get(`user/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const comment = async (annoucementId: string, data: Idata) => {
    try {
      const response = await api.post(`/comment/${annoucementId}`, data);
      if (response) {
        setComments(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  async function login(data: Ilogin) {
    try {
      const response = await api.post("/login", data);
      setCookie(undefined, "nextauth.token", response.data.token, {
        maxAge: 60 * 60 * 8,
      });
      setCookie(undefined, "nextauth.userId", response.data.user.id, {
        maxAge: 60 * 60 * 8,
      });
      setState(response);
      api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`
      Router.push("/profile");
      
    } catch (error) {
      console.error(error);
    }
  }

  async function register(data: IUserRequest) {
    try {
      const response = await api.post("/user", data);
      console.log(response);
      Router.push("/login");
      setState(response);
    } catch (error) {
      console.error(error);
    }
  }

  function logout() {
    destroyCookie(undefined, 'nextauth.token')
    destroyCookie(undefined, 'nextauth.userId')
    setCurrentUser(null);
    Router.push("/");
  }

  const post = async (data: AnnouncementRequest, closemodal: any) => {
    try {
      const response = await api.post(`anouncement`, data);
      console.log(response);
      closemodal();
      setState(response);
      setListToast([
        ...listToast,
        {
          title: "Seu anúncio foi criado com sucesso!",
          header: "Sucesso!",
          text: "Agora você poderá ver seus negócios crescendo em grande escala",
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const update = async (
    data: AnnouncementRequest,
    closemodal: any,
    id?: string
  ) => {
    try {
      const response = await api.patch(`anouncement/${id}`, data);
      console.log(response.data)
      console.log( data)
      closemodal();
      setState(response);
      setListToast([
        ...listToast,
        {
          title: "Seu anúncio foi atualizado com sucesso!",
          header: "Sucesso!",
          text: "Agora você poderá ver seus negócios crescendo em grande escala",
        },
      ]);
      
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAnnouncement = async (id: string) => {
    console.log(id);
    try {
      const response = await api.delete(`anouncement/${id}`);
      setState(response);
      setListToast([
        ...listToast,
        {
          title: "Seu anúncio foi deletado com sucesso!",
          header: "Sucesso!",
          text: "Crie mais anúncios e alcance mais pessoas",
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ApiContext.Provider
      value={{
        register,
        logout,
        currentUser,
        isOpenMenu,
        login,
        setOpenMenu,
        retriveUser,
        deleteAnnouncement,
        setListToast,
        annoucements,
        annoucement,
        setAnnoucement,
        comment,
        post,
        update,
        listToast,
        confirmeModal,
        setConfirmeModal,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

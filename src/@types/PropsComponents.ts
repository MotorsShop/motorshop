import { ReactNode } from "react";
export interface IpropsBotton{   
    color?: string;
    width?: string;
    value?: string;
    fontColor?: string
    borderColor?: string;
    Propsfunction?: any;
    padding?:string;
}

export interface IComment {
  id: string;
  comment: string;
  authorId: string;
  anouncementId: string;
  created: string;
  author: IUser
}


export interface IpropsModal{
    types?: "navbar" | "close"| "withoutClose" ; 
    children?: ReactNode;
    functionClose?:any;
}

export interface Images {
    id: string;
    url: string;
    anouncementId: string;
  }
  
  export interface IAnouncement {
    id: string;
    title: string;
    price: number;
    km: number;
    cover_img: string;
    description: string;
    vehicle_type: "car"| "motorbike";
    year: number;
    ad_type: string;
    created: string;
    published: boolean;
    sold: boolean;
    user: any;
    comments: IComment[];
    images: Images[] | undefined;
  }

  export interface IAnouncementRequest {
    id: string;
    title: string;
    price: number;
    km: number;
    cover_img: string;
    description: string;
    vehicle_type: string;
    year: number;
    ad_type: "car"| "motorbike";
    created: string;
    published: boolean;
    sold: boolean;
    user: any;
    comments: IComment[];
    images: string[] | Images[] ;
  }
  
  
  export interface IUser {
    id: string;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    description: string;
    type: string;
    password?: string;
    date_of_birth: string;
    anouncements: IAnouncement[]
  }
  

  export interface Ilogin {
    email: string;
    password: string;
  }
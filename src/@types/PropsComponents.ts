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

export interface IpropsModal{
    types?: "navbar" | "close"| "withoutClose" ; 
    children?: ReactNode;
    functionClose?:any;
}
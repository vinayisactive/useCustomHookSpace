import React from "react";

export interface BlogInterface {
    url: string;
    coverImageUrl: string;
    title: string;
    authorImageUrl: string;
    authorName: string;
  }

export interface CodeSnippetInterface {
  primaryLang: string;
  hookname: string;
}

export interface HookWithDescriptionInterface {
  hookname: string;
  description: any;
  code: string;
  demo?: boolean;
  toUse?: string;
}

export interface CustomHookInterface {
  hookname: string;
  descOne: any;
  descTwo: any;
  code: string;
  toUseCode: string;
  toUse: string;
}

export interface MaxWithWrapperInterface {
  children: React.ReactNode; 
  className?: string; 
}

export interface HomeBackgroundInterface {
  ButtonArr: string[];
  ButtonArrTwo: string[];
}

export interface SignUpInterface {
  email: string;
  password: string,
  name: string
}

export type LoginInterface = Pick<SignUpInterface, "email" | "password">;


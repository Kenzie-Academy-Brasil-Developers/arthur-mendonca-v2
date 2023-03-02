import React from 'react';

export interface iProductsContext {
  products: iProductsResponse[];
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  searchResult: iSearchResult[];
  setSearchResult: React.Dispatch<React.SetStateAction<iSearchResult[]>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  cartItens: iCartItens[];
  setCartItens: React.Dispatch<React.SetStateAction<iCartItens[]>>;
  buyValue: number;
  setBuyValue: React.Dispatch<React.SetStateAction<number>>;
}

export interface iProductsProps {
  children: React.ReactNode;
}

export interface iProductsResponse {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  product: any;
  length: number;
}

export type iSearchResult = iProductsResponse;

export type iCartItens = iProductsResponse;

export type iItensInCart = iProductsResponse;

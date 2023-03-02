import { createContext, useEffect, useState } from 'react';
import {
  iProductsResponse,
  iProductsProps,
  iProductsContext,
  iSearchResult,
  iCartItens,
} from './@types';
import { api } from '../../services/request';
import UserProvider from '../userContext';

export const CartContext = createContext({} as iProductsContext);

function CartProvider({ children }: iProductsProps) {
  const token = localStorage.getItem('@token');
  const [products, setProducts] = useState<iProductsResponse[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [searchResult, setSearchResult] = useState<iSearchResult[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [buyValue, setBuyValue] = useState(0);
  const [cartItens, setCartItens] = useState<iCartItens[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get<iProductsResponse[]>('/products', {
          headers: {
            authorization: ` Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div>
      <CartContext.Provider
        value={{
          setOpenModal,
          openModal,
          products,
          setSearchResult,
          searchResult,
          searchValue,
          setSearchValue,
          cartItens,
          setCartItens,
          buyValue,
          setBuyValue,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
}

export default CartProvider;

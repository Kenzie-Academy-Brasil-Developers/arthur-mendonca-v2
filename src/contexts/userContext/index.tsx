import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  iCreateUserResponse,
  iFormRegisterNewUser,
  iLoginUser,
  iProviderProps,
  iUserContext,
} from './@types';
import { api } from '../../services/request';

export const UserContext = createContext({} as iUserContext);

function UserProvider({ children }: iProviderProps) {
  const [user, setUser] = useState<iCreateUserResponse | null>(null);
  const navigate = useNavigate();

  async function userRegister(formData: iFormRegisterNewUser) {
    try {
      const response = await api.post('/users', formData);
      console.log(response);
      navigate('/');
      // TOKEN DE SUCESSO
    } catch (error) {
      console.log(error);
    }
  }

  async function loginUser(formData: iLoginUser) {
    try {
      const response = await api.post('/login', formData);
      localStorage.setItem('@token', response.data.accessToken);
      setUser(response.data);
      navigate('/shop');
    } catch (error) {
      console.log(error);
      localStorage.removeItem('@token');
    }
  }

  function userLogout() {
    setUser(null);
    localStorage.removeItem('@token');
    navigate('/');
  }

  return (
    <div>
      <UserContext.Provider
        value={{ user, userRegister, loginUser, userLogout }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default UserProvider;

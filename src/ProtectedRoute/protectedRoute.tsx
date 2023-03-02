import { Outlet, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/userContext/index';

function ProtectedRoute() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const token = localStorage.getItem('@token');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, []);

  return <div>{token ? <Outlet /> : navigate('/')}</div>;
}

export default ProtectedRoute;

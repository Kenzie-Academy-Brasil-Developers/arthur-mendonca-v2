import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import ProtectedRoute from './ProtectedRoute/protectedRoute';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/shop' element={<ShopPage />} />
      </Route>
    </Routes>
  );
}

export default Router;

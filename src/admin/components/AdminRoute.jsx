import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? <Outlet /> : <Navigate to="/admin" />;
};

export default AdminRoute;

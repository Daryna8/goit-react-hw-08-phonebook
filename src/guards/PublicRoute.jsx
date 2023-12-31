import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const location = useLocation();
  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />;
  }
  return children;
};

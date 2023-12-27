import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUserThunk } from '../redux/auth/operations';

export const UserMenu = () => {
  const email = useSelector(state => state.auth.user.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <p>{email}</p>
      <Button
        onClick={() => {
          dispatch(logoutUserThunk()).then(() => navigate('/login'));
        }}
        sx={{ color: 'white', mx: 1 }}
      >
        Logout
      </Button>
    </>
  );
};

import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../redux/auth/operations';
import { selectEmail } from '../redux/auth/selectors';

export const UserMenu = () => {
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();
  return (
    <>
      <p>{email}</p>
      <Button
        onClick={() => {
          dispatch(logoutUserThunk());
        }}
        sx={{ color: 'white', mx: 1 }}
      >
        Logout
      </Button>
    </>
  );
};

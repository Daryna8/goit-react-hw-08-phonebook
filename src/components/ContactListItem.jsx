import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactListItem = ({ id, name, number, handleDeleteContact }) => {
  return (
    <li>
      {name}: {number}
      <IconButton
        onClick={() => handleDeleteContact(id)}
        edge="end"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
};

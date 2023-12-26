import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Filter = ({ filter, handleChangeInput }) => {
  return (
    <TextField
      fullWidth
      label="Find contacts by name"
      value={filter}
      onChange={handleChangeInput}
      type="text"
      name="filter"
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

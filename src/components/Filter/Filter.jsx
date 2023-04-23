import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

// import { Label, Input } from './Filter.styled';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(setStatusFilter(value));
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <TextField
        autoComplete="given-name"
        margin="normal"
        name="filter"
        fullWidth
        label="Find contacts by Name"
        type="text"
        variant="standard"
        autoFocus
        value={filter}
        onChange={changeFilter}
      />
    </Box>
  );
};

export default Filter;

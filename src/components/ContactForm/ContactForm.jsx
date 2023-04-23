import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/contacts/selectors';

// import { Form, FormField, Field, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';

import { addContact } from 'redux/contacts/operations';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.filter(contact => contact.name === name).length
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <Box sx={{ minWidth: 275, textAlign: 'center' }}>
      <CssBaseline />

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          autoComplete="given-name"
          margin="normal"
          name="name"
          required
          fullWidth
          id="name"
          label="Name"
          type="text"
          variant="standard"
          autoFocus
          inputProps={{
            pattern: "[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          }}
          value={name}
          onChange={handleChange}
        />
        <TextField
          autoComplete="given-name"
          margin="normal"
          name="number"
          required
          fullWidth
          id="number"
          label="Phone number"
          type="string"
          variant="standard"
          autoFocus
          inputProps={{
            pattern: `[0-9, +, -]{5,20}`,
            title:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          }}
          value={number}
          onChange={handleChange}
        />

        <IconButton size="large" color="primary" type="submit">
          <AddCircleOutlinedIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

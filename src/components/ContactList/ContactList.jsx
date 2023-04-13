import { useSelector, useDispatch } from 'react-redux';

import { List, Text } from './ContactList.styled';

import { selectVisibleContacts } from 'redux/contacts/selectors';

import { deleteContact } from 'redux/contacts/operations';

import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}
          variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
};

export default ContactList;

import { useSelector, useDispatch } from 'react-redux';

import { List, Button, Text } from './ContactList.styled';

import { selectVisibleContacts } from 'redux/selectors';

import { deleteContact } from 'redux/operations';

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
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
};

export default ContactList;

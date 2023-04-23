import { useSelector, useDispatch } from 'react-redux';

// import { List, Text } from './ContactList.styled';

import { selectVisibleContacts } from 'redux/contacts/selectors';

import { deleteContact } from 'redux/contacts/operations';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);

  return (
    <Box
      sx={{
        marginTop: '32px',
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Card sx={{ minWidth: 255 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="h6">{number}</Typography>
            </CardContent>
            <CardActions>
              <Button
                type="button"
                onClick={() => dispatch(deleteContact(id))}
                variant="outlined"
                color="error"
                sx={{
                  position: 'relative',
                  left: '100%',
                  transform: 'translate(-100%)',
                }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </li>
      ))}
    </Box>
  );
};

export default ContactList;

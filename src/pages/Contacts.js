import { Helmet, HelmetProvider } from 'react-helmet-async';

import { ContactForm } from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

// import { Container } from './App.styled';

import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
          marginTop="32px"
        >
          Phonebook
        </Typography>
        <ContactForm />
        <Filter />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {isLoading && <CircularProgress />}
        </Box>
        <ContactList />
      </Container>
    </HelmetProvider>
  );
}

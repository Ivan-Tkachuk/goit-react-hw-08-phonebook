import homescreen from '../images/Phonebook.jpg';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box
        component="img"
        sx={{
          minWidth: 270,
          marginTop: '64px',

          borderRadius: 5,
        }}
        alt="phonebook"
        src={homescreen}
      />
    </Container>
  );
}

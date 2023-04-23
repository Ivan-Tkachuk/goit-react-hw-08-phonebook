import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
// import css from './Navigation.module.css';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px',
        flexGrow: 1,
      }}
    >
      <NavLink to="/">
        <Typography
          variant="h6"
          component="div"
          color="white"
          sx={{ flexGrow: 1 }}
        >
          Home
        </Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Typography
            variant="h6"
            component="div"
            color="white"
            sx={{ flexGrow: 1 }}
          >
            Сontacts
          </Typography>
        </NavLink>
      )}
    </Box>
  );
};

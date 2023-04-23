import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const AuthNav = () => {
  return (
    <div>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          display: 'flex',
          gap: '20px',
          flexGrow: 1,
        }}
      >
        <NavLink to="/"></NavLink>
        <NavLink to="/register">
          <Typography
            variant="h6"
            component="div"
            color="white"
            sx={{ flexGrow: 1 }}
          >
            Register
          </Typography>
        </NavLink>
        <NavLink to="/login">
          <Typography
            variant="h6"
            component="div"
            color="white"
            sx={{ flexGrow: 1 }}
          >
            Log In
          </Typography>
        </NavLink>
      </Box>
    </div>
  );
};

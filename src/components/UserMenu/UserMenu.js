import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
// import css from './UserMenu.module.css';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import IconButton from '@mui/material/IconButton';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          color="white"
          sx={{ flexGrow: 1 }}
        >
          Welcome, {user.name}
        </Typography>
        <IconButton onClick={() => dispatch(logOut())}>
          <ExitToAppIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </div>
  );
};

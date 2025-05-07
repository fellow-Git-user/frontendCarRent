import React from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router';
import { useAuth } from '../../AuthContext';


const Footer = () => {
    const { user } = useAuth()

  return (
    <Box
      sx={{
        backgroundColor: '#1A2027',
        color: 'white',
        padding: (theme) => theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        zIndex: 1000,
        // Remove these lines:
        // position: 'fixed',
        // bottom: 0,
        // left: 0,
        // right: 0,
      }}
    >
      <Tooltip title="Home">
        <IconButton color="inherit" component={Link} to="/home">
          <HomeIcon />
          <Typography sx={{ ml: 0.5 }} variant="body2">Home</Typography>
        </IconButton>
      </Tooltip>

      <Tooltip title="Profile">
        <IconButton color="inherit" component={Link} to="/home/profile">
          <AccountCircleIcon />
          <Typography sx={{ ml: 0.5 }} variant="body2">Profile</Typography>
        </IconButton>
      </Tooltip>

      {user ? (
        <Tooltip title="Admin page">
        <IconButton color="inherit" component={Link} to="/admin/admin-page">
          <AdminPanelSettingsIcon />
          <Typography sx={{ ml: 0.5 }} variant="body2">Admin</Typography>
        </IconButton>
      </Tooltip>
      ): ( "" )}

      

      <Tooltip title="Rent a car">
        <IconButton color="inherit" component={Link} to="/rent/car-renting">
          <DirectionsCarFilledIcon />
          <Typography sx={{ ml: 0.5 }} variant="body2">Rent a car</Typography>
        </IconButton>
      </Tooltip>

      {user ? (
        <Tooltip title="Users">
        <IconButton color="inherit" component={Link} to="/admin/users">
          <PeopleIcon />
          <Typography sx={{ ml: 0.5 }} variant="body2">Users</Typography>
        </IconButton>
      </Tooltip>
      ) : ("") }

      

      
    </Box>
  );
};

export default Footer;
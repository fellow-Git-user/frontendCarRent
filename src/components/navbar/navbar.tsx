import { NavLink } from 'react-router';
import { AppBar, Toolbar, Box, Typography } from '@mui/material'; 
import { User, KeyRound, Car, Users, LogIn } from 'lucide-react';
import { useAuth } from '../../AuthContext.tsx';
import ROLES from '../../config/roles.tsx';
import LogoutButton from '../buttons/logoutButton.tsx';


// Mock user and ROLES for demonstration
// const user = {
//   name: 'John Doe',
//   role: 'ADMIN',
// };
// const ROLES = {
//   ADMIN: 'ADMIN',
//   USER: 'USER',
// };



const NavBar = () => {
    const {logoutUser, user} = useAuth()
     

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1f2937' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <NavLink
                to="/home"
                style={({ isActive }) => ({
                  color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  '&:hover': { color: '#fff' },
                  fontWeight: isActive ? '600' : '400', // added font weight
                  display: 'flex', // Added for icon alignment
                  alignItems: 'center'
                })}
              >
                <Car className="mr-2 h-4 w-4" /> Home
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/home/profile"
                    style={({ isActive }) => ({
                      color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      '&:hover': { color: '#fff' },
                      fontWeight: isActive ? '600' : '400', // added font weight
                      display: 'flex', // Added for icon alignment
                      alignItems: 'center'
                    })}
                  >
                    <User className="mr-2 h-4 w-4" /> Profile
                  </NavLink>
                </li>
                {user.role === ROLES.ADMIN && (
                  <li>
                    <NavLink
                      to="/admin/admin-page"
                      style={({ isActive }) => ({
                        color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        '&:hover': { color: '#fff' },
                        fontWeight: isActive ? '600' : '400', // added font weight
                        display: 'flex', // Added for icon alignment
                        alignItems: 'center'
                      })}
                    >
                      <KeyRound className="mr-2 h-4 w-4" /> Admin page
                    </NavLink>
                  </li>
                )}
              </>
            )}
            <li>
              <NavLink
                to="/rent/car-renting"
                style={({ isActive }) => ({
                  color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  '&:hover': { color: '#fff' },
                  fontWeight: isActive ? '600' : '400',  // added font weight
                  display: 'flex', // Added for icon alignment
                  alignItems: 'center'
                })}
              >
                <Car className="mr-2 h-4 w-4" /> Rent a car
              </NavLink>
            </li>
            {user?.role === ROLES.ADMIN && (
              <li>
                <NavLink
                  to="/admin/users"
                  style={({ isActive }) => ({
                    color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: '#fff' },
                    fontWeight: isActive ? '600' : '400', // added font weight
                    display: 'flex', // Added for icon alignment
                    alignItems: 'center'
                  })}
                >
                  <Users className="mr-2 h-4 w-4" /> Users
                </NavLink>
              </li>
            )}

            {user ? (
              <li>
                <LogoutButton />
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/home/login"
                    style={({ isActive }) => ({
                      color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      '&:hover': { color: '#fff' },
                      fontWeight: isActive ? '600' : '400', // added font weight
                      display: 'flex', // Added for icon alignment
                      alignItems: 'center'
                    })}
                  >
                    <LogIn className="mr-2 h-4 w-4" /> Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/home/register"
                    style={({ isActive }) => ({
                      color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      '&:hover': { color: '#fff' },
                      fontWeight: isActive ? '600' : '400', // added font weight
                      display: 'flex', // Added for icon alignment
                      alignItems: 'center'
                    })}
                  >
                    <User className="mr-2 h-4 w-4" /> Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
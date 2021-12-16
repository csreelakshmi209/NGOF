import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
//import DonationItems from './donationitem';
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const Nav = () => {
  const login = useSelector((state) => state.login);
  return ( 
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Router>
        
            
        <Typography 
          variant="h6" 
          to="/home" color="inherit" component={NavLink}
          style={{ marginRight:"auto" }}
          >
          NGO
          <VolunteerActivismIcon />
          </Typography>
          
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
           Donate now
          <VolunteerActivismIcon />
          </Typography>

         <Button color="inherit" component={NavLink} to="/home">Home</Button>
          <HomeIcon />
          <Button color="inherit" component={NavLink} to="/items">Items</Button>

          {login.loggedIn ? (
              <Button to="/logout" component={NavLink} color="inherit">
                Logout
              </Button>
            ) : (
              <Button color="inherit" component={NavLink} to="/login">
                Login
              </Button>
             )} 
        
          <Button color="inherit" component={NavLink} to="/register">Register</Button>
          <HowToRegIcon />
         
          
          </Router>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
   );
}
 
export default Nav;
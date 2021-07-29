import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    textAlign:'center',
    padding: 5,
    margin:10,
    fontWeight: 700,
    color: '#fff',
  },
  activeLink: {
    color: '#3E96AC',
  },
};

const AuthNav = () => (
  <div>
    <Button  style={styles.link} component={NavLink} to={"/register" } exact variant="contained" color="primary" href="#contained-buttons">
  Register
    </Button>
    <Button style={styles.link} component={NavLink} to={"/login" } exact variant="contained" color="secondary" href="#contained-buttons">
  Log in
    </Button>
    
    {/* <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}>
       Register
   </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}>
      Log in
    </NavLink> */}
  </div>
);

export default AuthNav;
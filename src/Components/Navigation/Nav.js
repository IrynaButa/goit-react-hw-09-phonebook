import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  authSelectors  from '../../redux/auth/auth-selectors';


const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    fontSize: 24,
    color: '#2A363B',
  },
  activeLink: {
    color: '#3E96AC',
  },
};

export default function Navigation() {
   const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

return (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
  Main
    </NavLink>

    {isLoggedIn && (<NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
     Contacts
    </NavLink> ) }
  </nav>
);
    }
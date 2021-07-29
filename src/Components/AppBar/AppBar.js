import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Nav';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../Navigation/AuthNav';
import  authSelectors  from '../../redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
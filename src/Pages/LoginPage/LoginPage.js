import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';
import styles from "../pages.module.css";

export default function LoginView () {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = useCallback(
        e => {
            e.preventDefault();
      dispatch(authOperations.logIn({
        email: email,
        password: password,
      }));
       setEmail('');
       setPassword('');
        },
        [dispatch, email, password],
    );
  return (
      <div >
        <h1>Log in page</h1>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          
          <Button type="submit" variant="contained" color="secondary" href="#contained-buttons" onClick={handleSubmit}>
 Go
</Button>      
        </form>
      </div>
    );
}
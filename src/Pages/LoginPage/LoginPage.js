import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';
import styles from "../pages.module.css";

export default function LoginView ({ onLogin }) {
  
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

  const handleSubmit = evt => {
    evt.preventDefault();

     onLogin(email, password);

//     this.setState({ name: '', email: '', password: '' });
  };
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
// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

    
  

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
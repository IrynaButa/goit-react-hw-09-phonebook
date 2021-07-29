import React, { useState } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';
import styles from "../pages.module.css";




export default function RegisterView({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

    onRegister(name, email, password);
    setName('');
      setEmail('');
      setPassword('');

//     this.setState({ name: '', email: '', password: '' });
  };


  return (
    <div>
      <h1>Sign up page</h1>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
        autoComplete="off"
      >
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

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

        <Button variant="contained" color="secondary" href="#contained-buttons" onClick={handleSubmit}>
          Welcome
        </Button>
      </form>
    </div>
  );
}

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

    
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
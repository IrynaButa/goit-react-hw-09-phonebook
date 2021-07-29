import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import shortid from "shortid";
import styles from "./Form.module.css";
import { connect } from 'react-redux';
//import * as actions from '../../redux/contacts-actions';
import  * as contactsOperations from '../../redux/contacts-operations';
import * as contactsSelectors from '../../redux/contacts-selectors';
//import IconButton from '../IconButton/IconButton';
import { ReactComponent as Add } from "../../icons/add.svg";

export default function Form({ onAddContact}) {
 // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
// useEffect(() => {dispatch ({
//     dispatch(
//       contactsOperations.addContact({
//         name,
//         number,
//       }),
//     ),
// });


  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    };
  }

    const handleSubmit = e => {
      e.preventDefault();
      // if (items.find((item) => item.name === name)) {
      //   alert(`${name} is already exist`);
      //    return;
      // }
      console.log(name, number);
      contactsOperations.addContact(name, number);
setName('');
      setNumber('');
       };
      


  
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor={shortid.generate()}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>

        <button type="submit">
          {" "}
          <Add width="50" height="20" /> Add contact
        </button>
      </form>
    );
  }

// class Form extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   nameInputId = shortid.generate();

//   handleChange = (e) => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { name } = this.state;
//     const { items } = this.props;
//  if (items.find((item) => item.name === name)) {
//       alert(`${name} is already exist`);
//       return;
//     }
//     this.props.onAddContact(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     return (
//       <form className={styles.form} onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Phone number
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">
//           {" "}
//           <Add width="50" height="20" /> Add contact
//         </button>
//       </form>
//     );
//   }
// }
// Form.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
//   items: PropTypes.arrayOf(PropTypes.any).isRequired,
// };

// const mapStateToProps = state => ({
//   items: contactsSelectors.getAllContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onAddContact: ({ name, number }) =>
//     dispatch(
//       contactsOperations.addContact({
//         name,
//         number,
//       }),
//     ),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
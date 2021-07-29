import React, { useState } from "react";
import shortid from "shortid";
import styles from "./Form.module.css";
import { useDispatch, useSelector } from 'react-redux';

import  * as contactsOperations from '../../redux/contacts-operations';
import * as contactsSelectors from '../../redux/contacts-selectors';

import { ReactComponent as Add } from "../../icons/add.svg";

export default function Form() {
 const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(contactsSelectors.getAllContacts);
  

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
         if (items.find((item) => item.name === name)) {
        alert(`${name} is already exist`);
         return;
      } 

  dispatch(contactsOperations.addContact({
       name: name,
        number: number,
      }));
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


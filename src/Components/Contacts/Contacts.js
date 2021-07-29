import React from "react";
import PropTypes from "prop-types";
import styles from "./Contacts.module.css";
import { connect } from 'react-redux';
import * as  contactsOperations from '../../redux/contacts-operations';
import IconButton from "../IconButton/IconButton";
import { ReactComponent as Delete } from "../../icons/trash.svg";
import { ReactComponent as Phone } from "../../icons/phone.svg";


const Contacts = ({ contacts, onDeleteContact, id }) => (
  <ul className={styles.formContacts}>
    {contacts.map((contact) => (
      <li key={contact.id}>
        <Phone width="30" height="20" />
        {contact.name}
        {" : "}
        {contact.number}
  
        <IconButton
          onClick={() => onDeleteContact(contact.id)}
          title="delete"
          aria-label="Delete tag"
        >
          <Delete width="20" height="20" />
        </IconButton>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.any).isRequired
  // contacts: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //     number: PropTypes.string.isRequired,
  //   })
  // ),
};
const mapDispatchToProps = dispatch => ({
  onDeleteContact: idContact => dispatch(contactsOperations.deleteContact(idContact)),
});

export default connect(null, mapDispatchToProps)(Contacts);

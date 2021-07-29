import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import  * as contactsOperations from '../../redux/contacts-operations';
import  * as contactsSelectors from '../../redux/contacts-selectors';
import Contacts from "../../Components/Contacts/Contacts";
import Filter from "../../Components/Filter/Filter";
import Form from "../../Components/Form/Form";
import Loader from '../../Components/Loader/Loader';


export default function PhoneBook() {
  const dispatch = useDispatch();
  
  const loading = useSelector(contactsSelectors.getLoading);
  const items = useSelector(contactsSelectors.getAllContacts);
  const filter = useSelector(contactsSelectors.getFilter);

 
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
  );
  
  return (
    <div>
        <h1>Phonebook</h1>
      <Form />
        <h2>Contacts</h2>
      {loading && <Loader />}
      {items[0] ? <Filter /> : <h2 >No contact added </h2>}
      {visibleContacts[0] && <Contacts
          contacts={visibleContacts} />}
      {items[0] && !visibleContacts[0] && (
          <h2>No contact found </h2>
        )}
      </div>
    
  );
};



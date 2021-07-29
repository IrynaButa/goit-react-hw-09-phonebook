import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import  * as contactsOperations from '../../redux/contacts-operations';
import  * as contactsSelectors from '../../redux/contacts-selectors';
import Contacts from "../../Components/Contacts/Contacts";
import Filter from "../../Components/Filter/Filter";
import Form from "../../Components/Form/Form";
import Loader from '../../Components/Loader/Loader';


const PhoneBook = ({ filter, items, dispatch, loading, onAddContact }) => {
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  return (
    <div>
        <h1>Phonebook</h1>
      {/* <Form /> */}
      <Form onAddContact={onAddContact} />

        <h2>Contacts</h2>
      {loading && <Loader />}
      {items[0] ? <Filter /> : <h2 >No contact added </h2>}
       {/* <Filter value={filter} onChangeFilter={onChangeFilter} /> */}
      {visibleContacts[0] && <Contacts
          contacts={visibleContacts}  
      />}
      {items[0] && !visibleContacts[0] && (
          <h2>No contact found </h2>
        )}

      {/* <Contacts
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        /> */}
      </div>
    
  );
};

PhoneBook.propTypes = {
  filter: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  items: contactsSelectors.getAllContacts(state),
  filter: contactsSelectors.getFilter(state),
  loading: contactsSelectors.getLoading(state),
});

export default connect(mapStateToProps)(PhoneBook);

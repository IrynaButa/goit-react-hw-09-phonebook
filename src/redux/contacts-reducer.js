import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

//import { changeFilter, addContact, deleteContact } from './contacts-actions';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

const itemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
 
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error,
});


export default contactsReducer;
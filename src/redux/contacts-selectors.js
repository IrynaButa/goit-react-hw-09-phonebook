import { createSelector } from '@reduxjs/toolkit';


 export const getLoading = state => state.contacts.loading;

 export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => state.contacts.items;
  export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    console.log('Составляю новый массив видимых контактов');
    const normalizedFilter = filter.toLowerCase();

    return items.filter((item) =>
     item.name.toLowerCase().includes(normalizedFilter),
    );
  },
);


// export default {
//   getLoading,
//   getFilter,
//   getAllContacts
// };

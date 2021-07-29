import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter} from '../../redux/contacts-actions';
import * as contactsSelectors from '../../redux/contacts-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter)
  const onChangeFilter = e => dispatch(changeFilter(e.target.value));


  return (
    <div className={styles.form}>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={onChangeFilter} />
      </label>
    </div>
);
}
// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func.isRequired,
// };
// const mapStateToProps = state => ({
//   filter: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChangeFilter: ({ target: { value } }) =>
//     dispatch(changeFilter(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

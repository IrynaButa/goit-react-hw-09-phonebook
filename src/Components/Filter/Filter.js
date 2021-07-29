import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from 'react-redux';

import { changeFilter} from '../../redux/contacts-actions';
import * as contactsSelectors from '../../redux/contacts-selectors';

const Filter = ({ filter, onChangeFilter }) => (
  <div className={styles.form}>
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onChangeFilter} />
    </label>
  </div>
);
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: ({ target: { value } }) =>
    dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

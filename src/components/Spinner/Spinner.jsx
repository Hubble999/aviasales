import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classes from './Spinner.module.css';

const Spinner = () => {
  return <FontAwesomeIcon className={`fa-spin fa-pulse fa-5x ${classes.loader}`} icon={faSpinner} />;
};

export default Spinner;

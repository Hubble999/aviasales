import React from 'react';
import styles from './Error.module.css';
import logo from '../../assets/logo_avia.png';
import i18n from '../../locales/index.js';

const Error = ({ error }) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src={logo} alt="логотип компании"/>
      </div>
      <span >Ошибка: {error}</span>
      <p>{i18n.t('error')}</p>
    </div>
  );
};

export default Error;

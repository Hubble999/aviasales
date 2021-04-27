import React from 'react';
import styles from './Error.module.css';
import logo from '../../assets/logo_avia.png';

const Error = ({ error }) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src={logo} alt="логотип компании"/>
      </div>
      <span >Ошибка: {error}</span>
      <p>Упс. Что-то пошло не так, попробуйте перезагрузить страницу.</p>
    </div>
  );
};

export default Error;

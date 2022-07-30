import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../index.module.scss';

export const NotFound: React.FC = () => {
  return (
    <div className={styles.catalog}>
      <h1 style={{ margin: '0' }}>
        <Link to="/oblivion-store/">
          <img src="img/icons/close-drawer.svg" alt="закрыть" />
        </Link>
        На главную
      </h1>
      <img src="img/notice/404.webp" alt="ОШИБКА 404 - СТРАНИЦА НЕ НАЙДЕНА" />
    </div>
  );
};

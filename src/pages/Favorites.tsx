import React from 'react';
import { Link } from 'react-router-dom';
import ItemsBlock from '../components/ItemsBlock';
import ContextData from '../Context';

import styles from '../index.module.scss';

export const Favorites: React.FC = () => {
  const { searchInput, favoriteItems } = React.useContext(ContextData);

  return (
    <div className={styles.catalog}>
      {searchInput.length > 0 ? (
        <h2 style={{ margin: '0' }}>{`Поиск по запросу "${searchInput}"`}</h2>
      ) : (
        <h1 style={{ margin: '0' }}>
          <Link to="/oblivion-store/">
            <img src="img/icons/close-drawer.svg" alt="закрыть" />
          </Link>
          Избранное
        </h1>
      )}
      <div className={styles.container}>
        {favoriteItems.length === 0 ? (
          <div className={styles.favoriteEmpty}>
            <img src="img/notice/noFavorites.webp" alt="фанат" />
            <p>Похоже тебе ничего не нравится, о великий чемпион. Зато мне нравишься ты!</p>
          </div>
        ) : (
          <ItemsBlock itemsList={favoriteItems} />
        )}
      </div>
    </div>
  );
};

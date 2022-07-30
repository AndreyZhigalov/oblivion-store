import React from 'react';
import { Advertisement } from '../components/Advertisement/AdvertIsement';
import ItemsBlock from '../components/ItemsBlock';
import ContextData from '../Context';

import styles from '../index.module.scss';

export const Catalog: React.FC = () => {
  const { searchInput, setActiveCategory, itemsList, activeCategory } =
    React.useContext(ContextData);

  return (
    <div>
      <Advertisement />
      <div className={styles.catalog}>
        {searchInput.length > 0 ? (
          <h2 style={{ margin: '0' }}>{`Поиск по запросу "${searchInput}"`}</h2>
        ) : (
          <div className={styles.categories}>
            <h2
              onClick={() => setActiveCategory('bags')}
              className={activeCategory === 'bags' ? styles.active : ''}>
              Рюкзаки
            </h2>
            <h2
              onClick={() => setActiveCategory('notes')}
              className={activeCategory === 'notes' ? styles.active : ''}>
              Блокноты
            </h2>
          </div>
        )}
        <div className={styles.container}>
          <ItemsBlock itemsList={itemsList} />
        </div>
      </div>
    </div>
  );
};

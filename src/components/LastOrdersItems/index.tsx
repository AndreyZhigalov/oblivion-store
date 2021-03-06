import React from 'react';
import { OrderItem } from '../../pages/Profile';

import styles from './LastOrdersItems.module.scss';

export const LastOrdersItems: React.FC<{ item: OrderItem }> = ({ item }) => {
  return (
    <div className={styles.catalog__item}>
      <img src={item.itemImage} alt="фото товара" />
      <div>
        <h5>{item.title}</h5>
        <span className={styles.price}>{item.price} руб.</span>
      </div>
    </div>
  );
};

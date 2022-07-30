import React from 'react';
import ContextData, { Item } from '../../../Context';

import styles from './DrawerItem.module.scss';

export const DrawerItem: React.FC<{ item: Item }> = ({ item }) => {
  const { addToDrawer } = React.useContext(ContextData);

  return (
    <div className={styles.cartItem}>
      <img src={item.itemImage} alt="фото товара" />
      <div>
        <p>{item.title}</p>
        <span>{item.price} руб.</span>
      </div>
      <img onClick={() => addToDrawer(item)} src="img/icons/remove.svg" alt="удалить" />
    </div>
  );
};

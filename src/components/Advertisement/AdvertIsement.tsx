import React from 'react';

import styles from './Advertisement.module.scss';

export const Advertisement: React.FC = () => {
  return (
    <div className={styles.advertiseCover}>
      <img src="img/icons/arrow-left.svg" alt="Предыдущий слайд" />
      <img src="img/cover.webp" alt="Реклама" />
      <img src="img/icons/arrow-right.svg" alt="Следующий слайд" />
    </div>
  );
};

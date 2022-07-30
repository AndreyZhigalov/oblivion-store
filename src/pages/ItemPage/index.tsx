import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ContextData, { Item } from '../../Context';

import styles from './ItemPage.module.scss';

const ItemPage: React.FC = () => {
  const [item, setItem] = React.useState({} as Item);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAdded, isFavorite, addToFavorite, addToDrawer } = React.useContext(ContextData);

  React.useEffect(() => {
    async function getItem() {
      try {
        const { data } = await axios.get<Item>(
          `https://62c57e71134fa108c25402bf.mockapi.io/items/${id}`,
        );
        setItem(data);
      } catch (error) {
        alert('Не удалось загрузить страницу товара');
        navigate(`/oblivion-store/`);
      }
    }
    getItem();
  }, []);

  if (!item.id) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className={styles.itempage_wrapper}>
      <img src={item.itemImageLarge} alt="" />
      <h2>{item.title}</h2>
      <div className={styles.buttons_wrapper}>
        <h3>{item.price} руб.</h3>
        <span
          onClick={() => {
            addToDrawer(item);
          }}>
          {isAdded(item.id) ? 'В корзине' : 'Купить'}
          <img
            src={isAdded(item.id) ? 'img/icons/add-checked.svg' : 'img/icons/add-unchecked.svg'}
            alt="добавить"
          />
        </span>
        <span
          onClick={() => {
            addToFavorite(item);
          }}>
          {isFavorite(item.id) ? 'В избранном' : 'Сохранить'}
          <img
            src={
              isFavorite(item.id) ? 'img/icons/heart-checked.svg' : 'img/icons/heart-unchecked.svg'
            }
            alt="избранное"
          />
        </span>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, minus. Deserunt dolor
        voluptas voluptatibus eos voluptatum eveniet incidunt illo neque quisquam repellendus?
        Quisquam culpa quaerat velit asperiores quod alias, tempore dignissimos laborum quam magnam
        porro molestias minus fugit quidem fuga ea? Fuga incidunt eos inventore dolores aliquam
        accusantium at quos iusto nostrum totam, itaque molestiae non, sapiente perspiciatis, esse
        ea tempora perferendis. Accusantium, enim quaerat. Neque aliquam voluptatum, perferendis, id
        distinctio itaque eius dolorem vitae illum autem earum quidem! Beatae assumenda fuga impedit
        pariatur labore minima quaerat explicabo molestiae ullam, laudantium ut voluptate nisi
        repellendus enim distinctio accusantium nostrum sunt praesentium corporis quos rerum ex
        veritatis magni fugit. Magni voluptates molestiae praesentium recusandae quos accusamus,
        nostrum eius, id unde ab dignissimos reiciendis! Officiis quae officia quis necessitatibus
        exercitationem beatae ut blanditiis eos illum voluptatem, enim, totam perferendis tempora
        consectetur fugiat? Magnam obcaecati, culpa id et officiis quia provident. Sed dolores
        impedit consectetur. Reprehenderit recusandae dolorum totam, sequi quas, error optio
        corporis vel rem fuga eaque cumque ex dolor impedit saepe eveniet! Mollitia autem voluptates
        minus, placeat nemo perspiciatis quis eius explicabo accusamus eos nobis architecto
        consequuntur odit numquam ex! Omnis quidem temporibus aperiam ad. Minus blanditiis sit
        provident ipsum exercitationem.
      </p>
    </div>
  );
};

export default ItemPage;

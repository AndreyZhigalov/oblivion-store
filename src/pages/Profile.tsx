import axios from 'axios';
import React from 'react';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LastOrdersItems } from '../components/LastOrdersItems';

import orderStyles from '../components/LastOrdersItems/LastOrdersItems.module.scss';
import styles from '../index.module.scss';

export type OrderItem = {
  title: string;
  itemImage: string;
  itemImageLarge: string;
  price: number;
  id: string;
  drawerID: string;
};

type Order = {
  orderID: string;
  orderList: OrderItem[];
};

type cardData = [number, string, string, number];

type user = {
  dbID: string;
  personalID: string;
  name: string;
  lastName: string;
  avatar: string;
  phone: string;
  address: string;
  paycard: cardData;
  email: string;
  septimPayCard: cardData;
  lastOrders: [];
  deliveryList: { id: string; location: string }[];
  deposite: number;
  discount: number;
};

export const Profile: React.FC = () => {
  const [lastOrders, setLastOrders] = useState<Order[]>([]);
  const [switchOrdersList, setSwitchOrdersList] = useState<[boolean, string]>([
    false,
    'Показать все заказы?',
  ]);
  const [userData, getUserData] = useState<user[]>([]);

  useEffect(() => {
    try {
      axios
        .get('https://62c8d53c0f32635590dd50d6.mockapi.io/user')
        .then((res) => getUserData(res.data));
      axios
        .get(`https://62c8d53c0f32635590dd50d6.mockapi.io/orders`)
        .then((res) => setLastOrders(res.data));
    } catch (error) {
      alert('Ошибка при загрузке данных с сервера');
      console.error(error);
    }
  }, []);

  const showRestOrders = () => {
    switchOrdersList[0]
      ? setSwitchOrdersList([false, 'Показать все заказы?'])
      : setSwitchOrdersList([true, 'Скрыть все заказы?']);
  };

  let user = userData[0];

  return (
    <div className={styles.catalog}>
      <h1 style={{ margin: '0' }}>
        <Link to="/oblivion-store/">
          {' '}
          <img src="img/icons/close-drawer.svg" alt="закрыть" />
        </Link>
        Профиль
      </h1>

      <div className={styles.container}>
        <div className={styles.profileDataBox} style={{ width: '380px', height: '300px' }}>
          <h3>Контакты</h3>
          <p>{(user?.name ?? '') + ' ' + (user?.lastName ?? '')}</p>
          <p>{user?.address}</p>
          <p>{user?.phone}</p>
          <p>{user?.email}</p>
        </div>

        <div className={styles.profileDataBox} style={{ width: '560px', height: '300px' }}>
          <h3>Доставка</h3>
          {user?.deliveryList.map((order, i) => (
            <p key={i}>{'№' + order.id + ' ' + order.location}</p>
          ))}
        </div>

        <div className={styles.profileDataBox} style={{ width: '310px', height: '200px' }}>
          <h3>Сбербанк</h3>
          <span>{user?.paycard[0]}</span>
          <p>{(user?.paycard[2] ?? '') + ' ' + (user?.paycard[1] ?? '')}</p>
        </div>

        <div className={styles.profileDataBox} style={{ width: '300px', height: '200' }}>
          <div style={{ width: '300px', height: '92px' }}>
            <h3>Баланс</h3>
            <span>{`${user?.deposite ?? ''} руб.`}</span>
          </div>
          <div style={{ width: '300px', height: '92px' }}>
            <h3>Скидка</h3>
            <span>{`${user?.discount ?? ''}%`}</span>
          </div>
        </div>

        <div className={styles.profileDataBox} style={{ width: '310px', height: '200px' }}>
          <h3>SeptimPay</h3>
          <span>{user?.septimPayCard[0]}</span>
          <p>{(user?.septimPayCard[2] ?? '') + ' ' + (user?.septimPayCard[1] ?? '')}</p>
        </div>

        <div className={styles.profileDataBox}>
          <h3>Последние заказы</h3>
          {lastOrders
            .slice(-3)
            .map((order) => {
              return (
                <div className={orderStyles.orderBlock} key={order.orderID}>
                  <h4>Заказ №{order.orderID}</h4>
                  {order.orderList.map((item) => {
                    return <LastOrdersItems key={item.id} item={item} />;
                  })}
                </div>
              );
            })
            .reverse()}
          {lastOrders.length > 3 && (
            <p
              className={orderStyles.orderButton}
              onClick={showRestOrders}>{`${switchOrdersList[1]}`}</p>
          )}
          {switchOrdersList[0] && (
            <div>
              {lastOrders
                .slice(0, -3)
                .map((order) => {
                  return (
                    <div className={orderStyles.orderBlock} key={order.orderID}>
                      <h4>Заказ №{order.orderID}</h4>
                      {order.orderList.map((item) => {
                        return <LastOrdersItems key={item.id} item={item} />;
                      })}
                    </div>
                  );
                })
                .reverse()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

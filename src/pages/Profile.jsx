import axios from "axios";
import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LastOrdersItems } from "../components/LastOrdersItems";

import styles from "../components/LastOrdersItems/LastOrdersItems.module.scss"

export function Profile({ toggleSearch, userData }) {
    toggleSearch("none")

    const [lastOrders, setLastOrders] = useState([])
    const [switchOrdersList, setSwitchOrdersList] = useState([false, "Показать все заказы?"])

    useEffect(() => {
        axios.get("https://62c8d53c0f32635590dd50d6.mockapi.io/orders")
            .then(res => setLastOrders(res.data))
    }, [])

    const showRestOrders = () => {
        switchOrdersList[0] ?
            setSwitchOrdersList([false, "Показать все заказы?"]) :
            setSwitchOrdersList([true, "Скрыть все заказы?"]);
    }

    let user = userData[0]

    return (
        <div className="catalog">
            <h1 style={{ margin: '0' }}>
                <Link to='/' onClick={() => { toggleSearch("flex") }}> <img src="img/icons/close-drawer.svg" alt="close" /></Link>Профиль
            </h1>

            <div className="container">

                <div className="profileDataBox"
                    style={{ width: "380px", height: "300px" }} >
                    <h3>Контакты</h3>
                    <p>{(user?.name ?? "") + " " + (user?.lastName ?? "")}</p>
                    <p>{user?.address}</p>
                    <p>{user?.phone}</p>
                    <p>{user?.email}</p>
                </div>

                <div className="profileDataBox"
                    style={{ width: "560px", height: "300px" }}>
                    <h3>Доставка</h3>
                    {user?.deliveryList.map((order, i) => <p key={i}>{"№" + order.id + " " + order.location}</p>)}
                </div>

                <div className="profileDataBox"
                    style={{ width: "310px", height: "200px" }}>
                    <h3>Сбербанк</h3>
                    <span>{user?.paycard[0]}</span>
                    <p>{(user?.paycard[2] ?? "") + " " + (user?.paycard[1] ?? "")}</p>
                </div>

                <div className="profileDataBox" style={{ width: "300px", height: "200" }}>
                    <div
                        style={{ width: "300px", height: "92px" }}>
                        <h3>Баланс</h3>
                        <span>{`${user?.deposite ?? ""} руб.`}</span>
                    </div>
                    <div
                        style={{ width: "300px", height: "92px" }}>
                        <h3>Скидка</h3>
                        <span>{`${user?.discount ?? ""}%`}</span>
                    </div>
                </div>

                <div className="profileDataBox"
                    style={{ width: "310px", height: "200px" }}>
                    <h3>SeptimPay</h3>
                    <span>{user?.septimPayCard[0]}</span>
                    <p>{(user?.septimPayCard[2] ?? "") + " " + (user?.septimPayCard[1] ?? "")}</p>
                </div>

                <div className="profileDataBox" >
                    <h3>Последние заказы</h3>
                    {lastOrders.slice(-3).map((order) => {
                        return <div className={styles.orderBlock} key={order.orderID}>
                            <h4>Заказ №{order.orderID}</h4>
                            {order.orderList.map((item) => {
                                return <LastOrdersItems key={item.id} item={item} />
                            })}
                        </div>
                    }).reverse()
                    }
                    <p className={styles.orderButton} onClick={showRestOrders}>{`${switchOrdersList[1]}`}</p>
                    {switchOrdersList[0] &&
                        <div>
                            {
                                lastOrders.slice(0, -3).map((order) => {
                                    return <div className={styles.orderBlock} key={order.orderID}>
                                        <h4>Заказ №{order.orderID}</h4>
                                        {order.orderList.map((item) => {
                                            return <LastOrdersItems key={item.id} item={item} />
                                        })}
                                    </div>
                                }).reverse()
                            }
                        </div>}
                </div>
            </div>
        </div>
    )
}
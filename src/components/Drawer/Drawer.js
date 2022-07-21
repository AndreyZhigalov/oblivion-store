import React from "react";
import axios from "axios";
import ContextData from "../../Context";

import { DrawerItem } from "./DrawerItem/DrawerItem";
import { useState } from "react";

import styles from "./Drawer.module.scss"


export const Drawer = () => {
    const { getTotalPrice, toggleDrawer, setDrawerItems, drawerItems, drawerOpened } = React.useContext(ContextData)

    const [isOrdered, setIsOrdered] = useState(false)
    const [orderID, setOrderId] = useState("")

    const gettingOrder = async () => {
        try {
            setIsOrdered(true)
            const { data } = await axios.post("https://62c8d53c0f32635590dd50d6.mockapi.io/orders", { "orderList": drawerItems })
            for (let i = 0; i < drawerItems.length; i++) {
                await axios.delete(`https://62c57e71134fa108c25402bf.mockapi.io/drawer/${drawerItems[i].drawerID}`)
            }
            setOrderId(data.orderID)
            setDrawerItems([])
        } catch (error) {
            alert("Ошибка при отправке данных о заказе")
        }
    }

    return (
        <div className={`${styles.overlay} ${drawerOpened ? styles.drawerVisible : ""}`}>
            <div className={styles.drawer} >
                <h2><img onClick={() => { toggleDrawer(); setIsOrdered(false) }} src="img/icons/close-drawer.svg" alt="закрыть" /> Корзина</h2>
                {!drawerItems.length ?
                    <div className={styles.empty}>
                        <div >
                            <img src={isOrdered ?
                                "img/notice/orderConfirm.webp" :
                                "img/notice/drawerEmpty.webp"} alt="корзина" />
                            <p>{isOrdered ?
                                `Заявка оформлена. Номер вашего заказа №${orderID}. Подробнее о доставке в профиле.` :
                                "Стой, преступное отродье! Никто не оставит корзину пустой пока я на посту!"}</p>
                        </div>
                    </div> :
                    <>
                        <div className={styles.cartBlock}>
                            {drawerItems.map(item =>
                                <DrawerItem key={item.id} item={item} />)
                            }
                        </div>
                        <div className={styles.totalBlock}>
                            <div className={styles.tax}>
                                <h3>НДС 18%:</h3>
                                <div></div>
                                <b>{Math.round(getTotalPrice() * 0.18) + " руб."}</b>
                            </div>
                            <div className={styles.total}>
                                <h3>Итого:</h3>
                                <div></div>
                                <b>{getTotalPrice() + " руб."}</b>
                            </div>
                        </div>
                        <button onClick={gettingOrder} className={`${styles.mainButton} ${isOrdered ? styles.disabled : ""}`}>Оформить заказ
                            <img src="img/icons/button-arrow-right.svg" alt="стрелка" />
                        </button>
                    </>
                }

            </div>
        </div>
    );
}
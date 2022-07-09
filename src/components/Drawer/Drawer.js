import styles from "./Drawer.module.scss"
import { DrawerItem } from "./DrawerItem/DrawerItem";
import axios from "axios";
import React from "react";
import ContextData from "../../Context";
import { useContext, useState } from "react";


export const Drawer = ({ removeItem, hideDrawer, drawerItems }) => {
    const [isOrdered, setIsOrdered] = useState(false)
    const [orderID, setOrderId] = useState("")

    const { getTotalPrice, getTax } = useContext(ContextData)

    const deleteItem = (item) => {
        axios.delete(`https://62c57e71134fa108c25402bf.mockapi.io/drawer/${item.drawerID}`)
        removeItem(prev => prev.filter(i => i.id !== item.id))
    }

    const gettingOrder = async () => {
        try {
            setIsOrdered(true)
            const { data } = await axios.post("https://62c8d53c0f32635590dd50d6.mockapi.io/orders", { "orderList": drawerItems })
            for (let i = 0; i < drawerItems.length; i++) {
                await axios.delete(`https://62c57e71134fa108c25402bf.mockapi.io/drawer/${drawerItems[i].drawerID}`)
            }
            setOrderId(data.orderID)
            removeItem([])
        } catch (error) {
            alert("Оформление заказа не удалось")
        }

    }

    return (
        <div className={styles.overlay} >
            <div className={styles.drawer} >
                <h2><img onClick={hideDrawer} src="img/icons/close-drawer.svg" alt="close" /> Корзина</h2>
                {drawerItems.length === 0 ?
                    <div className={styles.empty}>
                        <div >
                            <img src={isOrdered ?
                                "./img/notice/orderConfirm.webp" :
                                "./img/notice/drawerEmpty.webp"} alt="" />
                            <p>{isOrdered ?
                                `Заявка оформлена. Номер вашего заказа №${orderID}. Подробнее о доставке в профиле.` :
                                "Стой, преступное отродье! Никто не оставит корзину пустой пока я на посту!"}</p>
                        </div>
                    </div> :
                    <>
                        <div className={styles.cartBlock}>
                            {drawerItems.map(item =>
                                <DrawerItem
                                    key={item.id}
                                    itemImage={item.itemImage}
                                    title={item.title}
                                    price={item.price}
                                    removeItem={() => { deleteItem(item) }}
                                />)
                            }
                        </div>
                        <div className={styles.totalBlock}>
                            <div className={styles.total}>
                                <h3>Итого:</h3>
                                <div></div>
                                <b>{getTotalPrice() + " руб."}</b>
                            </div>
                            <div className={styles.tax}>
                                <h3>Налог 5%:</h3>
                                <div></div>
                                <b>{getTax() + " руб."}</b>
                            </div>
                        </div>
                        <button onClick={gettingOrder} className={isOrdered ? `${styles.mainButton} ${styles.disabled}` : styles.mainButton}>Оформить заказ
                            <img src="/img/icons/button-arrow-right.svg" alt="arrow" />
                        </button>
                    </>
                }

            </div>
        </div>
    );
}
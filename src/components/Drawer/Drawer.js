import styles from "./Drawer.module.scss"
import { DrawerItem } from "./DrawerItem/DrawerItem";
import axios from "axios";
import React from "react";


export const Drawer = (props) => {

    const deleteItem = (item) => {
        axios.delete(`https://62c57e71134fa108c25402bf.mockapi.io/drawer/${item.drawerID}`)
        props.removeItem(prev => prev.filter(i => i.id !== item.id))
    }

    return (
        <div className={styles.overlay} >
            <div className={styles.drawer} >
                <h2><img onClick={props.hideDrawer} src="img/icons/close-drawer.svg" alt="close" /> Корзина</h2>

                {props.drawerItems.length === 0 ?
                    <div className={styles.empty}>
                        <div >
                            <img src="./img/notice/drawerEmpty.webp" alt="" />
                            <p>Стой, преступное отродье! Никто не оставит корзину пустой пока я на посту!</p>
                        </div>
                    </div> :
                    <div className={styles.wrapper}>
                        <div className={styles.cartBlock}>
                            {props.drawerItems.map(item =>
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
                                <b>{props.totalPrice() + " руб."}</b>
                            </div>
                            <div className={styles.tax}>
                                <h3>Налог 5%:</h3>
                                <div></div>
                                <b>{props.tax() + " руб."}</b>
                            </div>
                        </div>
                        <button className={styles.mainButton}>Оформить заказ
                            <img src="/img/icons/button-arrow-right.svg" alt="arrow" />
                        </button>
                    </div>
                }

            </div>
        </div >
    );
}
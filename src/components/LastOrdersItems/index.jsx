import React from "react";
import styles from "./LastOrdersItems.module.scss"


export const LastOrdersItems = ({ item }) => {

    return (
        <div className={styles.catalog__item}>
            <img src={item.itemImage} alt="item" />
            <div>
                <h5>{item.title}</h5>
                <span className={styles.price}>{item.price} руб.</span>
            </div>
        </div>
    );
}
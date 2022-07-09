import React from "react";
import styles from "./ItemCard.module.scss"
import { useContext } from "react";
import ContextData from "../../Context";

export const ItemCard = ({ item }) => {
    const { isAdded, isFavorite, addToFavorite, addToDrawer } = useContext(ContextData)

    return (
        <div className={styles.catalog__item}>
            <img onClick={() => { addToFavorite(item) }} src={isFavorite(item.id) ? "/img/icons/heart-checked.svg" : "/img/icons/heart-unchecked.svg"} alt="favorite" />
            <img src={item.itemImage} alt="item" />
            <div>
                <h3>{item.title}</h3>
                <p>Цена</p>
                <span>{item.price} руб.</span>
            </div>
            <img onClick={() => { addToDrawer(item) }} src={isAdded(item.id) ? "/img/icons/add-checked.svg" : "/img/icons/add-unchecked.svg"} alt="add" />
        </div>
    );
}
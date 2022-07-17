import React from "react";
import styles from "./ItemCard.module.scss"
import ContextData from "../../Context";

export const ItemCard = ({ item }) => {
    const { isAdded, isFavorite, addToFavorite, addToDrawer } = React.useContext(ContextData)

    return (
        <div className={styles.catalog__item}>
            <img onClick={() => { addToFavorite(item) }} src={isFavorite(item.id) ? "img/icons/heart-checked.svg" : "img/icons/heart-unchecked.svg"} alt="избранное" />
            <img src={item.itemImage} alt="фото товара" />
            <div>
                <h3>{item.title}</h3>
                <p>Цена</p>
                <span>{item.price} руб.</span>
            </div>
            <img onClick={() => { addToDrawer(item) }} src={isAdded(item.id) ? "img/icons/add-checked.svg" : "img/icons/add-unchecked.svg"} alt="добавить" />
        </div>
    );
}
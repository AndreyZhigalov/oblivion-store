import React from "react";
import styles from "./ItemCard.module.scss"

export const ItemCard = (props) => {
    const [isFavorite, setIsFavorite] = React.useState(false)

    const onFavoriteClick = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.catalog__item}>
            <img onClick={onFavoriteClick} src={isFavorite ? "/img/icons/heart-checked.svg" : "/img/icons/heart-unchecked.svg"} alt="favorite" />
            <img src={props.imageUrl} alt="item" />
            <div>
                <h3>{props.title}</h3>
                <p>Цена</p>
                <span>{props.price} руб.</span>
            </div>
            <img onClick={props.addToDrawer} src={props.isAdded ? "/img/icons/add-checked.svg" : "/img/icons/add-unchecked.svg"} alt="add" />
        </div>
    );
}
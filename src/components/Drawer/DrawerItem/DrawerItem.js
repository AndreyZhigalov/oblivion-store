import React from "react"
import axios from "axios"
import ContextData from "../../../Context"

import styles from "./DrawerItem.module.scss"

export const DrawerItem = ({ item, item: { itemImage, title, price } }) => {
    const { setDrawerItems } = React.useContext(ContextData)

    const deleteItem = (item) => {
        axios.delete(`https://62c57e71134fa108c25402bf.mockapi.io/drawer/${item.drawerID}`)
        setDrawerItems(prev => prev.filter(i => i.id !== item.id))
    }
    return (
        <div className={styles.cartItem}>
            <img src={itemImage} alt="фото товара" />
            <div>
                <p>{title}</p>
                <span>{price} руб.</span>
            </div>
            <img onClick={() => deleteItem(item)} src="img/icons/remove.svg" alt="удалить" />
        </div>
    );
}
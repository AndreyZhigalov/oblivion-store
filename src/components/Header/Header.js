import React from "react";
import styles from "./Header.module.scss"

export const Header = (props) => {

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="/img/logo.png" height={50} alt="O" />
                <h1>BLIVION STORE</h1>
            </div>
            <div className={styles.search}>
                <img src="/img/icons/search.svg" alt="search" />
                <input onChange={props.getInputValue} value={props.searchInput} placeholder="Поиск..." />
            </div>
            <ul>
                <li >
                    <img src="/img/icons/cart.svg" height={25} alt="cart" />
                    <span onClick={props.showDrawer}>{props.totalPrice() + " руб."}</span>
                </li>
                <li><img src="/img/icons/heart-common.svg" height={25} alt="favorite" /></li>
                <li><img src="/img/icons/user.svg" height={28} alt="user" /></li>
            </ul>
        </header>
    );
}
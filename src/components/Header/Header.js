import React from "react";
import styles from "./Header.module.scss"
import { Link } from "react-router-dom"

export const Header = (props) => {

    return (
        <header className={styles.header}>
            <Link to="/">
                <div className={styles.logoContainer}>
                    <img src="/img/logo.png" height={50} alt="O" />
                    <h1>BLIVION STORE</h1>
                </div>
            </Link>
            <div className={styles.search}>
                <img src="/img/icons/search.svg" alt="search" />
                <input onChange={props.getInputValue} value={props.searchInput} placeholder="Поиск..." />
            </div>
            <ul>
                <li onClick={props.showDrawer}>
                    <img src="/img/icons/cart.svg" height={25} alt="cart" />
                    <span >{props.totalPrice() + " руб."}</span>
                </li>
                <li><Link to="/favorites"><img src="/img/icons/heart-common.svg" height={25} alt="favorite" /></Link></li>
                <li><img src="/img/icons/user.svg" height={28} alt="user" /></li>
            </ul>
        </header>
    );
}
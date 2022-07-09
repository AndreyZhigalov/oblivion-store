import React from "react";
import styles from "./Header.module.scss"
import { Link } from "react-router-dom"

export const Header = (props) => {

    return (
        <header className={styles.header}>
            <Link to="/" onClick={() => { props.toggleSearch("flex") }}>
                <div className={styles.logoContainer}>
                    <img src="/img/logo.png" height={50} alt="O" />
                    <h1>BLIVION STORE</h1>
                </div>
            </Link>
            <div className={styles.search} style={{ display: `${props.searchAppearance}` }}>
                <img src="/img/icons/search.svg" alt="search" />
                <input onChange={props.getInputValue} value={props.searchInput} placeholder="Поиск..." />
            </div>
            <ul>
                <li onClick={props.showDrawer}>
                    <img src="/img/icons/cart.svg" height={25} alt="cart" />
                    <span >{props.totalPrice() + " руб."}</span>
                </li>
                <li onClick={() => { props.toggleSearch("flex") }}>
                    <Link to="/favorites">
                        <img src="/img/icons/heart-common.svg" height={25} alt="favorite" />
                    </Link>
                </li>
                <li onClick={() => { props.toggleSearch("none") }}>
                    <Link to="/profile">
                        <img src="/img/icons/user.svg" height={28} alt="user" />
                    </Link>
                </li>
            </ul>
        </header>
    );
}
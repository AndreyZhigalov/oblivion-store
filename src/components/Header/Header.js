import React from "react";
import styles from "./Header.module.scss"
import { Link } from "react-router-dom"

export const Header = ({ showDrawer, getInputValue, searchInput, toggleSearch, searchAppearance, totalPrice }) => {

    return (
        <header className={styles.header}>
            <Link to="/" onClick={() => { toggleSearch("flex") }}>
                <div className={styles.logoContainer}>
                    <img src="img/logo.png" height={50} alt="O" />
                    <h1>BLIVION STORE</h1>
                </div>
            </Link>
            <div className={styles.search} style={{ display: `${searchAppearance}` }}>
                <img src="img/icons/search.svg" alt="поиск" />
                <input onChange={getInputValue} value={searchInput} placeholder="Поиск..." />
            </div>
            <ul>
                <li onClick={showDrawer}>
                    <img src="img/icons/cart.svg" height={25} alt="корзина" />
                    <span >{totalPrice() + " руб."}</span>
                </li>
                <li onClick={() => { toggleSearch("flex") }}>
                    <Link to="/favorites">
                        <img src="img/icons/heart-common.svg" height={25} alt="избранное" />
                    </Link>
                </li>
                <li onClick={() => { toggleSearch("none") }}>
                    <Link to="/profile">
                        <img src="img/icons/user.svg" height={28} alt="профиль" />
                    </Link>
                </li>
            </ul>
        </header>
    );
}
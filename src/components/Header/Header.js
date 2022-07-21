import React from "react";
import ContextData from "../../Context";

import { Link } from "react-router-dom"

import styles from "./Header.module.scss"

export const Header = () => {
    const inputRef = React.useRef()
    const { searchInput, setSearchInput, getTotalPrice, toggleSearch, toggleDrawer, searchAppearance } = React.useContext(ContextData)

    return (
        <header className={styles.header}>
            <Link to="/" onClick={() => { toggleSearch("flex") }}>
                <div className={styles.logoContainer}>
                    <img src="img/logo.png" height={50} alt="O" />
                    <h1><span>O</span>BLIVION STORE</h1>
                </div>
            </Link>
            <div className={styles.search} style={{ display: `${searchAppearance}` }}>
                <img src="img/icons/search.svg" alt="поиск" />
                <input onChange={(event) => setSearchInput(event.currentTarget.value)} value={searchInput} ref={inputRef} placeholder="Поиск..." />
                {searchInput && <img onClick={() => { setSearchInput(""); inputRef.current.focus() }} src="img/icons/remove.svg" alt="clear" />}
            </div>
            <ul>
                <li onClick={toggleDrawer}>
                    <img src="img/icons/cart.svg" height={25} alt="корзина" />
                    <span >{getTotalPrice() + " руб."}</span>
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
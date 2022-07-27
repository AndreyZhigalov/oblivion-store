import React from "react";
import ContextData from "../../Context";
import debounce from "lodash.debounce"
import { Link, useLocation } from "react-router-dom"

import styles from "./Header.module.scss"

export const Header = () => {
    const inputRef = React.useRef()
    const { pathname } = useLocation()
    const { setSearchInput, getTotalPrice, toggleDrawer } = React.useContext(ContextData)
    const [inputValue, setInputValue] = React.useState("")

    const searchDelay = React.useCallback(debounce(str => setSearchInput(str), 300), [])

    const setInput = event => {
        let value = event.currentTarget.value
        searchDelay(value)
        setInputValue(value)
    }

    const clearSearchInput = () => {
        setInputValue("")
        setSearchInput("")
        inputRef.current.focus()
    }

    return (
        <header className={styles.header}>
            <Link to="oblivion-store/" >
                <div className={styles.logoContainer}>
                    <img src="img/logo.png" height={50} alt="O" />
                    <h1><span>O</span>BLIVION STORE</h1>
                </div>
            </Link>
            {pathname === "/oblivion-store/" && <div className={styles.search}>
                <img src="img/icons/search.svg" alt="поиск" />
                <input onChange={(event) => setInput(event)} value={inputValue} ref={inputRef} placeholder="Поиск..." />
                {inputValue && <img onClick={clearSearchInput} src="img/icons/remove.svg" alt="clear" />}
            </div>}
            <ul>
                <li onClick={toggleDrawer}>
                    <img src="img/icons/cart.svg" height={25} alt="корзина" />
                    <span >{getTotalPrice() + " руб."}</span>
                </li>
                <li >
                    <Link to="oblivion-store/favorites" onClick={clearSearchInput}>
                        <img src="img/icons/heart-common.svg" height={25} alt="избранное" />
                    </Link>
                </li>
                <li >
                    <Link to="oblivion-store/profile" onClick={clearSearchInput}>
                        <img src="img/icons/user.svg" height={28} alt="профиль" />
                    </Link>
                </li>
            </ul>
        </header>
    );
}
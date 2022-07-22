import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import { Advertisement } from "../components/Advertisement/AdvertIsement";
import ItemsBlock from "../components/ItemsBlock";
import ContextData from "../Context";

import styles from "../index.module.scss"

export function Catalog() {
    const { searchInput, itemsList, setActiveCategory } = React.useContext(ContextData)
    return (
        <div>
            <Advertisement />
            <div className={styles.catalog}>
                {searchInput.length > 0 ?
                    <h2 style={{ margin: '0' }}>{`Поиск по запросу "${searchInput}"`}</h2> :
                    <div className={styles.categories}>
                        <Link to="/bags" onClick={() => setActiveCategory("bags")}>Рюкзаки</Link>
                        <Link to="/notes" onClick={() => setActiveCategory("notes")}>Блокноты</Link>
                    </div>}
                <div className={styles.container}>
                    <Routes>
                        <Route path="" element={<ItemsBlock itemsList={itemsList} />}
                        />
                        <Route path="bags" element={<ItemsBlock itemsList={itemsList} />}
                        />
                        <Route path="notes" element={<ItemsBlock itemsList={itemsList} />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    )
}



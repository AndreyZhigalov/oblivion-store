import React from "react";
import { Link } from "react-router-dom";
import ContextData from "../Context";

export function Favorites() {
    const { searchInput, favoriteItems, itemsListLoader } = React.useContext(ContextData)
    return (
        <div className="catalog">
            {searchInput.length > 0 ?
                <h2 style={{ margin: '0' }}>{`Поиск по запросу "${searchInput}"`}</h2> :
                <h1 style={{ margin: '0' }}><Link to='/'><img src="img/icons/close-drawer.svg" alt="закрыть" /></Link>Избранное</h1>
            }
            <div className="container">
                {favoriteItems.length === 0 ?
                    <div className="favoriteEmpty">
                        <img src="img/notice/noFavorites.webp" alt="фанат" />
                        <p>Похоже тебе ничего не нравится, о великий чемпион. Зато мне нравишься ты!</p>
                    </div>
                    :
                    itemsListLoader(favoriteItems, searchInput)
                }
            </div>
        </div>
    )
}
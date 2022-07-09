import { ItemCard } from "../components/ItemCard/ItemCard";
import React from "react";
import { Link } from "react-router-dom";

export function Favorites({ searchInput, drawerItems, addToDrawer, favoriteItems, addToFavorite }) {
    return (
        <div className="catalog">
            {searchInput.length > 0 ?
                <h2 style={{ margin: '0' }}>{`Поиск по запросу "${searchInput}"`}</h2> :
                <h1 style={{ margin: '0' }}><Link to='/'><img src="img/icons/close-drawer.svg" alt="close" /></Link>Избранное</h1>
            }
            <div className="container">
                {favoriteItems.length === 0 ?
                    <div className="favoriteEmpty">
                        <img src="./img/notice/noFavorites.webp" alt="Champion's fan" />
                        <p>Похоже тебе ничего не нравится, о великий чемпион. Зато мне нравишься ты!</p>
                    </div>
                    :
                    favoriteItems.filter(obj => obj.title.toLowerCase().includes(searchInput.toLowerCase())).map(obj =>
                        <ItemCard
                            key={obj.id}
                            isAdded={drawerItems.filter(item => item.id === obj.id)[0]}
                            isFavorite={favoriteItems.find(item => item.id === obj.id)}
                            addToFavorite={() => { addToFavorite(obj) }}
                            addToDrawer={() => { addToDrawer(obj) }}
                            {...obj} />)
                }
            </div>
        </div>
    )
}
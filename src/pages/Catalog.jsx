import { Link, Route, Routes } from "react-router-dom"
import { ItemCard } from "../components/ItemCard/ItemCard";
import React from "react";

export function Catalog({ searchInput, bagsList, drawerItems, addToDrawer, favoriteItems, addToFavorite, notesList }) {
    return (
        <div className="catalog">
            {searchInput.length > 0 ?
                <h2 style={{ margin: '0' }}>{`Поиск по запросу "${searchInput}"`}</h2> :
                <div className="categories">
                    <Link to="/bags">Рюкзаки</Link>
                    <Link to="/notes">Блокноты</Link>
                </div>}
            <div className="catalog__container">
                <Routes>
                    <Route path="/" element={
                        bagsList.filter(obj => obj.title.toLowerCase().includes(searchInput.toLowerCase())).map(obj =>
                            <ItemCard
                                key={obj.id}
                                isAdded={drawerItems.filter(item => item.id === obj.id)[0]}
                                isFavorite={favoriteItems.find(item => item.id === obj.id)}
                                addToFavorite={() => { addToFavorite(obj) }}
                                addToDrawer={() => { addToDrawer(obj) }}
                                {...obj} />)
                    }
                    />
                    <Route path="/bags" element={
                        bagsList.filter(obj => obj.title.toLowerCase().includes(searchInput.toLowerCase())).map(obj =>
                            <ItemCard
                                key={obj.id}
                                isAdded={drawerItems.find(item => item.id === obj.id)}
                                isFavorite={favoriteItems.find(item => item.id === obj.id)}
                                addToFavorite={() => { addToFavorite(obj) }}
                                addToDrawer={() => { addToDrawer(obj) }}
                                {...obj} />)
                    }
                    />
                    <Route path="/notes" element={
                        notesList.filter(obj => obj.title.toLowerCase().includes(searchInput.toLowerCase())).map(obj =>
                            <ItemCard
                                key={obj.id}
                                isAdded={drawerItems.filter(item => item.id === obj.id)[0]}
                                isFavorite={favoriteItems.find(item => item.id === obj.id)}
                                addToFavorite={() => { addToFavorite(obj) }}
                                addToDrawer={() => { addToDrawer(obj) }}
                                {...obj} />)
                    }
                    />
                </Routes>
            </div>
        </div>
    )
}
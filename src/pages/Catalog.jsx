import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import { Advertisement } from "../components/Advertisement/AdvertIsement";

export function Catalog({ searchInput, itemsListLoader, itemsList, setActiveCategory }) {
    return (
        <div>
            <Advertisement />
            <div className="catalog">
                {searchInput.length > 0 ?
                    <h2 style={{ margin: '0' }}>{`Поиск по запросу "${searchInput}"`}</h2> :
                    <div className="categories">
                        <Link to="/bags" onClick={() => setActiveCategory("bags")}>Рюкзаки</Link>
                        <Link to="/notes" onClick={() => setActiveCategory("notes")}>Блокноты</Link>
                    </div>}
                <div className="container">
                    <Routes>
                        <Route path="" element={itemsListLoader(itemsList, searchInput)}
                        />
                        <Route path="bags" element={itemsListLoader(itemsList, searchInput)}
                        />
                        <Route path="notes" element={itemsListLoader(itemsList, searchInput)}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    )
}



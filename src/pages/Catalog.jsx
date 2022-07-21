import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import { Advertisement } from "../components/Advertisement/AdvertIsement";
import ContextData from "../Context";

export function Catalog() {
    const { searchInput, itemsListLoader, itemsList, setActiveCategory } = React.useContext(ContextData)
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
                        <Route path="" element={itemsListLoader(itemsList)}
                        />
                        <Route path="bags" element={itemsListLoader(itemsList)}
                        />
                        <Route path="notes" element={itemsListLoader(itemsList)}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    )
}



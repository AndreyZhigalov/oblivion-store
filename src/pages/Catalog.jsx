import React from "react";
import { Link, Route, Routes } from "react-router-dom"


export function Catalog({ searchInput, itemsListLoader, bagsList, notesList }) {
    return (
        <div className="catalog">
            {searchInput.length > 0 ?
                <h2 style={{ margin: '0' }}>{`Поиск по запросу "${searchInput}"`}</h2> :
                <div className="categories">
                    <Link to="/bags">Рюкзаки</Link>
                    <Link to="/notes">Блокноты</Link>
                </div>}
            <div className="container">
                <Routes>
                    <Route path="" element={itemsListLoader(bagsList, searchInput)}
                    />
                    <Route path="bags" element={itemsListLoader(bagsList, searchInput)}
                    />
                    <Route path="notes" element={itemsListLoader(notesList, searchInput)}
                    />
                </Routes>
            </div>
        </div>
    )
}



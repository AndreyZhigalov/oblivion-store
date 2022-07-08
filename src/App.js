import { Advertisement } from "./components/Advertisement/AdvertIsement";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import { Catalog } from "./pages/Catalog";
import { Favorites } from "./pages/Favorites";


function App() {
  const [bagsList, setBagsList] = useState([])
  const [notesList, setNotesList] = useState([])
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [drawerItems, setDrawerItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [searchInput, setSearchInput] = React.useState("")

  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened)
  }

  useEffect(() => {
    axios.get('https://62c57e71134fa108c25402bf.mockapi.io/bags')
      .then(resp => setBagsList(resp.data))
    axios.get('https://62c57e71134fa108c25402bf.mockapi.io/notes')
      .then(resp => setNotesList(resp.data))
    axios.get('https://62c57e71134fa108c25402bf.mockapi.io/drawer')
      .then(res => setDrawerItems(res.data))
    axios.get('https://62c57e71134fa108c25402bf.mockapi.io/favorites')
      .then(res => setFavoriteItems(res.data))
  }, [])

  const addToDrawer = async (obj) => {
    try {
      let drawerChecker = drawerItems.find(item => item.id === obj.id)
      if (drawerChecker) {
        axios.delete(`https://62c57e71134fa108c25402bf.mockapi.io/drawer/${drawerChecker.drawerID}`)
        setDrawerItems(prev => prev.filter(item => item.id !== obj.id))
      } else {
        let { data } = await axios.post('https://62c57e71134fa108c25402bf.mockapi.io/drawer', obj)
        setDrawerItems(prev => [...prev, data])
      }
    } catch (error) {
      alert("Предмет не был добавлен в корзину")
    }
  }

  const addToFavorite = async (obj) => {
    try {
      let favoriteChecker = favoriteItems.find(item => item.id === obj.id)
      if (favoriteChecker) {
        axios.delete(`https://62c57e71134fa108c25402bf.mockapi.io/favorites/${favoriteChecker.favoriteID}`)
        setFavoriteItems(prev => prev.filter(item => item.id !== obj.id))
      } else {
        let { data } = await axios.post('https://62c57e71134fa108c25402bf.mockapi.io/favorites', obj)
        setFavoriteItems(prev => [...prev, data])
      }
    } catch (error) {
      alert("Предмет не был добавлен в избранные")
    }
  }
  const getTotalPrice = () => {
    let items = drawerItems.map(item => item.price);
    return items[0] ? items.reduce((num1, num2) => num1 + num2) : 0;
  }

  const getTax = () => {
    return (getTotalPrice() * 0.05).toFixed(2) || 0
  }

  const getInputValue = (event) => {
    setSearchInput(event.currentTarget.value)
  }
  return (
    <div className="wrapper">
      {drawerOpened && <Drawer
        drawerItems={drawerItems}
        hideDrawer={toggleDrawer}
        removeItem={setDrawerItems}
        totalPrice={getTotalPrice}
        tax={getTax}
      />}
      <Header
        showDrawer={toggleDrawer}
        totalPrice={getTotalPrice}
        getInputValue={getInputValue}
        searchInput={searchInput} />
      {/* <Advertisement /> */}
      <Routes>
        <Route path="/*" element={<Catalog
          searchInput={searchInput}
          bagsList={bagsList}
          notesList={notesList}
          drawerItems={drawerItems}
          addToDrawer={addToDrawer}
          favoriteItems={favoriteItems}
          addToFavorite={addToFavorite} />}
        />
        <Route path="/favorites" element={<Favorites
          searchInput={searchInput}
          drawerItems={drawerItems}
          addToDrawer={addToDrawer}
          favoriteItems={favoriteItems}
          addToFavorite={addToFavorite} />}
        />
      </Routes>
    </div>
  );
}

export default App;


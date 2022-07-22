import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Route, Routes } from "react-router-dom"
import ContextData from "./Context";

import { Header } from "./components/Header/Header";
import { Drawer } from "./components/Drawer/Drawer";
import { Catalog } from "./pages/Catalog";
import { Favorites } from "./pages/Favorites";
import { Profile } from "./pages/Profile";

import styles from "./index.module.scss"

function App() {
  const [itemsList, setItemsList] = useState([])
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [drawerItems, setDrawerItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [searchAppearance, setSearchAppearance] = useState("normal")
  const [activeCategory, setActiveCategory] = useState("bags")

  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened)
  }

  useEffect(() => {
    try {
      axios.get('https://62c57e71134fa108c25402bf.mockapi.io/drawer')
        .then(res => setDrawerItems(res.data))
      axios.get('https://62c57e71134fa108c25402bf.mockapi.io/favorites')
        .then(res => setFavoriteItems(res.data))
    } catch (error) {
      alert("Ошибка при загрузке корзины или избранных с сервера")
      console.error(error)
    }
  }, [])

  useEffect(() => {
    const search = searchInput ? `&title=${searchInput}` : "";
    const category = activeCategory ? `&category=${activeCategory}` : "";
    try {
      axios.get(`https://62c57e71134fa108c25402bf.mockapi.io/items?${search}${category}`)
        .then(resp => setItemsList(resp.data))
    } catch (error) {
      alert("Ошибка при загрузке каталога товаров")
      console.error(error)
    }
  }, [activeCategory, searchInput])

  const addToDrawer = async (obj) => {
    try {
      let drawerChecker = drawerItems.find(item => item.id === obj.id)
      if (drawerChecker) {
        axios.delete(`https://62c57e71134fa108c25402bf.mockapi.io/drawer/${drawerChecker.drawerID}`)
        setDrawerItems(prev => prev.filter(item => item.id !== obj.id))
      } else {
        setDrawerItems(prev => [...prev, obj])
        let { data } = await axios.post('https://62c57e71134fa108c25402bf.mockapi.io/drawer', obj)
        setDrawerItems(prev => prev.map((item) => {
          if (item.id === data.id) {
            return {
              ...item,
              drawerID: data.drawerID
            }
          } return item
        }))
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину")
    }
  }

  const addToFavorite = async (obj) => {
    try {
      let favoriteChecker = favoriteItems.find(item => item.id === obj.id)
      if (favoriteChecker) {
        axios.delete(`https://62c57e71134fa108c25402bf.mockapi.io/favorites/${favoriteChecker.favoriteID}`)
        setFavoriteItems(prev => prev.filter(item => item.id !== obj.id))
      } else {
        setFavoriteItems(prev => [...prev, obj])
        let { data } = await axios.post('https://62c57e71134fa108c25402bf.mockapi.io/favorites', obj)
        setFavoriteItems(prev => prev.map((item) => {
          if (item.id === data.id) {
            return {
              ...item,
              favoriteID: data.favoriteID
            }
          } return item
        }))
      }
    } catch (error) {
      alert("Ошибка при добавлении в избранные")
    }
  }

  const getTotalPrice = () => {
    return drawerItems[0] ? drawerItems.reduce((sum, obj) => sum + obj.price, 0) : 0;
  }

  const toggleSearch = (value) => {
    setSearchAppearance(value)
  }

  const isAdded = (id) => {
    return drawerItems.some(item => item.id === id)
  }

  const isFavorite = (id) => {
    return favoriteItems.some(item => item.id === id)
  }

  const contextValues = {
    isAdded,
    isFavorite,
    addToDrawer,
    addToFavorite,
    favoriteItems,
    searchInput,
    setSearchInput,
    getTotalPrice,
    searchAppearance,
    toggleSearch,
    toggleDrawer,
    drawerItems,
    setDrawerItems,
    drawerOpened,
    itemsList,
    setActiveCategory
  }

  return (
    <ContextData.Provider value={contextValues}>
      <div className={styles.wrapper}>
        <Drawer />
        <Header />
        <Routes>
          <Route path="*" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </ContextData.Provider>
  );
}

export default App;






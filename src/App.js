import { Advertisement } from "./components/Advertisement/AdvertIsement";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import { Catalog } from "./pages/Catalog";
import { Favorites } from "./pages/Favorites";
import { Profile } from "./pages/Profile";
import ContextData from "./Context";
import ContentLoader from "react-content-loader"
import { ItemCard } from "./components/ItemCard/ItemCard";

function App() {
  const [bagsList, setBagsList] = useState([])
  const [notesList, setNotesList] = useState([])
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [drawerItems, setDrawerItems] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [searchAppearance, setSearchAppearance] = useState("normal")
  const [userData, getUserData] = useState([])

  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened)
  }

  useEffect(() => {
    try {
      axios.get('https://62c57e71134fa108c25402bf.mockapi.io/bags')
        .then(resp => setBagsList(resp.data))
      axios.get('https://62c57e71134fa108c25402bf.mockapi.io/notes')
        .then(resp => setNotesList(resp.data))
      axios.get('https://62c57e71134fa108c25402bf.mockapi.io/drawer')
        .then(res => setDrawerItems(res.data))
      axios.get('https://62c57e71134fa108c25402bf.mockapi.io/favorites')
        .then(res => setFavoriteItems(res.data))
      axios.get("https://62c8d53c0f32635590dd50d6.mockapi.io/user")
        .then(res => getUserData(res.data))
    } catch (error) {
      alert("Data is missing")
    }

  }, [])

  const itemsListLoader = (listOfItems, searchInput) => {
    const emptyList = [...Array(8)].map((item, i) => {
      return <ContentLoader
        key={i}
        speed={2}
        width={230}
        height={350}
        viewBox="0 0 230 350"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...item}
      >
        <rect x="0" y="0" rx="0" ry="0" width="230" height="230" />
        <rect x="10" y="244" rx="0" ry="0" width="206" height="17" />
        <rect x="10" y="267" rx="0" ry="0" width="153" height="13" />
        <rect x="10" y="289" rx="0" ry="0" width="63" height="17" />
        <rect x="10" y="313" rx="0" ry="0" width="139" height="19" />
        <rect x="179" y="290" rx="0" ry="0" width="40" height="40" />
      </ContentLoader>
    })

    if (searchInput) {
      if (listOfItems.length > 0) {
        return listOfItems.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()))
          .map(item => <ItemCard key={item.id} item={item} />)
      } return emptyList
    } else {
      if (listOfItems.length > 0) {
        return listOfItems.map(item => <ItemCard key={item.id} item={item} />)
      } return emptyList
    }
  }

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
    return drawerItems[0] ? drawerItems.map(item => item.price).reduce((num1, num2) => num1 + num2) : 0;
  }

  const getTax = () => {
    return (getTotalPrice() * 0.05).toFixed(2) || 0
  }

  const getInputValue = (event) => {
    setSearchInput(event.currentTarget.value)
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

  return (
    <ContextData.Provider value={
      {
        userData,
        isAdded,
        isFavorite,
        addToDrawer,
        addToFavorite,
        getTotalPrice,
        getTax,
        bagsList,
        notesList,
        searchInput
      }}>

      <div className="wrapper">
        {drawerOpened && <Drawer
          drawerItems={drawerItems}
          hideDrawer={toggleDrawer}
          removeItem={setDrawerItems}
        />}
        <Header
          showDrawer={toggleDrawer}
          totalPrice={getTotalPrice}
          getInputValue={getInputValue}
          searchInput={searchInput}
          toggleSearch={toggleSearch}
          searchAppearance={searchAppearance}
        />
        {/* <Advertisement /> */}
        <Routes>
          <Route path="/*" element={<Catalog
            searchInput={searchInput}
            bagsList={bagsList}
            notesList={notesList}
            itemsListLoader={itemsListLoader}
          />}
          />
          <Route path="/favorites" element={<Favorites
            searchInput={searchInput}
            favoriteItems={favoriteItems}
            itemsListLoader={itemsListLoader}
          />}
          />
          <Route path="/profile" element={<Profile
            toggleSearch={toggleSearch}
          />}
          />
        </Routes>
      </div>
    </ContextData.Provider>
  );
}

export default App;







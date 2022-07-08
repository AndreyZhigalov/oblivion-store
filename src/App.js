import { Advertisement } from "./components/Advertisement/AdvertIsement";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import { ItemCard } from "./components/ItemCard/ItemCard";
import axios from 'axios'
import React, { useState, useEffect } from "react";


function App() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [catalogItems, setCatalogItems] = useState([])
  const [drawerItems, setDrawerItems] = useState([])
  const [searchInput, setSearchInput] = React.useState("")

  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened)
  }
  useEffect(() => {
    axios.get('https://62c57e71134fa108c25402bf.mockapi.io/bags')
      .then(resp => setCatalogItems(resp.data))
    axios.get('https://62c57e71134fa108c25402bf.mockapi.io/drawer')
      .then(res => setDrawerItems(res.data))
  }, [])

  const addToDrawer = (obj) => {
    let itemChecker = drawerItems.filter(item => item.id === obj.id)[0]
    if (itemChecker) {
      axios.delete(`https://62c57e71134fa108c25402bf.mockapi.io/drawer/${itemChecker.dbID}`)
      setDrawerItems(prev => prev.filter(i => i.id !== obj.id))
    } else {
      axios.post('https://62c57e71134fa108c25402bf.mockapi.io/drawer', obj).then(() => {
        axios.get('https://62c57e71134fa108c25402bf.mockapi.io/drawer')
          .then(res => setDrawerItems(prev => [...prev, res.data[res.data.length - 1]]))
      }
      )
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
      <div className="catalog">

        {searchInput.length > 0 ?
          <h1 style={{ margin: '0' }}>{`Поиск по запросу "${searchInput}"`}</h1> :
          <div className="categories">
            <a href="?">Рюкзаки</a>
            <a href="?">Блокноты</a>
            <a href="?">Кружки</a>
            <a href="?">Футболки</a>
            <a href="?">Аксессуары</a>;
          </div>}

        <div className="catalog__container">
          {catalogItems.filter(obj => obj.title.toLowerCase().includes(searchInput.toLowerCase())).map(obj =>
            <ItemCard
              key={obj.id}
              isAdded={drawerItems.filter(item => item.id === obj.id)[0]}
              addToDrawer={() => { addToDrawer(obj) }}
              imageUrl={obj.itemImage}
              title={obj.title}
              price={obj.price} />)}
        </div>
      </div>
    </div>

  );

}

export default App;


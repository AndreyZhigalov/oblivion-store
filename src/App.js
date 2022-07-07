import { Advertisement } from "./components/Advertisement/AdvertIsement";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import { ItemCard } from "./components/ItemCard/ItemCard";
import React, { useState, useEffect } from "react";


function App() {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const [catalogItems, setItems] = useState([])
  const [drawerItems, setDrawerItems] = useState([])

  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened)
  }

  useEffect(() => {
    fetch('https://62c57e71134fa108c25402bf.mockapi.io/bags')
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        setItems(json)
      });
  }, [])

  const addToDrawer = (obj) => {
    if (drawerItems.includes(obj)) {
      setDrawerItems(drawerItems.filter(i => i !== obj))
    } else {
      setDrawerItems(prev => [...prev, obj]);
    }
  }
  const getTotalPrice = () => {
    let items = drawerItems.map(item => item.price);
    return items[0] ? items.reduce((num1, num2) => num1 + num2) : 0;
  }

  const getTax = () => {
    return (getTotalPrice() * 0.05).toFixed(2) || 0
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
      <Header showDrawer={toggleDrawer}
        totalPrice={getTotalPrice} />
      {/* <Advertisement /> */}
      <div className="catalog">
        <div className="categories">
          <a href="?">Рюкзаки</a>
          <a href="?">Блокноты</a>
          <a href="?">Кружки</a>
          <a href="?">Футболки</a>
          <a href="?">Аксессуары</a>
        </div>
        <div className="catalog__container">
          {catalogItems.map(obj =>
            <ItemCard
              key={obj.id}
              isAdded={drawerItems.includes(obj)}
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


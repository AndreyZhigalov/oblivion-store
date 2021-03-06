import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import qs from 'qs';

import ContextData, { Item, ContextObject } from './Context';
import { Header } from './components/Header/Header';
import { Drawer } from './components/Drawer/Drawer';
import { Catalog } from './pages/Catalog';
import { Favorites } from './pages/Favorites';
import { Profile } from './pages/Profile';

import styles from './index.module.scss';
import { NotFound } from './pages/NotFound';
import ItemPage from './pages/ItemPage';

type SearchParams = {
  category: string;
  search: string;
};

const App: React.FC = () => {
  const [itemsList, setItemsList] = useState<Item[]>([]);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [drawerItems, setDrawerItems] = useState<Item[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<Item[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [activeCategory, setActiveCategory] = useState('bags');
  const navigate = useNavigate();
  const [wasLoaded, setWasLoaded] = useState(false);
  const isFiltered = useRef(false);

  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened);
  };

  useEffect(() => {
    try {
      axios
        .get('https://62c57e71134fa108c25402bf.mockapi.io/drawer')
        .then((res) => setDrawerItems(res.data));
      axios
        .get('https://62c57e71134fa108c25402bf.mockapi.io/favorites')
        .then((res) => setFavoriteItems(res.data));
    } catch (error) {
      alert('Ошибка при загрузке корзины или избранных с сервера');
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (isFiltered.current) {
      const search = searchInput ? `title=${searchInput}` : '';
      const category = activeCategory ? `&category=${activeCategory}` : '';
      try {
        axios
          .get(`https://62c57e71134fa108c25402bf.mockapi.io/items?${search}${category}`)
          .then((resp) => setItemsList(resp.data));
      } catch (error) {
        alert('Ошибка при загрузке каталога товаров');
        console.error(error);
      }
    }
  }, [activeCategory, searchInput, isFiltered.current]);

  useEffect(() => {
    if (window.location.search) {
      let searchParams = qs.parse(window.location.search.substring(1)) as SearchParams;
      if (searchParams.search) setSearchInput(searchParams.search);
      if (searchParams.category) setActiveCategory(searchParams.category);
    }
    isFiltered.current = true;
  }, []);

  useEffect(() => {
    if (wasLoaded) {
      let filterParams;
      if (searchInput) {
        filterParams = qs.stringify({
          search: searchInput,
        });
      } else {
        filterParams = qs.stringify({
          category: activeCategory,
        });
      }
      navigate(`?${filterParams}`);
    }
    setWasLoaded(true);
  }, [activeCategory, searchInput]);

  const addToDrawer = async (obj: Item) => {
    try {
      let drawerChecker = drawerItems.find((item) => item.id === obj.id);
      if (drawerChecker) {
        axios.delete(
          `https://62c57e71134fa108c25402bf.mockapi.io/drawer/${drawerChecker.drawerID}`,
        );
        setDrawerItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        setDrawerItems((prev) => [...prev, obj]);
        let { data } = await axios.post('https://62c57e71134fa108c25402bf.mockapi.io/drawer', obj);
        setDrawerItems((prev) =>
          prev.map((item) => {
            if (item.id === data.id) {
              return {
                ...item,
                drawerID: data.drawerID,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
    }
  };

  const addToFavorite = async (obj: Item) => {
    try {
      let favoriteChecker = favoriteItems.find((item) => item.id === obj.id);
      if (favoriteChecker) {
        axios.delete(
          `https://62c57e71134fa108c25402bf.mockapi.io/favorites/${favoriteChecker.favoriteID}`,
        );
        setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        setFavoriteItems((prev) => [...prev, obj]);
        let { data } = await axios.post(
          'https://62c57e71134fa108c25402bf.mockapi.io/favorites',
          obj,
        );
        setFavoriteItems((prev) =>
          prev.map((item) => {
            if (item.id === data.id) {
              return {
                ...item,
                favoriteID: data.favoriteID,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Ошибка при добавлении в избранные');
    }
  };

  const getTotalPrice = () => {
    return drawerItems[0] ? drawerItems.reduce((sum: number, obj) => sum + obj.price, 0) : 0;
  };

  const isAdded = (id: string) => {
    return drawerItems.some((item) => item.id === id);
  };

  const isFavorite = (id: string) => {
    return favoriteItems.some((item) => item.id === id);
  };

  const contextValues: ContextObject = {
    isAdded,
    isFavorite,
    addToDrawer,
    addToFavorite,
    favoriteItems,
    searchInput,
    setSearchInput,
    getTotalPrice,
    toggleDrawer,
    drawerItems,
    setDrawerItems,
    drawerOpened,
    itemsList,
    setActiveCategory,
    activeCategory,
  };

  return (
    <ContextData.Provider value={contextValues}>
      <div className={styles.wrapper}>
        <Drawer />
        <Header />
        <Routes>
          <Route path="oblivion-store/" element={<Catalog />} />
          <Route path="oblivion-store/item=:id" element={<ItemPage />} />
          <Route path="oblivion-store/favorites" element={<Favorites />} />
          <Route path="oblivion-store/profile" element={<Profile />} />
          <Route path="oblivion-store/*" element={<NotFound />} />
        </Routes>
      </div>
    </ContextData.Provider>
  );
};

export default App;

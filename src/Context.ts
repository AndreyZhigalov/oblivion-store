import React from 'react';

export type Item = {
  title: string;
  itemImage: string;
  itemImageLarge: string;
  category: string;
  price: number;
  id: string;
  favoriteID?: string;
  drawerID?: string;
};

export interface ContextObject {
  isAdded: (id: string) => boolean;
  isFavorite: (id: string) => boolean;
  addToDrawer: (obj: Item) => Promise<void>;
  addToFavorite: (obj: Item) => Promise<void>;
  favoriteItems: Item[];
  drawerItems: Item[];
  itemsList: Item[];
  searchInput: string;
  setSearchInput: (value: string) => void;
  getTotalPrice: () => number;
  toggleDrawer: () => void;
  setDrawerItems: (value: Item[]) => void;
  drawerOpened: boolean;
  setActiveCategory: (value: string) => void;
  activeCategory: string;
}

const ContextData = React.createContext<ContextObject>({} as ContextObject);

export default ContextData;

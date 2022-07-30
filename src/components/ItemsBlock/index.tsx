import React from 'react';
import ContentLoader from 'react-content-loader';
import ContextData, { Item } from '../../Context';
import { ItemCard } from '../ItemCard/ItemCard';

const ItemsBlock: React.FC<{ itemsList: Item[] }> = ({ itemsList }) => {
  const { searchInput } = React.useContext(ContextData);

  const itemsListLoader = (listOfItems: Item[], searchInput: string) => {
    const emptyList = [...Array(8)].map((item, i) => {
      return (
        <ContentLoader
          key={i}
          speed={2}
          width={230}
          height={350}
          viewBox="0 0 230 350"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...item}>
          <rect x="0" y="0" rx="0" ry="0" width="230" height="230" />
          <rect x="10" y="244" rx="0" ry="0" width="206" height="17" />
          <rect x="10" y="267" rx="0" ry="0" width="153" height="13" />
          <rect x="10" y="289" rx="0" ry="0" width="63" height="17" />
          <rect x="10" y="313" rx="0" ry="0" width="139" height="19" />
          <rect x="179" y="290" rx="0" ry="0" width="40" height="40" />
        </ContentLoader>
      );
    });

    if (searchInput) {
      if (listOfItems.length > 0) {
        return itemsList
          .filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()))
          .map((item) => <ItemCard key={item.id} item={item} />);
      }
    } else {
      if (listOfItems.length > 0) {
        return itemsList.map((item) => <ItemCard key={item.id} item={item} />);
      }
      return emptyList;
    }
  };

  return <>{itemsListLoader(itemsList, searchInput)}</>;
};

export default ItemsBlock;

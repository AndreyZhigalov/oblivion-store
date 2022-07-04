import { Advertisement } from "./components/Advertisement/AdvertIsement";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import { ItemCard } from "./components/ItemCard/ItemCard";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <Advertisement />
      <div className="catalog">
        <div className="categories">
          <a>Рюкзаки</a>
          <a>Блокноты</a>
          <a>Кружки</a>
          <a>Футболки</a>
          <a>Аксессуары</a>
        </div>
        <div className="catalog__container">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
}

export default App;

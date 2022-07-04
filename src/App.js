function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2><img src="img/icons/close-drawer.svg" alt="close" /> Корзина</h2>
          <div className="cartBlock">
            <div className="cart-item">
              <img src="/img/bags/bag 1.jpg" alt="item" />
              <div>
                <p>Рюкзак TES Oblivion Навык Лёгкая Броня</p>
                <span>12 999 руб.</span>
              </div>
              <img src="/img/icons/remove.svg" alt="remove" />
            </div>
            <div className="cart-item">
              <img src="/img/bags/bag 2.jpg" alt="item" />
              <div>
                <p>Рюкзак TES Oblivion Навык Скрытность</p>
                <span>12 999 руб.</span>
              </div>
              <img src="/img/icons/remove.svg" alt="remove" />
            </div>
            <div className="cart-item">
              <img src="/img/bags/bag 18.jpg" alt="item" />
              <div>
                <p>Рюкзак TES Oblivion Навык Иллюзия</p>
                <span>12 999 руб.</span>
              </div>
              <img src="/img/icons/remove.svg" alt="remove" />
            </div>
            <div className="cart-item">
              <img src="/img/bags/bag 1.jpg" alt="item" />
              <div>
                <p>Рюкзак TES Oblivion Навык Лёгкая Броня</p>
                <span>12 999 руб.</span>
              </div>
              <img src="/img/icons/remove.svg" alt="remove" />
            </div>
            <div className="cart-item">
              <img src="/img/bags/bag 2.jpg" alt="item" />
              <div>
                <p>Рюкзак TES Oblivion Навык Скрытность</p>
                <span>12 999 руб.</span>
              </div>
              <img src="/img/icons/remove.svg" alt="remove" />
            </div>
            <div className="cart-item">
              <img src="/img/bags/bag 18.jpg" alt="item" />
              <div>
                <p>Рюкзак TES Oblivion Навык Иллюзия</p>
                <span>12 999 руб.</span>
              </div>
              <img src="/img/icons/remove.svg" alt="remove" />
            </div>
            <div className="cart-item">
              <img src="/img/bags/bag 1.jpg" alt="item" />
              <div>
                <p>Рюкзак TES Oblivion Навык Лёгкая Броня</p>
                <span>12 999 руб.</span>
              </div>
              <img src="/img/icons/remove.svg" alt="remove" />
            </div>
            <div className="cart-item">
              <img src="/img/bags/bag 2.jpg" alt="item" />
              <div>
                <p>Рюкзак TES Oblivion Навык Скрытность</p>
                <span>12 999 руб.</span>
              </div>
              <img src="/img/icons/remove.svg" alt="remove" />
            </div>
            <div className="cart-item">
              <img src="/img/bags/bag 18.jpg" alt="item" />
              <div>
                <p>Рюкзак TES Oblivion Навык Иллюзия</p>
                <span>12 999 руб.</span>
              </div>
              <img src="/img/icons/remove.svg" alt="remove" />
            </div>
          </div>
          <div className="total-block">
            <div className="total">
              <h3>Итого:</h3>
              <div></div>
              <b>38 997 руб.</b>
            </div>
            <div className="tax">
              <h3>Налог 5%:</h3>
              <div></div>
              <b>1949,85 руб.</b>
            </div>
          </div>
          <button className="mainButton">Оформить заказ
            <img src="/img/icons/button-arrow-right.svg" alt="arrow" />
          </button>
        </div>
      </div>
      <header className="header">
        <div className="logo-container">
          <img src="/img/logo.png" height={50} alt="O" />
          <h1>BLIVION STORE</h1>
        </div>
        <div className="search">
          <img src="/img/icons/search.svg" alt="search" />
          <input placeholder="Поиск..." />
        </div>
        <ul>
          <li>
            <img src="/img/icons/cart.svg" height={25} alt="cart" />
            <span>12500 руб.</span>
          </li>
          <li><img src="/img/icons/heart-common.svg" height={25} alt="favorite" /></li>
          <li><img src="/img/icons/user.svg" height={28} alt="user" /></li>
        </ul>
      </header>
      <div className="advertise-cover">
        <img src="/img/icons/arrow-left.svg" />
        <img src="img/cover.jpg" />
        <img src="/img/icons/arrow-right.svg" />
      </div>
      <div className="catalog">
        <div className="categories">
          <a>Рюкзаки</a>
          <a>Блокноты</a>
          <a>Кружки</a>
          <a>Футболки</a>
          <a>Аксессуары</a>
        </div>
        <div className="catalog__container">
          <div className="catalog__item">
            <img src="/img/icons/heart-unchecked.svg" alt="favorite" />
            <img src="/img/Bags/bag 1.jpg" alt="item" />
            <div>
              <h3>Рюкзак TES Oblivion Навык Лёгкая Броня</h3>
              <p>Цена</p>
              <span>12 999 руб.</span>
            </div>
            <img src="/img/icons/add-unchecked.svg" alt="add" />
          </div>
          <div className="catalog__item">
            <img src="/img/icons/heart-unchecked.svg" alt="favorite" />
            <img src="/img/Bags/bag 2.jpg" alt="item" />
            <div>
              <h3>Рюкзак TES Oblivion Навык Скрытность</h3>
              <p>Цена</p>
              <span>12 999 руб.</span>
            </div>
            <img src="/img/icons/add-unchecked.svg" alt="add" />
          </div>
          <div className="catalog__item">
            <img src="/img/icons/heart-unchecked.svg" alt="favorite" />
            <img src="/img/Bags/bag 3.jpg" alt="item" />
            <div>
              <h3>Рюкзак TES Oblivion Навык Стрельба</h3>
              <p>Цена</p>
              <span>12 999 руб.</span>
            </div>
            <img src="/img/icons/add-unchecked.svg" alt="add" />
          </div>
          <div className="catalog__item">
            <img src="/img/icons/heart-unchecked.svg" alt="favorite" />
            <img src="/img/Bags/bag 4.jpg" alt="item" />
            <div>
              <h3>Рюкзак TES Oblivion Навык Разрушение</h3>
              <p>Цена</p>
              <span>12 999 руб.</span>
            </div>
            <img src="/img/icons/add-checked.svg" alt="add" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

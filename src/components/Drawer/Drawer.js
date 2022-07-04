export const Drawer = () => {
    return (
        <div className="overlay" style={{ display: "none" }}>
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
    );
}
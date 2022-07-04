export const Header = () => {
    return (
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
    );
}
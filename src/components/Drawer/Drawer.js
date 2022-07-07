import styles from "./Drawer.module.scss"
import { DrawerItem } from "./DrawerItem/DrawerItem";

export const Drawer = (props) => {

    return (
        <div className={styles.overlay} >
            <div className={styles.drawer} >
                <h2><img onClick={props.hideDrawer} src="img/icons/close-drawer.svg" alt="close" /> Корзина</h2>
                <div className={styles.cartBlock}>
                    {props.drawerItems.map(item =>
                        <DrawerItem
                            itemImage={item.itemImage}
                            title={item.title}
                            price={item.price}
                            removeItem={() => { props.removeItem(props.drawerItems.filter(i => i.id !== item.id)) }}
                        />)}
                </div>
                <div className={styles.totalBlock}>
                    <div className={styles.total}>
                        <h3>Итого:</h3>
                        <div></div>
                        <b>{props.totalPrice() + " руб."}</b>
                    </div>
                    <div className={styles.tax}>
                        <h3>Налог 5%:</h3>
                        <div></div>
                        <b>{props.tax() + " руб."}</b>
                    </div>
                </div>
                <button className={styles.mainButton}>Оформить заказ
                    <img src="/img/icons/button-arrow-right.svg" alt="arrow" />
                </button>
            </div>
        </div>
    );
}
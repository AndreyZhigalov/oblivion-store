import styles from "./DrawerItem.module.scss"

export const DrawerItem = (props) => {
    return (
        <div className={styles.cartItem}>
            <img src={props.itemImage} alt="item" />
            <div>
                <p>{props.title}</p>
                <span>{props.price} руб.</span>
            </div>
            <img onClick={props.removeItem} src="/img/icons/remove.svg" alt="remove" />
        </div>
    );
}
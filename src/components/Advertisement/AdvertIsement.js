import styles from "./Advertisement.module.scss"

export const Advertisement = () => {
    return (
        <div className={styles.advertiseCover}>
            <img src="/img/icons/arrow-left.svg" />
            <img src="img/cover.jpg" />
            <img src="/img/icons/arrow-right.svg" />
        </div>
    );
}
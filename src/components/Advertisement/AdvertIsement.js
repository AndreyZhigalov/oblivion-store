import styles from "./Advertisement.module.scss"

export const Advertisement = () => {
    return (
        <div className={styles.advertiseCover}>
            <img src="img/icons/arrow-left.svg" alt="Предыдущий слайд" />
            <img src="img/cover.jpg" alt="Реклама" />
            <img src="img/icons/arrow-right.svg" alt="Следующий слайд" />
        </div>
    );
}
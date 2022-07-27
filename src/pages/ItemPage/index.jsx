import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import ContextData from '../../Context';
import styles from "./ItemPage.module.scss"

const ItemPage = () => {
    const [item, setItem] = React.useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    const { isAdded, isFavorite, addToFavorite, addToDrawer } = React.useContext(ContextData)

    React.useEffect(() => {
        async function getItem() {
            try {
                const { data } = await axios.get(`https://62c57e71134fa108c25402bf.mockapi.io/items/${id}`)
                setItem(data)
            } catch (error) {
                alert("Не удалось загрузить страницу товара")
                navigate(`/oblivion-store/`)
            }
        }
        getItem()
    }, [])

    if (!item.id) {
        return <h1>Загрузка...</h1>
    }

    return (
        <div className={styles.itempage_wrapper}>
            <img src={item.itemImageLarge} alt="" />
            <h2>{item.title}</h2>
            <div className={styles.buttons_wrapper}>
                <h3>{item.price} руб.</h3>
                <span onClick={() => { addToDrawer(item) }}>{isAdded(item.id) ?
                    "В корзине" :
                    "Купить"}
                    <img
                        src={isAdded(item.id) ?
                            "img/icons/add-checked.svg" :
                            "img/icons/add-unchecked.svg"}
                        alt="добавить" />
                </span>
                <span onClick={() => { addToFavorite(item) }}>{isFavorite(item.id) ?
                    "В избранном" :
                    "Сохранить"}
                    <img
                        src={isFavorite(item.id) ?
                            "img/icons/heart-checked.svg" :
                            "img/icons/heart-unchecked.svg"}
                        alt="избранное" />
                </span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eius incidunt repellat et repudiandae facilis aperiam rem
                dolorum nulla voluptates, consequatur reiciendis reprehenderit
                cum quo exercitationem doloribus laboriosam ut? Soluta neque suscipit
                blanditiis et quasi facere, fugit corrupti molestiae laborum temporibus
                porro excepturi mollitia minima aut ad nostrum ex reiciendis debitis!</p>

        </div>
    )
}

export default ItemPage
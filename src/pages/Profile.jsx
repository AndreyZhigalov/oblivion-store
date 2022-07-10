import React from "react";
import { Link } from "react-router-dom";

export function Profile({ toggleSearch, userData }) {

    toggleSearch("none")

    let user = userData[0]

    return (
        <div className="catalog">
            <h1 style={{ margin: '0' }}>
                <Link to='/' onClick={() => { toggleSearch("flex") }}> <img src="img/icons/close-drawer.svg" alt="close" /></Link>Профиль
            </h1>

            <div className="container">
                <div className="profileDataBox"
                    style={{ width: "380px", height: "300px" }} >
                    <h3>Контакты</h3>
                    <p>{(user?.name ?? "") + " " + (user?.lastName ?? "")}</p>
                    <p>{user?.address}</p>
                    <p>{user?.phone}</p>
                    <p>{user?.email}</p>
                </div>
                <div className="profileDataBox"
                    style={{ width: "560px", height: "300px" }}>
                    <h3>Доставка</h3>
                    {user?.deliveryList.map((order, i) => <p key={i}>{"#" + order.id + " " + order.location}</p>)}
                </div>
                <div className="profileDataBox"
                    style={{ width: "310px", height: "200px" }}>
                    <h3>Сбербанк</h3>
                    <span>{user?.paycard[0]}</span>
                    <p>{(user?.paycard[2] ?? "") + " " + (user?.paycard[1] ?? "")}</p>
                </div>
                <div className="profileDataBox" style={{ width: "300px", height: "200" }}>
                    <div
                        style={{ width: "300px", height: "92px" }}>
                        <h3>Баланс</h3>
                        <span>{`${user?.deposite ?? ""} руб.`}</span>
                    </div>
                    <div
                        style={{ width: "300px", height: "92px" }}>
                        <h3>Скидка</h3>
                        <span>{`${user?.discount ?? ""}%`}</span>
                    </div>
                </div>
                <div className="profileDataBox"
                    style={{ width: "310px", height: "200px" }}>
                    <h3>SeptimPay</h3>
                    <span>{user?.septimPayCard[0]}</span>
                    <p>{(user?.septimPayCard[2] ?? "") + " " + (user?.septimPayCard[1] ?? "")}</p>
                </div>
                <div className="profileDataBox"
                    style={{ width: "970px", height: "200px" }}>
                    <h3>Последние заказы</h3>

                </div>
            </div>
        </div>
    )
}
import React, { useState } from "react";
import "../css/account.scss";

function Account() {
  const [activeLi, setActiveLi] = useState("Личная информация");

  const handleLiClick = (li: string) => {
    setActiveLi(li);
  };

  return (
    <div>
      <div className="account-main">
        <h2>Аккаунт</h2>

        <div className="account-container ">
          <div className="account-wrapper-left">
            <div className="account-info-container">
              <div className="account-avatar">Б</div>
              <h3 className="account-name">Бегалиев Алмаз</h3>
              <span className="account-email">begaliev007@gmail.com</span>
              <div className="account-pod">Подрядчик</div>
            </div>

            <ul className="account-navigation">
              <li
                className={
                  activeLi === "Личная информация"
                    ? "account-navigation__item-active"
                    : "account-navigation__item"
                }
                onClick={() => handleLiClick("Личная информация")}
              >
                Личная информация
              </li>
              <li
                className={
                  activeLi === "Мои тендера"
                    ? "account-navigation__item-active"
                    : "account-navigation__item"
                }
                onClick={() => handleLiClick("Мои тендера")}
              >
                Мои тендера
              </li>
              <li
                className={
                  activeLi === "Платежи"
                    ? "account-navigation__item-active"
                    : "account-navigation__item"
                }
                onClick={() => handleLiClick("Платежи")}
              >
                Платежи
              </li>
            </ul>
          </div>
          <div className="account-wrapper-right">
            {activeLi == "Личная информация" ? (
              <>
                <header className="account-header">
                  <div className="account-title-special">Личная информация</div>
                  <div className="account-buttons">
                    <button className="account-btn1">Изменить пароль</button>
                    <button className="account-btn2">Редактировать</button>
                  </div>
                </header>
                <p className="account-paragraph">
                  Убедитесь, что ваша контактная информация , включая номер
                  телефона и email адрес являются верными
                </p>
                <div className="account-box-container">
                  <div className="account-box">
                    <span>Имя</span>
                    <h3>Бегалиев Алмаз</h3>
                  </div>
                  <div className="account-box">
                    <span>Дата рождения</span>
                    <h3>16.09.1999</h3>
                  </div>
                  <div className="account-box">
                    <span>Email</span>
                    <h3>ex@email.com</h3>
                  </div>
                  <div className="account-box-special">
                    <span>ИНН(ID)</span>
                    <h3>1123456789098765432</h3>
                  </div>
                  <div className="account-box-special">
                    <span>Номер телефона</span>
                    <h3>0709 00 00 00</h3>
                  </div>
                </div>
              </>
            ) : activeLi == "Мои тендера" ? (
              <div className="account-tender-container">
                <h3>Мои тендера</h3>
                <p>
                  Вся информация об объявленных тендерах, включая участников и
                  подробности, можете просмотреть здесь
                </p>

                <div className="account-tender-box">
                  <div className="tender-box-info">
                    <header className="tender-box-info-header">
                      <span className="start-tedner-box">
                        Начало :21.10.2023
                      </span>
                      <span className="start-tedner-end">
                        Завершение: 21.10.2023
                      </span>
                    </header>

                    <div className="tender-box-info-column">
                      <div className="column-tender-info">
                        <span>Статус заявки:</span>
                        <button>Отказан</button>
                      </div>
                      <div className="column-tender-info">
                        <span>Компания :</span>
                        <h3>Кыргызтелеком</h3>
                      </div>
                      <div className="column-tender-info">
                        <span>Наименование закупки:</span>
                        <h3>
                          Оро айыл аймагы 1-Май айылына ичүүчү таза суу чыгаруу
                          үчүн скважиналык бургулоо иштерин жүргүзүү
                        </h3>
                      </div>
                      <div className="column-tender-info">
                        <span>Сумма:</span>
                        <h3>200 000 сом</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="account-tender-box">
                  <div className="tender-box-info">
                    <header className="tender-box-info-header">
                      <span className="start-tedner-box">
                        Начало :21.10.2023
                      </span>
                      <span className="start-tedner-end">
                        Завершение: 21.10.2023
                      </span>
                    </header>

                    <div className="tender-box-info-column">
                      <div className="column-tender-info">
                        <span>Статус заявки:</span>
                        <button>Отказан</button>
                      </div>
                      <div className="column-tender-info">
                        <span>Компания :</span>
                        <h3>Кыргызтелеком</h3>
                      </div>
                      <div className="column-tender-info">
                        <span>Наименование закупки:</span>
                        <h3>
                          Оро айыл аймагы 1-Май айылына ичүүчү таза суу чыгаруу
                          үчүн скважиналык бургулоо иштерин жүргүзүү
                        </h3>
                      </div>
                      <div className="column-tender-info">
                        <span>Сумма:</span>
                        <h3>200 000 сом</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;

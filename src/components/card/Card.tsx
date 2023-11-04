import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
function Card() {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card_p}>
          <p>Начало: 21.10.2023</p>
          <p>Завершение: 21.10.2023</p>
        </div>
        <div className={styles.card_info}>
          <p>Компания :</p>
          <h4>Кыргызтелеком</h4>
          <p>Наименование закупки:</p>{" "}
          <h4>
            Оро айыл аймагы 1-Май айылына ичүүчү таза суу чыгаруу үчүн
            скважиналык бургулоо иштерин жүргүзүү
          </h4>
          <p>Сумма:</p> <h4>200 000 сом</h4>
        </div>
        <div className={styles.card_btn}>
          <Link style={{ textDecoration: "none" }} to="/details">
            <button>Подробнее...</button>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
}

export default Card;

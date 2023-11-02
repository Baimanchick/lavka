import React from "react";
import styles from "./Footer.module.css";
import tenders from "../../images/icons/BasicLogo.svg";
function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <img src={tenders} alt="" />
        <p>
          © 2023 Министерство финансов
          <br />
          Кыргызской Республики
        </p>
      </div>
      <div className={styles.footer_info_block}>
        <div>
          <h3>Общее</h3>
          <p>Главная</p>
          <p>Новости</p>
          <p>Обьявления</p>
          <p>Тендер</p> <p>Вопросы</p>
        </div>
        <div>
          <h3>Планы</h3>
          <p>Бюджетное учреждение</p>
          <p>Небюджетные учреждения</p>
          <p>Планы государственных закупок</p>
        </div>
        <div>
          <h3>Объявления</h3>
          <p>Всего объявлений</p>
          <p>Отменённые объявления</p>
        </div>
        <div>
          <h3>Контракты</h3>
          <p>Все договоры</p>
          <p>Договоры по Централизованным закупкам</p>
          <p>Договоры из одного источника</p>
        </div>{" "}
      </div>
    </div>
  );
}

export default Footer;

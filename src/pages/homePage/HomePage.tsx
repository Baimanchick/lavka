import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import arnament from "../../images/arnament.svg";
import bish1 from "../../images/bish1.svg";
import bish2 from "../../images/bish2.svg";
import bish3 from "../../images/bish3.svg";
import bish4 from "../../images/bish4.svg";
import bish5 from "../../images/bish5.svg";
import bish6 from "../../images/bish6.svg";
import bish7 from "../../images/bish7.svg";
import bish8 from "../../images/bish8.svg";
import bish9 from "../../images/bish9.svg";
function HomePage() {
  return (
    <div>
      <header className={styles.header}>
        <img className={styles.header_img} src={arnament} alt="" />
        <div className={styles.header_text}>
          <h1>
            Официальный Портал <br />
            Государственных Закупок
          </h1>
          <p>Кыргызской Республики</p>
        </div>

        <div className={styles.header_images}>
          <div className={styles.header_images_container}>
            <img src={bish1} alt="" /> <img src={bish2} alt="" />{" "}
            <img src={bish2} alt="" /> <img src={bish1} alt="" />{" "}
            <img src={bish2} alt="" /> <img src={bish2} alt="" />
          </div>
          <div className={styles.header_images_container}>
            <img src={bish1} alt="" /> <img src={bish1} alt="" />{" "}
            <img src={bish1} alt="" /> <img src={bish1} alt="" />{" "}
            <img src={bish1} alt="" /> <img src={bish1} alt="" />
          </div>
          <div className={styles.header_images_container}>
            <img src={bish2} alt="" /> <img src={bish2} alt="" />{" "}
            <img src={bish4} alt="" /> <img src={bish1} alt="" />{" "}
            <img src={bish1} alt="" /> <img src={bish1} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;

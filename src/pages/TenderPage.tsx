import React, { useState } from "react";
import Card from "../components/card/Card";
import styles from "./homePage/HomePage.module.css";
import Search from "../components/search/Search";
function TenderPage() {
  const [activeButton, setActiveButton] = useState("Новые");
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <div
      style={{
        padding: "12vh",
      }}
    >
      <Search />
      <div className={styles.ads_block_btns}>
        <button
          className={activeButton === "Новые" ? styles.active : ""}
          onClick={() => handleButtonClick("Новые")}
        >
          Новые
        </button>
        <button
          className={activeButton === "Крупные" ? styles.active : ""}
          onClick={() => handleButtonClick("Крупные")}
        >
          Крупные
        </button>
        <button
          className={activeButton === "Завершенные" ? styles.active : ""}
          onClick={() => handleButtonClick("Завершенные")}
        >
          Завершенные
        </button>
        <button
          className={activeButton === "Закуп" ? styles.active : ""}
          onClick={() => handleButtonClick("Закуп")}
        >
          Закуп
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default TenderPage;

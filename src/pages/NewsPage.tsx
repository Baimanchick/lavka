import React, { useState } from "react";
import styles from "../pages/homePage/HomePage.module.css";
function NewsPage() {
  const newsInfo = [
    {
      image:
        "https://www.altai-tour.ru/upload/medialibrary/cee/cee6eddff6acc26c188c36e0acd0a043.jpg",
      p: "21-09-2023",
      h3: "Которнууга билдирмелер менен негиздөөчү документтерди Банкка жөнөтүү схемасы",
    },
    {
      image:
        "https://pibig.info/uploads/posts/2021-05/1621922241_4-pibig_info-p-gornii-kirgizstan-priroda-krasivo-foto-4.jpg",
      p: "21-09-2023",
      h3: "Которнууга билдирмелер менен негиздөөчү документтерди Банкка жөнөтүү схемасы",
    },
    {
      image:
        "https://fotorelax.ru/wp-content/uploads/2020/06/bishkek-s-vysoty-stolica-u-podnozhja-gor-7868614.jpg",
      p: "21-09-2023",
      h3: "Которнууга билдирмелер менен негиздөөчү документтерди Банкка жөнөтүү схемасы",
    },
    {
      image:
        "https://sportishka.com/uploads/posts/2022-04/1650537730_13-sportishka-com-p-kirgizstan-bishkek-dostoprimechatelnosti-k-15.jpg",
      p: "21-09-2023",
      h3: "Которнууга билдирмелер менен негиздөөчү документтерди Банкка жөнөтүү схемасы",
    },
    {
      image:
        "https://sportishka.com/uploads/posts/2022-03/1646410305_11-sportishka-com-p-bishkek-issik-kul-turizm-krasivo-foto-11.jpg",
      p: "21-09-2023",
      h3: "Которнууга билдирмелер менен негиздөөчү документтерди Банкка жөнөтүү схемасы",
    },
    {
      image:
        "http://postila.ru/data/7d/ff/bd/e9/7dffbde9427fdaf5e35454a47223711c051a47dd3de2b6aac7b14a06f9de3247.jpg",
      p: "21-09-2023",
      h3: "Которнууга билдирмелер менен негиздөөчү документтерди Банкка жөнөтүү схемасы",
    },
    {
      image: "https://klike.net/uploads/posts/2019-11/1574605225_22.jpg",
      p: "21-09-2023",
      h3: "Которнууга билдирмелер менен негиздөөчү документтерди Банкка жөнөтүү схемасы",
    },
    {
      image:
        "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666381278_24-mykaleidoscope-ru-p-krasivoe-leto-oboi-26.jpg",
      p: "21-09-2023",
      h3: "Которнууга билдирмелер менен негиздөөчү документтерди Банкка жөнөтүү схемасы",
    },
    {
      image:
        "https://idei.club/uploads/posts/2022-08/1661179582_1-idei-club-p-panelnii-dom-oboi-1.jpg",
      p: "21-09-2023",
      h3: "Которнууга билдирмелер менен негиздөөчү документтерди Банкка жөнөтүү схемасы",
    },
  ];
  const [activeButton, setActiveButton] = useState("Все");
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <div style={{ padding: "12vh" }}>
      <div style={{ marginLeft: "2vh" }} className={styles.ads_block_btns}>
        <button
          className={activeButton === "Все" ? styles.active : ""}
          onClick={() => handleButtonClick("Все")}
        >
          Все
        </button>
        <button
          className={activeButton === "Новости" ? styles.active : ""}
          onClick={() => handleButtonClick("Новости")}
        >
          Новости
        </button>
        <button
          className={activeButton === "Публикации" ? styles.active : ""}
          onClick={() => handleButtonClick("Публикации")}
        >
          Публикации
        </button>
        <button
          className={activeButton === "Циркулярные письма" ? styles.active : ""}
          onClick={() => handleButtonClick("Циркулярные письма")}
        >
          Циркулярные письма
        </button>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap" }}
        className={styles.news_card}
      >
        {newsInfo.map((news) => (
          <div
            style={{
              width: "400px",
              height: "345px",
              boxShadow: " 0px 1px 2px 0px #00003226",
              borderRadius: "1.5vh",
              margin: "2vh",
            }}
          >
            <img
              style={{
                width: "400px",
                height: "200px",
                borderTopLeftRadius: "1.5vh",
                borderTopRightRadius: "1.5vh",
              }}
              src={news.image}
              alt=""
            />
            <div
              style={{
                padding: "0 2vh",
              }}
            >
              <p>{news.p}</p>
              <h3 style={{ fontSize: "20px" }}>{news.h3}</h3>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    padding: "0.8vh 1.5vh",
                    borderRadius: "1vh",
                    border: "none",
                    color: "white",
                    fontWeight: "500",
                    backgroundColor: "var(--blue-color)",
                  }}
                >
                  Подробнее
                </button>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPage;

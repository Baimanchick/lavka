import React, { useState } from "react";
import "../css/news.scss";

function NewsPage() {
  const [activeButton, setActiveButton] = useState("Новости");

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div className="main-container-news">
      <h2>Новости, Публикации и Циркулярные письма от УГО</h2>

      <div className="news-buttons-container">
        <button
          className={
            activeButton === "Все" ? "news-buttons-active" : "news-buttons"
          }
          onClick={() => handleButtonClick("Все")}
        >
          Все
        </button>
        <button
          className={
            activeButton === "Новости" ? "news-buttons-active" : "news-buttons"
          }
          onClick={() => handleButtonClick("Новости")}
        >
          Новости
        </button>
        <button
          className={
            activeButton === "Публикации"
              ? "news-buttons-active"
              : "news-buttons"
          }
          onClick={() => handleButtonClick("Публикации")}
        >
          Публикации
        </button>
        <button
          className={
            activeButton === "Циркулярные письма"
              ? "news-buttons-active"
              : "news-buttons"
          }
          onClick={() => handleButtonClick("Циркулярные письма")}
        >
          Циркулярные письма
        </button>
      </div>

      <div className="news-card-container">
        {activeButton === "Новости" ? (
          <div className="news-card">
            <div className="news-card-img">
              <img src="https://www.nbkr.kg/images/1.jpg" />
            </div>
            <div className="news-card-title">
              <span className="news-date">21-09-2023</span>
              <p className="news-paragraph">
                Которнууга билдирмелер менен негиздөөчү документтерди Банкка
                жөнөтүү схемасы
              </p>
              <div className="news-card-button">
                <button>Подробнее</button>
              </div>
            </div>
          </div>
        ) : null}
        {activeButton === "Все" ? (
          <div className="check">
            <div className="news-card">
              <div className="news-card-img">
                <img src="https://www.nbkr.kg/images/1.jpg" />
              </div>
              <div className="news-card-title">
                <span className="news-date">21-09-2023</span>
                <p className="news-paragraph">
                  Которнууга билдирмелер менен негиздөөчү документтерди Банкка
                  жөнөтүү схемасы
                </p>
                <div className="news-card-button">
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="news-card">
              <div className="news-card-img">
                <img src="https://64.media.tumblr.com/3ae820cb801518619572dde396f472de/96236c43b82d737e-2f/s1280x1920/467b03774b4d377907b43512116abcf7213490b9.jpg" />
              </div>
              <div className="news-card-title">
                <span className="news-date">21-09-2023</span>
                <p className="news-paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni asperiores, perspiciatis placeat saepe architecto facere
                  laboriosam nihil doloremque dicta similique?
                </p>
                <div className="news-card-button">
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
            <div className="news-card">
              <div className="news-card-img">
                <img src="https://64.media.tumblr.com/9df234ca1aadc8e35955a9cdb573d7ab/56854785f7847945-d1/s1280x1920/0832401a989b9edf91b9640f448fe82112b0c978.jpg" />
              </div>
              <div className="news-card-title">
                <span className="news-date">21-09-2023</span>
                <p className="news-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  inventore harum suscipit consectetur adipisci culpa dolorem
                  cupiditate, voluptatibus placeat vero?
                </p>
                <div className="news-card-button">
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {activeButton === "Публикации" ? (
          <div className="news-card">
            <div className="news-card-img">
              <img src="https://64.media.tumblr.com/3ae820cb801518619572dde396f472de/96236c43b82d737e-2f/s1280x1920/467b03774b4d377907b43512116abcf7213490b9.jpg" />
            </div>
            <div className="news-card-title">
              <span className="news-date">21-09-2023</span>
              <p className="news-paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
                asperiores, perspiciatis placeat saepe architecto facere
                laboriosam nihil doloremque dicta similique?
              </p>
              <div className="news-card-button">
                <button>Подробнее</button>
              </div>
            </div>
          </div>
        ) : null}
        {activeButton === "Циркулярные письма" ? (
          <div className="news-card">
            <div className="news-card-img">
              <img src="https://64.media.tumblr.com/9df234ca1aadc8e35955a9cdb573d7ab/56854785f7847945-d1/s1280x1920/0832401a989b9edf91b9640f448fe82112b0c978.jpg" />
            </div>
            <div className="news-card-title">
              <span className="news-date">21-09-2023</span>
              <p className="news-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                inventore harum suscipit consectetur adipisci culpa dolorem
                cupiditate, voluptatibus placeat vero?
              </p>
              <div className="news-card-button">
                <button>Подробнее</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NewsPage;

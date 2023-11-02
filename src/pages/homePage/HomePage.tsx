import React, { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import arnament from "../../images/arnament.svg";
import bish1 from "../../images/imgBish/bish1.svg";
import bish2 from "../../images/imgBish/bish2.svg";
import additional_img1 from "../../images/imgBish/additional_info1.svg";
import additional_img2 from "../../images/imgBish/additional_info2.svg";
import additional_img3 from "../../images/imgBish/additional_info3.svg";
import additional_img4 from "../../images/imgBish/additional_info4.svg";
import additional_img5 from "../../images/imgBish/additional_info5.svg";
import additional_img6 from "../../images/imgBish/additional_info6.svg";
import newsImg from "../../images/imgBish/news.svg";
import newsImg2 from "../../images/imgBish/news2.svg";
import publications from "../../images/imgBish/Public.svg";
import messageImg from "../../images/imgBish/message.svg";
import arrow from "../../images/icons/arrow.svg";
import message from "../../images/icons/message.svg";
import cash from "../../images/icons/cash.svg";
import letter from "../../images/icons/letter.svg";
function HomePage() {
  const [activeButton, setActiveButton] = useState("Новые");
  const questions = [
    "Какие документы и информацию необходимо предоставить для участия в тендере?",
    "Какие требования к квалификации участников тендера?",
    "Какие сроки выполнения проекта или поставки товаров?",
    "Какие формы оплаты предусмотрены в рамках тендера?",
    "Каков процесс заключения контракта с победителем тендера?",
  ];
  const [openText, setOpenText] = useState(
    new Array(questions.length).fill(false)
  );
  const toggleQuestions = (index: number) => {
    const updatedStates = [...openText];
    updatedStates[index] = !updatedStates[index];
    setOpenText(updatedStates);
  };

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };
  // const toggleText = () => {
  //   setToggleButton(!toggleButton);
  // };
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
            <img src={bish2} alt="" /> <img src={bish1} alt="" />{" "}
            <img src={bish1} alt="" /> <img src={bish1} alt="" />
          </div>
        </div>
      </header>

      <section className={styles.news_section}>
        <h2>Новости, Публикации и Циркулярные письма от УГО</h2>

        <div style={{ display: "flex" }}>
          <div>
            <img style={{ margin: "2vh 2vh 0" }} src={newsImg} alt="" />
          </div>
          <div>
            <img
              style={{ margin: "2vh 2vh 2vh 3vh" }}
              src={publications}
              alt=""
            />
            <img
              style={{ margin: "2vh 2vh 2vh 0.5vh" }}
              src={messageImg}
              alt=""
            />
            <img style={{ margin: "0 2vh 0 3vh" }} src={newsImg2} alt="" />
          </div>
        </div>
        <h2>Почему выгодно участвовать в тендерах?</h2>
        <div className={styles.news_info_block}>
          <div className={styles.news_info}>
            <img src={message} alt="" />
            <div>
              <h4>Низкая конкуренция</h4>
              <p>
                Во многих отраслях за контракт борются 1-2 участника — значит,
                ваши шансы на победу высоки
              </p>
            </div>
          </div>
          <div className={styles.news_info}>
            <img src={cash} alt="" />
            <div>
              <h4>Стабильный заработок</h4>
              <p>
                Рынок госзаказа мало зависит от экономической ситуации в стране
                — вы сможете зарабатывать стабильно
              </p>
            </div>
          </div>
          <div className={styles.news_info}>
            <img src={letter} alt="" />
            <div>
              <h4>Работа в рамках закона</h4>
              <p>
                Рынок госзаказа мало зависит от экономической ситуации в стране
                — вы сможете зарабатывать стабильно
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ads}>
        <div className={styles.ads_block}>
          <div className={styles.ads_block_title}>
            <h2>Новые объявления</h2>
            <button>Подробнее</button>
          </div>
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.ads_card}>
              <div className={styles.ads_card_p}>
                <p>Начало: 21.10.2023</p>
                <p>Завершение: 21.10.2023</p>
              </div>
              <div className={styles.ads_card_info}>
                <p>Компания :</p>
                <h4>Кыргызтелеком</h4>
                <p>Наименование закупки:</p>{" "}
                <h4>
                  Оро айыл аймагы 1-Май айылына ичүүчү таза суу чыгаруу үчүн
                  скважиналык бургулоо иштерин жүргүзүү
                </h4>
                <p>Сумма:</p> <h4>200 000 сом</h4>
              </div>
              <button>Подробнее...</button>
            </div>{" "}
            <div className={styles.ads_card}>
              <div className={styles.ads_card_p}>
                <p>Начало: 21.10.2023</p>
                <p>Завершение: 21.10.2023</p>
              </div>
              <div className={styles.ads_card_info}>
                <p>Компания :</p>
                <h4>Кыргызтелеком</h4>
                <p>Наименование закупки:</p>{" "}
                <h4>
                  Оро айыл аймагы 1-Май айылына ичүүчү таза суу чыгаруу үчүн
                  скважиналык бургулоо иштерин жүргүзүү
                </h4>
                <p>Сумма:</p> <h4>200 000 сом</h4>
              </div>
              <button>Подробнее...</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.additional_info}>
        <h2>Дополнительная информация</h2>
        <div>
          <img src={additional_img1} alt="" />

          <img src={additional_img2} alt="" />

          <img src={additional_img3} alt="" />

          <img src={additional_img4} alt="" />
          <img src={additional_img5} alt="" />
          <img src={additional_img6} alt="" />
        </div>
      </section>
      <section className={styles.questions}>
        <h2>Часто задаваемые вопросы</h2>
        <div>
          {questions.map((question, index) => (
            <div key={question}>
              <button
                className={styles.question_btns}
                onClick={() => toggleQuestions(index)}
              >
                {question}

                {openText[index] ? (
                  <img src={arrow} alt="" />
                ) : (
                  <img className={styles.down_arrow} src={arrow} alt="" />
                )}
              </button>
              {openText[index] && (
                <p className={styles.paragraph}>
                  Для участия в тендере обычно требуется предоставить следующие
                  документы и информацию:
                  <br /> <br />
                  1. Заявка на участие в тендере, оформленная в соответствии с
                  требованиями организатора тендера. <br /> <br />
                  2. Квалификационные документы, подтверждающие соответствие
                  вашей компании требованиям тендера, такие как сертификаты,
                  лицензии, рекомендации и прочие документы. <br /> <br />
                  3. Предложение или коммерческое предложение, в котором
                  указываются условия поставки товаров или выполнения работ,
                  цены, сроки и другие важные параметры. <br /> <br />
                  4. Финансовые документы, такие как отчеты о прибылях и
                  убытках, балансы и другие финансовые показатели компании, если
                  это требуется организатором. <br /> <br /> 5. Банковские
                  гарантии или подтверждение финансовой стабильности, если это
                  является частью требований тендера. <br /> <br />
                  6. Резюме и квалификация ключевых сотрудников, которые будут
                  участвовать в проекте. <br /> <br />
                  7. Иные документы, указанные в тендерной документации. Важно
                  внимательно изучить требования и документацию, предоставленную
                  организатором тендера, и удостовериться, что все необходимые
                  документы и информация предоставлены в срок.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;

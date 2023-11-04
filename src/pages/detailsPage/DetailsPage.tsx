import React, { useState } from "react";
import styles from "./Details.module.css";

function DetailsPage() {
  const [activeButton, setActiveButton] = useState("Для резидентов КР");
  const [activeButton2, setActiveButton2] = useState("Не предусмотрено");
  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    setActiveButton2(button);
  };
  type TableRow = {
    label: string; // Статичное наименование
    value: string; // Информация, которая будет меняться
  };

  // Пример данных для таблицы
  const tableData: TableRow[] = [
    { label: "Номер", value: "123456789101234" },
    { label: "Закупающая организация", value: "ОАО “Кыргызтелеком”" },
    { label: "Метод закупок", value: "Кабель для протяжки интернет сетей " },
    { label: "Дата публикации", value: "21.10 2023 " },
    { label: "Срок подачи", value: "31.10 2023 " },
    {
      label: "Гарантийное обеспечение предложения поставщика",
      value:
        "Размер гарантийного обеспечения предложения поставщик (ГОПП): Деклорация.Срок действия ГОПП : 40 дней",
    },
    {
      label: "Официальное информационное письмо по банковскому реквизиту",
      value:
        "Приклепление документа ! Должен быть файл  в формате pdf или Docx",
    },
    {
      label: "Наименование закупки",
      value: "Кабель для сетей интернет в количестве 500 км",
    },
    { label: "Формат закупок", value: "Стандартный" },
    { label: "Планируемая сумма", value: "500 000" },
    { label: "Валюта поставщика", value: "Кыргызский сом" },
    {
      label: "Срок действия предложений поставщиков",
      value: "30",
    },
  ];

  const tableDataLots: TableRow[] = [
    { label: "№", value: "L 0001-01" },
    {
      label: "Наименование лота",
      value: "ОАО Преобретение проводов для протяжки сетей интернета",
    },
    { label: "Сумма", value: "500 000" },
    {
      label: "Адрес и место поставки",
      value: "г. Бишкек  ул. Абдрахманова д 145",
    },
    {
      label: "Условия поставки",
      value: "DCH г. Бишкек ул. Абдрахманова д. 145",
    },
    {
      label: "Сроки поставки товара",
      value:
        "После заключения договора по заявке в течении 2-х дней после поступления заявки",
    },
  ];
  const tableDataCriteria: TableRow[] = [
    { label: "Гарантийное обеспечение", value: "0.0%" },
    {
      label: "Упаковка",
      value: "ГОСТ упаковка без внешних и внутренних повреждений  ",
    },
    { label: "Страхование товара", value: "Не предусмотрено" },
    { label: "Сопутствующие услуги", value: "Не предусмотрено" },
    { label: "Банковское сопровождение", value: "Предусмотрено" },
    {
      label: "Технический контроль и испытания",
      value:
        "Процедуры технического контроля и испытаний, а также любые испытания до отгрузки товаров и при окончательной приемке Место предполагаемого тех. контроля и испытаний. Органолептический и визуальный осмотр, при необходимости Заказчик может отправить продукт на экспертизу в лабораторию",
    },
    {
      label: "Гарантия",
      value:
        "Гарантийный период: Согласно Санитарно-эпидемиологических норм и правил КРОбеспечить исправление дефектов по гарантии: В течении 1 рабочего дня Гарантийный период: Согласно Санитарно-эпидемиологических норм и правил КРОбеспечить исправление дефектов по гарантии: В течении 1 рабочего дня Ставка за каждый просроченный день  0.1% за каждый день Максимально вычитаемая сумма 0.1% от цены контракта",
    },
    {
      label:
        "Документы, которые должны быть предоставлены поставщиком при поставке товара",
      value:
        "Счет-фактура (инвойс) поставщика с описанием товаров, указанием количества, цены единицы товара и общей суммы Декларация на товар",
    },
    {
      label: "Урегулирование споров",
      value:
        "Споры, возникающие из настоящего контракта или в связи с ним, подлежат разрешению в Суд общей юрисдикции Кыргызской Республики",
    },
    { label: "Протокол", value: "" },
    { label: "Проект контракта", value: "" },
  ];

  const tableDataPayment: TableRow[] = [
    { label: "Авансовый платеж", value: "Не предусмотрено" },
    { label: "После отгрузки", value: "Не предусмотрено" },
    { label: "После приемки", value: "100.0%  " },
    { label: "Срок оплаты", value: "31.10.2023" },
  ];
  const tableDataFines: TableRow[] = [
    {
      label: "Ставка за каждый просроченный день",
      value: "0.01% за каждый день",
    },
    { label: "Максимально вычитаемая сумма", value: "0.1% от цены контракта" },
  ];
  return (
    <div style={{ padding: "5vh 12vh" }}>
      <header className={styles.details_header}>
        <div className={styles.details_title}>
          <img
            src="https://static.cnews.ru/img/book/2023/07/20/kyrgyztelekom.jpg"
            alt=""
          />
          <h2>Кыргызтелеком</h2>
        </div>
        <div className={styles.details_card}>
          <p>Информация об организации</p>
          <p>
            Название организации: <span>Кырызтелеком </span>
          </p>
          <p>
            Рабочий телефон: <span>+996 555 236 263 </span>
          </p>
          <p>
            Фактический адрес: <span>г. Бишкек ул. Абдрахманова д 145 </span>
          </p>
        </div>
      </header>

      <section className={styles.table}>
        <table>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <th>{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className={styles.lots}>
        <button
          className={activeButton === "Для резидентов КР" ? styles.active : ""}
          onClick={() => handleButtonClick("Для резидентов КР")}
        >
          Для резидентов КР
        </button>
        <button
          className={
            activeButton === "Для не резидентов КР" ? styles.active : ""
          }
          onClick={() => handleButtonClick("Для не резидентов КР")}
        >
          Для не резидентов КР
        </button>

        <table>
          <tbody>
            {tableDataLots.map((row, index) => (
              <tr key={index}>
                <th>{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <h2>Квалификационные требования</h2>
      <section className={styles.requirements}>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
            repudiandae, aut tempora eligendi, in impedit ipsa et placeat
            veritatis omnis magnam veniam obcaecati labore at quod ratione iste
            enim tempore?Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quisquam aut voluptatem facilis deleniti provident sapiente
            repudiandae eum accusantium alias sed facere numquam nostrum
            perferendis, amet sequi.
            <br /> <br />
            Quae et doloribus nobis. Magnam tenetur rem corporis minus sequi
            accusamus quidem quis nostrum recusandae dolore iste, repudiandae, a
            fugiat animi velit totam beatae et minima sed esse dicta vel!
            Accusamus voluptas ea facere. Perspiciatis ab quibusdam dolorum
            dolores ad molestiae eveniet vero deleniti ex. Impedit esse neque
            facilis dolor. Unde qui error dignissimos sequi consequuntur.
            Aspernatur magnam repudiandae quam similique iure eum. Et! Velit
            voluptatum expedita ab, dolorem et reiciendis officiis qui, nemo
            atque quae recusandae nisi temporibus accusamus magni molestiae
            <br /> <br />
            laborum fugiat. Facilis veritatis modi hic nihil voluptate. Libero
            culpa perferendis iusto. Dolore aut nobis ullam provident similique
            magni? Laudantium culpa in facere explicabo, a eligendi inventore
            eius quas dolorem harum dignissimos vitae? Eligendi fugiat maiores
            quidem beatae deserunt nam esse commodi? Ipsam, voluptates fugiat!
            Placeat nihil aliquam magnam odio saepe, provident sequi beatae
            consequuntur sunt repudiandae molestias minus eveniet impedit sint
            nemo animi. Porro placeat est dignissimos? At omnis aperiam tenetur.
            Laborum alias quos laudantium at nesciunt dolores, animi nostrum,
            fuga, vero similique in adipisci veritatis cumque modi reiciendis
            ipsa? Cumque voluptatem labore quidem! Doloremque repellendus neque
            assumenda. <br /> <br />
            Voluptas, aspernatur a. Fugiat eligendi distinctio nobis sequi quis
            laudantium, sunt quia doloremque exercitationem eius maxime labore
            corporis perferendis impedit quibusdam officiis, asperiores animi,
            consequuntur doloribus error. Illum perspiciatis veritatis impedit
            voluptatem repellendus! Iure odio quo aperiam sint dicta ipsum,
            dolores temporibus quos quis facere recusandae eaque, reprehenderit
            expedita, doloremque id consequuntur sit? Dolorem optio tempora a
            consequatur in delectus enim, fugit et. Similique magni accusamus
            error commodi voluptatum tempore amet reiciendis vero rem, quod
            nulla adipisci minus porro voluptatem laudantium eaque a ducimus,
            consequuntur quae. Similique ad voluptas suscipit recusandae
            corporis veniam. Recusandae blanditiis obcaecati quis accusantium
            repellendus perferendis tempora deleniti dicta est cumque tempore
            commodi accusamus dolorem totam eligendi quaerat, asperiores, quidem
            harum fugiat quibusdam facilis. Exercitationem ea blanditiis in.
            Nihil. Totam animi at inventore expedita hic praesentium quaerat, a
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            molestias, ratione vitae quasi esse nulla culpa beatae impedit
            aliquam corrupti! Deleniti ipsa exercitationem atque alias dolorum,
            obcaecati culpa possimus id! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Recusandae, dolor. Reprehenderit natus voluptate
            et veniam quisquam ab, voluptates molestias eaque eius. Ratione
            expedita, deserunt beatae quod consequuntur minus soluta fugiat?
            Harum tempora quia ad sit repudiandae itaque placeat sequi, esse
            provident magni accusamus deserunt eligendi voluptatum totam minima,
            nostrum, nobis perspiciatis beatae. Veritatis debitis voluptatem
            ullam voluptas, odio earum illum! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Distinctio vel amet in? Nihil,
            mollitia beatae eveniet odio aut laudantium recusandae dolore, quasi
            expedita corrupti esse quos sed quam laboriosam quas! Cumque placeat
            voluptatum, vitae deleniti sapiente nobis exercitationem sint.
            Deleniti molestiae optio odit laboriosam ratione id molestias fugiat
            ullam quas dolore et, voluptatum commodi consequatur expedita
            facere, tenetur corporis velit? Harum consequatur illum hic mollitia
            quas cumque ducimus tenetur eum, suscipit sapiente laudantium
            possimus velit. Praesentium voluptatum distinctio id explicabo quasi
            illo aliquam ratione excepturi. Totam eum quod commodi doloribus.
            Aliquam, cumque cum quasi provident ipsum debitis temporibus non
            aperiam? Quibusdam asperiores accusamus beatae quod obcaecati minima
            facilis laboriosam magni rerum molestias, vitae esse autem cum odit
            eveniet perferendis. Rerum. Hic incidunt soluta quisquam recusandae
            iure minus, dolore fugiat velit nisi ullam, expedita quidem
            voluptate deleniti in! Earum voluptas dolorem, veritatis molestias,
            animi perferendis quaerat voluptatem autem vel voluptatibus
            blanditiis?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente facilis omnis, nisi officia ipsa magnam saepe assumenda
            aliquid ab repellendus laboriosam animi quo molestiae delectus
            dolores amet officiis inventore excepturi. Doloribus tenetur laborum
            ratione fuga iusto maiores optio, repudiandae itaque laboriosam
            harum nihil adipisci expedita numquam porro possimus, perspiciatis
            vel aliquid accusantium natus voluptatem fugiat. Doloremque fugiat
            perspiciatis aspernatur necessitatibus! Quasi, architecto? Quos
            mollitia maxime quod reiciendis amet, nesciunt quis facere
            repellendus expedita, enim ipsa ut! Inventore autem exercitationem
            iusto voluptas! Officiis beatae facilis dolore natus aliquid, odit
            quis asperiores!
          </p>
        </div>
      </section>
      <section className={styles.lots}>
        <h2>Специальные требования</h2>
        <button
          className={
            activeButton2 === "Предзакупочное совещание" ? styles.active : ""
          }
          onClick={() => handleButtonClick("Предзакупочное совещание")}
        >
          Предзакупочное совещание
        </button>
        <button
          className={activeButton2 === "Не предусмотрено" ? styles.active : ""}
          onClick={() => handleButtonClick("Не предусмотрено")}
        >
          Не предусмотрено
        </button>
      </section>
      <section>
        <h2>Критерии оценки предложений</h2>
        <table>
          <tbody>
            {tableDataCriteria.map((row, index) => (
              <tr key={index}>
                <th>{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2>Платёж </h2>
      </section>
      <section>
        <h2>Неустойки</h2>
      </section>
    </div>
  );
}

export default DetailsPage;

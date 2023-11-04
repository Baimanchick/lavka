import React, { useState } from "react";
import background from "../images/Frame 1000001371.png";
import "../css/registerzak.scss";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../css/images/logo.svg";

function RegisterZak() {
  const [activeButton, setActiveButton] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div className="regZak-container">
        <div className="regZak-wrapper-left">
          <img className="regZak-background-image" src={background} />
        </div>

        <div className="regZak-wrapper-right">
          {/*  */}

          <header className="regZak-header">
            <div className="regZak-logo-container">
              <img src={logo} className="regZak-logo" />
            </div>
            <AiOutlineClose
              onClick={() => navigate("/")}
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
          </header>

          <div className="regZak-conatiner-title">
            <h3>Регистрация</h3>
            <p>Заполните все поля</p>
          </div>

          <form className="from-container-regZak">
            <div className="email-regZak">
              <span className="email-regZak-span">Имя</span>
              <input
                className={
                  errorInput ? "regZak-input-email-error" : "regZak-input-email"
                }
                type="text"
              />
              {errorInput ? (
                <span className="email-regZak-span-error">
                  Не допустимые символы!
                </span>
              ) : null}
            </div>
            <div className="email-regZak">
              <span className="email-regZak-span">Email</span>
              <input
                className={
                  errorInput ? "regZak-input-email-error" : "regZak-input-email"
                }
                type="text"
              />
              {errorInput ? (
                <span className="email-regZak-span-error">
                  Не найдена учетная запись!
                </span>
              ) : null}
            </div>
            <div className="input-conatiner-regZak">
              <span>Номер телефона</span>
              <input className="input-regZak" type="number" />
            </div>
            <div className="input-conatiner-regZak">
              <span>ИНН</span>
              <input className="input-regZak" type="number" />
            </div>
            <div className="checkBox-conatiner-regZak">
              <input className="checkBox-regZak" type="checkbox" />
              <p>
                Я прочитал и согласен с <strong>Правилами и условиями</strong>,
                а также с <br /> <strong>Политикой конфиденциальности</strong>.
              </p>
            </div>
          </form>

          <div className="regZak-regZak-container">
            <button onClick={() => navigate("/pass")}>Далее</button>
            <div className="regZak-regZak-title">
              <span>
                У вас уже есть аккаунт?{" "}
                <strong onClick={() => navigate("/login")}>Войти</strong>
              </span>
            </div>
          </div>

          <div className="regZak-help">
            <span>
              Подробную инструкцию о регистрации можно получить <br /> в разделе{" "}
              <strong className="strong-regZak">Помощь</strong>
            </span>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default RegisterZak;

import React, { useState } from "react";
import background from "../images/Frame 1000001371.png";
import "../css/registerpod.scss";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../css/images/logo.svg";

function RegisterPod() {
  const [activeButton, setActiveButton] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div className="regPod-container">
        <div className="regPod-wrapper-left">
          <img className="regPod-background-image" src={background} />
        </div>

        <div className="regPod-wrapper-right">
          {/*  */}

          <header className="regPod-header">
            <div className="regPod-logo-container">
              <img src={logo} className="regPod-logo" />
            </div>
            <AiOutlineClose
              onClick={() => navigate("/")}
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
          </header>

          <div className="regPod-conatiner-title">
            <h3>Регистрация</h3>
            <p>Заполните все поля</p>
          </div>

          <form className="from-container-regPod">
            <div className="input-conatiner-regPod">
              <span>Компания</span>
              <input className="input-regPod" type="text" />
            </div>

            <div className="email-regPod">
              <span className="email-regPod-span">Email</span>
              <input
                className={
                  errorInput ? "regPod-input-email-error" : "regPod-input-email"
                }
                type="text"
              />
              {errorInput ? (
                <span className="email-regPod-span-error">
                  Не найдена учетная запись!
                </span>
              ) : null}
            </div>
            <div className="input-conatiner-regPod">
              <span>Номер телефона</span>
              <input className="input-regPod" type="number" />
            </div>
            <div className="input-conatiner-regPod">
              <span>PIN</span>
              <input className="input-regPod" type="number" />
            </div>
            <div className="checkBox-conatiner-regPod">
              <input className="checkBox-regPod" type="checkbox" />
              <p>
                Я прочитал и согласен с <strong>Правилами и условиями</strong>,
                а также с <br /> <strong>Политикой конфиденциальности</strong>.
              </p>
            </div>
          </form>

          <div className="regPod-regPod-container">
            <button onClick={() => navigate("/pass")}>Далее</button>
            <div className="regPod-regPod-title">
              <span>
                У вас уже есть аккаунт?{" "}
                <strong onClick={() => navigate("/login")}>Войти</strong>
              </span>
            </div>
          </div>

          <div className="regPod-help">
            <span>
              Подробную инструкцию о регистрации можно получить <br /> в разделе{" "}
              <strong className="strong-regPod">Помощь</strong>
            </span>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default RegisterPod;

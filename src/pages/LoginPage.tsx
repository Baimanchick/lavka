import React, { useState } from "react";
import background from "../images/Frame 1000001371.png";
import "../css/login.scss";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../css/images/logo.svg";

function LoginPage() {
  const [activeButton, setActiveButton] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-wrapper-left">
          <img className="login-background-image" src={background} />
        </div>

        <div className="login-wrapper-right">
          {/*  */}

          <header className="login-header">
            <IoIosArrowBack
              onClick={() => navigate(-1)}
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
            <AiOutlineClose
              onClick={() => navigate("/")}
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
          </header>
          <div className="login-logo-container">
            <img src={logo} className="login-logo" />
          </div>

          <div className="login-conatiner-title">
            <h3>Вход</h3>
            <p>Введите свои данные для входа в систему</p>
            <div className="login-buttons">
              <button
                className={
                  activeButton === "Заказчик"
                    ? "login-buttons-1-active"
                    : "login-buttons-1"
                }
                onClick={() => handleButtonClick("Заказчик")}
              >
                Заказчик
              </button>
              <button
                className={
                  activeButton === "Подрядчик"
                    ? "login-buttons-2-active"
                    : "login-buttons-2"
                }
                onClick={() => handleButtonClick("Подрядчик")}
              >
                Подрядчик
              </button>
            </div>
          </div>

          <form className="from-container-login">
            <div className="email-login">
              <span className="email-login-span">Email</span>
              <input
                className={
                  errorInput ? "login-input-email-error" : "login-input-email"
                }
                type="text"
              />
              {errorInput ? (
                <span className="email-login-span-error">
                  Не найдена учетная запись!
                </span>
              ) : null}
            </div>

            <div className="password-login">
              <span>Пароль</span>
              <div className="input-container">
                <input type="password" />
                <AiFillEyeInvisible
                  style={{ fontSize: "22px" }}
                  className="eye-icon"
                />
              </div>
              <div className="forgotten-password">
                <span onClick={() => navigate("/forgotten")}>
                  Забыли пароль?
                </span>
              </div>
            </div>
          </form>

          <div className="login-login-container">
            <button>Войти</button>
            <div className="login-login-title">
              <span>
                У вас не аккаунта?{" "}
                <strong onClick={() => navigate("/register")}>
                  Зарегистрироваться
                </strong>
              </span>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

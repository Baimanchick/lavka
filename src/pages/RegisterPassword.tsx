import React, { useState } from "react";
import background from "../images/Frame 1000001371.png";
import "../css/registerpassword.scss";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../css/images/logo.svg";

function RegisterPassword() {
  const [activeButton, setActiveButton] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div>
      <div className="regPass-container">
        <div className="regPass-wrapper-left">
          <img className="regPass-background-image" src={background} />
        </div>

        <div className="regPass-wrapper-right">
          {/*  */}

          <header className="regPass-header">
            <div className="regPass-logo-container">
              <img src={logo} className="regPass-logo" />
            </div>
            <AiOutlineClose
              onClick={() => navigate("/")}
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
          </header>

          <div className="regPass-conatiner-title">
            <h3>Регистрация</h3>
            <p>Придумайте пароль</p>
          </div>

          <form className="from-container-regPass">
            <div className="password-regPass">
              <span>Пароль</span>
              <div className="input-container">
                <input type="password" />
                <AiFillEyeInvisible
                  style={{ fontSize: "22px" }}
                  className="eye-icon"
                />
              </div>
            </div>

            <div className="password-regPass">
              <span>Повторите Пароль</span>
              <div className="input-container">
                <input type="password" />
                <AiFillEyeInvisible
                  style={{ fontSize: "22px" }}
                  className="eye-icon"
                />
              </div>
            </div>
          </form>

          <div className="regPass-regPass-container">
            <button onClick={() => navigate("/code")}>Отправить код</button>
            <div className="regPass-regPass-title">
              <span>
                У вас уже есть аккаунт?{" "}
                <strong onClick={() => navigate("/login")}>Войти</strong>
              </span>
            </div>
          </div>

          <div className="regPass-help">
            <span>
              Подробную инструкцию о регистрации можно получить <br /> в разделе{" "}
              <strong className="strong-regPass">Помощь</strong>
            </span>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default RegisterPassword;

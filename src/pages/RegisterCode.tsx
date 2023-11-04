import React, { useState } from "react";
import background from "../images/Frame 1000001371.png";
import "../css/registercode.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../css/images/logo.svg";

function RegisterCode() {
  const [activeButton, setActiveButton] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, "").slice(0, 1);

    event.target.value = inputValue;
  };

  return (
    <div>
      <div className="regCode-container">
        <div className="regCode-wrapper-left">
          <img className="regCode-background-image" src={background} />
        </div>

        <div className="regCode-wrapper-right">
          <header className="regCode-header">
            <div className="regCode-logo-container">
              <img src={logo} className="regCode-logo" />
            </div>
            <AiOutlineClose
              onClick={() => navigate("/")}
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
          </header>

          <div className="regCode-conatiner-title">
            <h3>Регистрация</h3>
            <p>
              Введите 4-значный код отправленный на ваш{" "}
              <strong style={{ fontWeight: "bolder" }}>email</strong>{" "}
            </p>
          </div>

          <div className="regCode-box-container">
            <div className="regCode-box">
              <input
                type="text"
                className="regCode-box-input"
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="regCode-box-input"
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="regCode-box-input"
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="regCode-box-input"
                onChange={handleInputChange}
              />
            </div>
            <div className="regCode-regCode-title">
              <span>
                Не получили код? <strong>Отправить снова</strong>
              </span>
            </div>
          </div>

          <div className="regCode-regCode-container">
            <button>Далее</button>
          </div>

          <div className="regCode-help">
            <span>
              Подробную инструкцию о регистрации можно получить <br /> в разделе{" "}
              <strong className="strong-regCode">Помощь</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterCode;

import React, { useState } from "react";
import background from "../images/Frame 1000001371.png";
import "../css/login.scss";
import "../css/forgotten.scss";

import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../css/images/logo.svg";

function ForgottenPassword() {
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
              style={{ fontSize: "25px" }}
            />
            <AiOutlineClose
              onClick={() => navigate("/")}
              style={{ fontSize: "25px" }}
            />
          </header>
          <div className="login-logo-container">
            <img src={logo} className="login-logo" />
          </div>

          <div className="login-conatiner-titlee">
            <h3>Забыли пароль?</h3>
            <p>
              Ссылка на сброс пароля придет к вам на <br /> почту
            </p>
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
          </form>

          <div className="login-login-container">
            <button>Отправить код</button>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default ForgottenPassword;

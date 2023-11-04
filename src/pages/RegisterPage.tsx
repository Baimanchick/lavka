import React, { useState } from "react";
import background from "../images/Frame 1000001371.png";
import "../css/register.scss";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../css/images/logo.svg";

function RegisterPage() {
  const [activeDiv, setActiveDiv] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const navigate = useNavigate();

  const handleDivClick = (div: string) => {
    setActiveDiv(div);
  };

  return (
    <div>
      <div className="reg-container">
        <div className="reg-wrapper-left">
          <img className="reg-background-image" src={background} />
        </div>

        <div className="reg-wrapper-right">
          {/*  */}

          <header className="reg-header">
            <div className="reg-logo-container">
              <img src={logo} className="reg-logo" />
            </div>
            <AiOutlineClose
              onClick={() => navigate("/")}
              style={{ fontSize: "25px", cursor: "pointer" }}
            />
          </header>

          <div className="reg-conatiner-title">
            <h3>Регистрация</h3>
            <p>Выберите роль</p>
          </div>

          <div className="reg-box-container">
            <div
              className={
                activeDiv === "Закупающаяся организация"
                  ? "reg-box-1-active"
                  : "reg-box-1"
              }
              onClick={() => handleDivClick("Закупающаяся организация")}
            >
              <h3 className="reg-box-h3">Закупающаяся организация</h3>
              <p className="reg-box-p">
                Человек или организация, которые платят за выполнение
                определенной работы или предоставление услуги другим лицам или
                компаниям. Они определяют требования и ожидания исходя из своих
                потребностей
              </p>
            </div>
            <div
              className={
                activeDiv === "Поставщик (Подрядчик)"
                  ? "reg-box-2-active"
                  : "reg-box-2"
              }
              onClick={() => handleDivClick("Поставщик (Подрядчик)")}
            >
              <h3 className="reg-box-h3">Поставщик (Подрядчик)</h3>
              <p className="reg-box-p">
                Лицо или компания, которая берется выполнить определенную работу
                или предоставить услугу заказчику в соответствии с условиями
                договора за определенную сумму денег
              </p>
            </div>
          </div>

          <div className="reg-reg-container">
            <button
              onClick={() => {
                if (activeDiv == "") {
                  alert("Выберите роль");
                } else if (activeDiv === "Закупающаяся организация") {
                  navigate("/zak");
                } else {
                  navigate("/pod");
                }
              }}
            >
              Далее
            </button>

            <div className="reg-reg-title">
              <span>
                У вас уже есть аккаунт?{" "}
                <strong onClick={() => navigate("/login")}>Войти</strong>
              </span>
            </div>
          </div>

          <div className="reg-help">
            <span>
              Подробную инструкцию о регистрации можно получить <br /> в разделе{" "}
              <strong className="strong-reg">Помощь</strong>
            </span>
          </div>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

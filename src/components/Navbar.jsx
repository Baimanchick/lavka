import React, { Component } from "react";
import "../css/navbar.scss";
import logo from "../css/images/logo.svg";
import { BsSearch } from "react-icons/bs";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Общие данные", // Изначально активный пункт "Общие данные"
    };
  }

  setActiveItem = (item) => {
    this.setState({ activeItem: item });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <header className="navbar-header">
          <div className="navbar-container">
            {/*  */}
            <div className="navbar-logo-container">
              <img className="navbar-logo" src={logo} alt="Logo" />
            </div>

            <div className="navbar-navigation-container">
              <ul className="navigation-container">
                <li
                  className={`navigation__item ${
                    activeItem === "Общие данные" ? "active" : ""
                  }`}
                  onClick={() => this.setActiveItem("Общие данные")}
                >
                  Общие данные
                </li>
                <li
                  className={`navigation__item ${
                    activeItem === "Заявки" ? "active" : ""
                  }`}
                  onClick={() => this.setActiveItem("Заявки")}
                >
                  Заявки
                </li>
                <li
                  className={`navigation__item ${
                    activeItem === "Обьявление" ? "active" : ""
                  }`}
                  onClick={() => this.setActiveItem("Обьявление")}
                >
                  Обьявление
                </li>
                <li
                  className={`navigation__item ${
                    activeItem === "Закуп" ? "active" : ""
                  }`}
                  onClick={() => this.setActiveItem("Закуп")}
                >
                  Закуп
                </li>
                <li
                  className={`navigation__item ${
                    activeItem === "Тендер" ? "active" : ""
                  }`}
                  onClick={() => this.setActiveItem("Тендер")}
                >
                  Тендер
                </li>
              </ul>
            </div>

            <div className="navbar-icon-container">
              <BsSearch className="search-icon" />

              <button className="navbar-login">Войти</button>
              <button className="navbar-register">Регистрация</button>
            </div>

            {/*  */}
          </div>
        </header>
      </>
    );
  }
}

export default Navbar;

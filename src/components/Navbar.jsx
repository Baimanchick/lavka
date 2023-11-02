import React, { useState, useEffect } from "react";
import "../css/navbar.scss";
import logo from "../css/images/logo.svg";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const navigate = useNavigate();
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  return (
    <>
      <header className="navbar-header">
        <div className="navbar-container">
          <div className="navbar-logo-container">
            <img
              className="navbar-logo"
              src={logo}
              alt="Логотип"
              onClick={() => navigate("/")}
            />
          </div>

          <div className="navbar-navigation-container">
            <ul className="navigation-container">
              <li
                className={`navigation__item ${
                  activeItem === "/" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveItem("/");
                  navigate("/");
                }}
              >
                Главная
              </li>
              <li
                className={`navigation__item ${
                  activeItem === "/news" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveItem("/news");
                  navigate("/news");
                }}
              >
                Новости
              </li>
              <li
                className={`navigation__item ${
                  activeItem === "/announcement" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveItem("/announcement");
                  navigate("/announcement");
                }}
              >
                Обьявления
              </li>
              <li
                className={`navigation__item ${
                  activeItem === "/tender" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveItem("/tender");
                  navigate("/tender");
                }}
              >
                Тендер
              </li>
              <li
                className={`navigation__item ${
                  activeItem === "/questions" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveItem("/questions");
                  navigate("/questions");
                }}
              >
                Вопросы
              </li>
            </ul>
          </div>

          <div className="navbar-icon-container">
            {searchActive ? (
              <div class="group-input-search">
                <div className="group-input-search-container">
                  <svg
                    class="icon-search"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    onClick={handleSearchClick}
                  >
                    <g>
                      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                  </svg>
                  <input
                    placeholder="Найти"
                    type="search"
                    class="input-search"
                  />
                </div>
              </div>
            ) : (
              <BsSearch className="search-icon" onClick={handleSearchClick} />
            )}
            <button className="navbar-login">Войти</button>
            <button className="navbar-register">Регистрация</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

import React, { useContext,  useState } from "react";
import {useNavigate,useLocation  } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { IoHeartCircle } from "react-icons/io5";
import { MainContext } from "../../context";
import { BsEnvelopeCheckFill } from "react-icons/bs";
import img from "../../assets/JobSearch.png";
import classNames from "classnames";
import style from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { IoCloseOutline } from "react-icons/io5";


function Header() {
  const { handleMenu,windowWidth,setWindowWidth,theme,selectedVacancies, setPathName, setVacancyFilter,switchTheme } = useContext(MainContext);
  window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
  const navigate = useNavigate();
  const location = useLocation();
  const selectedVacanciesLength = selectedVacancies.length
  
  

  function navigatePath (path) {
    if (path == "/") {
      setVacancyFilter(null);
    }
    location.pathname != path && navigate(path);

  }
  function navigateStatistics() {
    setPathName("");
    navigate("/");
  }

  return (
    <header className={classNames(style.header, style[theme])}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <a onClick={() => navigateStatistics("/")}>
        <div className={style.img}>
          <img src={img} alt="" />
        </div>
        </a>
        <a className={style.close} href="#" onClick={() => handleMenu()} ><IoCloseOutline /></a>
      </div>
 
      


      {windowWidth >= 1100 && <Navbar />}

      <span className={style.header__title}>Sizin JobSearch</span>
      <ul className={style.header_menu}>
        <li className={style.header__menu__item}>
          <a onClick={() => navigatePath("/secilmish_elanlar")} >
            <IoHeartCircle className={style.icon} />
            Seçilmiş elanlar <span className={style.header__menu__item__count}>{selectedVacanciesLength}</span>
          </a>
        </li>
        <li className={style.header__menu__item}>
          <a onClick={() => navigatePath("/elanlar")}>
            <BsEnvelopeCheckFill className={style.icon} />
            Abunə - kateqoriyalar
          </a>
        </li>
      </ul>
      <ul className={style.choose__mode}>
        <li>
          <a
            id="white"
            href="#"
            onClick={() => switchTheme('light')}
            className={classNames(style.theme, {
              [style.active]: theme === 'light',
            })}
          >
            <FiSun className={style.sun} />{" "}
          </a>
        </li>
        <li>
          <a
            id="dark"
            href="#"
            onClick={() => switchTheme('dark')}
            className={classNames({ [style.active]: theme === 'dark' })}
          >
            <FaRegMoon className={style.moon} />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

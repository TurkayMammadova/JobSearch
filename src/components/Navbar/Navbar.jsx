import React,{useContext, useState} from 'react'
import style from "./Navbar.module.css";
import { FaSuitcase } from "react-icons/fa";
import { TbTriangleSquareCircleFilled } from "react-icons/tb";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MainContext } from "../../context";
import { useNavigate,useLocation } from 'react-router-dom';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const { setVacancyFilter} = useContext(MainContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {setPathName} = useContext(MainContext);

  function navigatePath (path) {
    if (path == "/" ) {
      setVacancyFilter(null);
    }
    
    { windowWidth >= 1100 ?
      location.pathname != path && navigate(path) :
      navigate(path)
    }

  }



  return (
    <> 
    <ul id={style.header_menu__main} className={`${style.header_menu} header_menu-nav`}>
    <li className={style.header__menu__item}>
      <a onClick={() => navigatePath("/")}>
        <FaSuitcase className={style.icon} />
        Elanlar
      </a>
    </li>
    <li className={style.header__menu__item}>
      <a onClick={() => navigatePath("/kateqoriyalar")}>
        <TbTriangleSquareCircleFilled className={style.icon} />
        Kateqoriyalar
      </a>
    </li>
    <li className={style.header__menu__item}>
      <a onClick={() => navigatePath("/sirketler")}>
        <HiBuildingOffice2 className={style.icon} />
        Şirkətlər
      </a>
    </li>
  </ul></>
  )
}

export default Navbar
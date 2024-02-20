import React from 'react'
import style from './Footer.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/JImanov.png'
import { BsFillTrophyFill } from "react-icons/bs";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  function navigatePath (path) {
    location.pathname != path && navigate(path);
  }

  return (
    <>
    <div>
<footer className={style.footer}>
  <ul className={style.footer_menu}>
    <li className={style.footer__menu__item}><a onClick={() => navigatePath("/haqqimizda")}>Haqqımızda</a></li>
    <li className={style.footer__menu__item}><a onClick={() => navigatePath("/xidmetler")}>Xidmətlər</a></li>
    <li className={style.footer__menu__item}><a onClick={() => navigatePath("/elaqe")}>Əlaqə</a></li>
  </ul>
  <span className={style.footer__copyright}>© JobSearch.az 2006—2024</span>
  <span className={style.site_by}>Site  by
  <div className={style.img}><BsFillTrophyFill className={style.footer_img} /></div>
  <a href="https://jis.az/" target="_blank">Turkay Mammadova</a>
          
  </span>
</footer>

    </div>
    
    </>
  )
}

export default Footer
import React, { useContext, useEffect, useState } from "react";
import style from "./Menu.module.css";
// import classNames from 'classnames';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { MainContext } from "../../context";
import Navbar from "../Navbar/Navbar";

function Menu() {
  

  return (
    <>
      <input type="checkbox" id="toggle_menu" className={style.toggle} />
      <div className="menu">
        <Header />
        <Footer />
      </div>
        

    </>
  );
}

export default Menu;

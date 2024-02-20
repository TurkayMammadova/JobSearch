import React, { useContext, useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import style from "./AppLayout.module.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Statistic from "../Statistic/Statistic";
import Detail from "../Vacancies_detail/Vacancies_detail";
import CompanyDetail from "../Company_detail/Company_detail";
import { MainContext } from "../../context";
import img from "../../assets/JobSearch.png";
import Navbar from "../Navbar/Navbar";

function AppLayout() {
  const { pathName, setPathName, handleMenu,menu,windowWidth,setWindowWidth } = useContext(MainContext);
  const navigate = useNavigate();

  const [locationState, setLocationState] = useState();

  const location = useLocation();
  const locationSearch = location.search;
  const searchParams = new URLSearchParams(locationSearch);
  const detail = searchParams.get("detail");
  const vacancy = searchParams.get("vacancy");
  const detailTitle = detail && detail.split(":")[0];
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
  useEffect(() => {
    if (locationSearch && locationSearch != pathName) {
      setPathName(locationSearch);
      console.log(`testttttttt ${locationSearch}`);
    }
    // locationSearch && locationSearch != pathName && setPathName(locationSearch);
  }, [locationSearch]);
  useEffect(() => {
    if (windowWidth >= 1100) {
      pathName && navigate(pathName);
    }
  }, [location.pathname, pathName && navigate]);

  
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
    // if (windowWidth >= 1100) {
    //   setMenu(true);
    // }
  });



  return (
    <div className={style.appLayout}>
      {menu && <Menu />}
      {windowWidth < 1100 && <Navbar/>}
      {menu && windowWidth < 1100 && (
        <div onClick={() => handleMenu()} className={style.menu_blur}></div>
      )}
      

      <div id={style.contentBody} className={style.content_body}>
        <div id={style.scroller_row} className={style.row}>
          {windowWidth < 1100 && (
            <div className={style.mobile_header}>
              <a href="#" className={style.img}>
                <img src={img} alt="" aria-current="page" />
              </a>

              <label
                onClick={() => handleMenu()}
                htmlFor="toggle-menu"
                aria-label="burger"
                className={style.mobile_header__burger}
              ></label>
            </div>
          )}
          { windowWidth < 1100  ?
            !detailTitle && <Outlet />: 
            <Outlet />
          }
          {detailTitle == "vacancy" ? (
            <Detail />
          ) : detailTitle == "company" ? (
            <CompanyDetail />
          ) : (
            windowWidth >= 1100 &&
            <Statistic />
          )}
        </div>
      </div>
      {/* <Outlet /> */}
      {/* <Statistic/> */}
      {/* <Detail /> */}
      {/* <CompanyDetail /> */}
      {/* {
        detailTitle == "vacancy" ?
        <Detail /> :
        detailTitle == "company" ? 
        <CompanyDetail /> :
        <Statistic/>
      } */}
    </div>
  );
}

export default AppLayout;

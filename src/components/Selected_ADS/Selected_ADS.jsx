import React from 'react';
import style from './Selected_ADS.module.css';
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MainContext, useContext } from "../../context";
import classNames from "classnames";
import { VscEye } from "react-icons/vsc";

function Selected_ADS() {
  const {selectedVacancies} = useContext(MainContext);
  const { setIsLikes } = useContext(MainContext);
  

  const div4 = classNames(
    style.list,
    style.list__categories,
    style.position_relative
  );

 

  if (selectedVacancies.length>0) {
    return (
      <div className="list_block">
        <div>
          {selectedVacancies.map((data) => (
            <div className='list__item' key={data.id}>


            <Link
              to={`?detail=vacancy:${data.slug}`}
              onClick={() => setCount(data.slug,location)}
              className='list__item__logo'
              aria-current="page"
            >
              <img src={data.company_id.image} alt="" />
            </Link>
            <div className="list__item__body">
              <Link
                to={`?detail=vacancy:${data.slug}`}
                onClick={() => setCount(data.slug,location)}
                className="list__item__text"
                aria-current="page"
              >
                <h3 className="list__item__title">{data.name}</h3>
                {data.company_id.name}
              </Link>
              <div className="list__item__end">
                <ul>
                  <li>
                    <span>
                      <VscEye />
                      {data.views_count}
                    </span>
                  </li>
                  <li>
                    <span>{data.created_at}</span>
                  </li>
                </ul>
                <a href="#">
                  <FaHeart
                    onClick={() => setIsLikes(data.slug)}
                    style={{
                      color: data.to_choose === true ? " #ff8686" : "inherit",
                    }}    
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  } else {
    return (
      <div className={style.list_block}>
        <div className={style.favorites}>
          <h2 className={style.section_title}>Seçdiyim iş elanları</h2>
        </div>
        <div className={style.not_found}>
          <div className={style.not_found__body}>
            <div className={style.not_found__icon}>
              <FaHeart className={style.heart} />
            </div>
            <h1>Sizin seçilmiş elanınız yoxdur</h1>
            <Link to={"/"} className={style.btn}>
              Vakansiyaya keçid
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Selected_ADS;
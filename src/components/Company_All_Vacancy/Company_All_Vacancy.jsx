import {React} from "react";
import { Link } from "react-router-dom";
import style from "./Company_All_Vacancy.module.css";
import { VscEye } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { MainContext, useContext } from "../../context";



function Company_All_Vacancy({slug}) {
  const { allData} = useContext(MainContext);
  const {setIsLikes} = useContext(MainContext);
  const companyAllVacancy = allData.filter((data) => {
    return data.company_id.slug === slug;
});


  return (
    <div  className="list_block">
    <div >
      {companyAllVacancy.map((data) => (
        <div className={style.list__item} key={data.id}>
          <Link
            to={`?detail=vacancy:${data.slug}`}
            onClick={() => setCount(data.slug)}
            className={style.list__item__logo}
            aria-current="page"
          >
            <img src={data.company_id.image} alt="" />
          </Link>
          <div className="list__item__body">
            <Link
              to={`?detail=vacancy:${data.slug}`} onClick={() => setCount(data.slug)}
              className="list__item__text"
              aria-current="page"
            >
              <h3  className="list__item__title">{data.name}</h3>
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
  )
}


export default Company_All_Vacancy;

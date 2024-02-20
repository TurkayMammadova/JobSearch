import React, {useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./ContentBody.module.css";
import { VscEye } from "react-icons/vsc";
import { FaHeart } from "react-icons/fa";
import { MainContext } from "../../context";

function ContentBody() {
  const { allData, setIsLikes, setCount, vacancyFilter } = useContext(MainContext);
  const location = useLocation();
  const categoryId = vacancyFilter;
  const renderVacancyList = (vacancies) => (
    <div id={style.list_block} className="list_block">
      <div>
        {vacancies.map((data) => (
          <div className='list__item' key={data.id}>
            <Link
              to={`?detail=vacancy:${data.slug}`}
              onClick={() => setCount(data.slug, location)}
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

  const categoryAllVacancy = categoryId
    ? allData.filter((data) =>
        data.category_id.some((category) => category.id === categoryId)
      )
    : allData;

  return renderVacancyList(categoryAllVacancy);
}

export default ContentBody;

import React from "react";
import style from "./Category.module.css";
import { MainContext, useContext } from "../../context";
import { useLocation, useNavigate } from "react-router-dom";

function Category() {
  const { allData, setVacancyFilter } = useContext(MainContext);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParamKeys = Array.from(queryParams.keys());
  console.log(queryParamKeys);

  if (!allData) {
    return <div>Loading...</div>;
  }

  
  const uniqueCategories = new Map();

  allData.forEach((data) => {
    data.category_id.forEach((category) => {
      const categoryId = category.id;

    
      if (!uniqueCategories.has(categoryId)) {
        uniqueCategories.set(categoryId, {
          name: category.name,
          image: category.image,
          jobCount: 1, 
          id:category.id,
          slug:category.slug,
          companyCount: new Set([data.company_id.id]), 
        });
      } else {
        uniqueCategories.get(categoryId).jobCount += 1;
        uniqueCategories.get(categoryId).companyCount.add(data.company_id.id);
      }
    });
  });



  function handleCategory(categoryID) {
    setVacancyFilter(categoryID);
    navigate("/")
  }

  return (
    <div id={style.list_block} className="list_block">
      <div>
        {[...uniqueCategories.values()].map((category) => (
          <div className='list__item' key={category.id}>
            <a onClick={() => handleCategory(category.id)} className={style.list__item__logo} aria-current="page">
              
              
              <span>
                <img src={category.image} alt={category.name} />
              </span>
            </a>
            <div className="list__item__body">
            <a onClick={() => handleCategory(category.id) } className="list__item__text" aria-current="page">
                <h3 className="list__item__title">{category.name}</h3>
                {category.jobCount} iş elanı
              </a>
              <div className="list__item__end">
                {category.companyCount.size} şirkət
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;

import {React} from "react";
import style from "./Companies.module.css";
import { MainContext, useContext } from "../../context";
import { Link } from "react-router-dom";


function Companies() {
  const { allData } = useContext(MainContext);



  return (
    <div  className="list_block">
      <div>
        {allData.reduce((acc, data) => {
          const companyId = data.company_id.id;
          const companySlug = data.company_id.slug;
          const existingCompany = acc.find((company) => company.id === companyId);

          if (existingCompany) {
            existingCompany.totalVacancies += 1;
            if (!existingCompany.categories.includes(data.category_id[0].name)) {
              existingCompany.categories.push(data.category_id[0].name);
            }
          } else {
            acc.push({
              id: companyId,
              name: data.company_id.name,
              image: data.company_id.image,
              slug: companySlug,
              totalVacancies: 1,
              categories: [data.category_id[0].name], 
            });
          }

          return acc;
        }, []).map((company) => (
          <div className='list__item' key={company.id}>
            <Link
              to={`?detail=company:${company.slug}`}
              className='list__item__logo'
              aria-current="page"
            >
              <img src={company.image} alt="" />
            </Link>
            <div className="list__item__body">
              <Link
                to={`?detail=company:${company.slug}`}
                className="list__item__text"
                aria-current="page"
              >
                <h3 className="list__item__title">{company.name}</h3>
                <p>{company.categories.join(', ')}</p>
              </Link>
              <div className="list__item__end">{company.totalVacancies} iş elanı</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
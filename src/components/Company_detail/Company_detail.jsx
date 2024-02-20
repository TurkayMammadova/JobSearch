import { React, useContext, useState } from "react";
import style from "./Company_detail.module.css";
import {useLocation, useNavigate } from "react-router-dom";
import { MainContext } from "../../context";
import Company_All_Vacancy from "../Company_All_Vacancy/Company_All_Vacancy";
import Company_info from "../Company_info/Company_info";

function Company_detail() {
  const { allData, setVacancyFilter } = useContext(MainContext);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const detail = searchParams.get("detail");
  const slug = detail && detail.split(":")[1];


  function navigatePath (path) {
    if (path == "/") {
      setVacancyFilter(null);
    }
    location.pathname != path && navigate(path);

  }
  
  const [activeTab, setActiveTab] = useState("companyInfo");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const company = allData.filter((data) => data.company_id.slug === slug);

  function handleCategory(categoryID) {
    setVacancyFilter(categoryID);
    navigate("/")
  }
  return (
    <>
      <div className="list_block">
        <div className={style.company}>
          <div className={style.company__body}>
            {company
              .reduce((acc, data) => {
                const companyId = data.company_id.id;
                const companySlug = data.company_id.slug;

                const existingCompany = acc.find(
                  (company) => company.id === companyId
                );
                console.log("existing", existingCompany);
                if (existingCompany) {
                  if (
                    
                    !existingCompany.categories.includes(
                      data.category_id[0].name
                    )
                  ) {
                    console.log(data.category_id);
                    existingCompany.categories.push(data.category_id[0].name);
                  }
                  if (
                    !existingCompany.catId.includes(
                      data.category_id[0].id
                    )
                  ){
                    existingCompany.catId.push(data.category_id[0].id);
                  }
                } else {
                  acc.push({
                    id: companyId,
                    name: data.company_id.name,
                    image: data.company_id.image,
                    slug: companySlug,
                    categories: [data.category_id[0].name],
                    catId: [data.category_id[0].id],
                  });
                }
                return acc;
              }, [])
              .map((company) => (
                <div className={style.company__body__head} key={company.id}>
                  <div className={style.company__logo}>
                    <img src={company.image} alt="" />
                  </div>
                  <div className={style.company__body__text}>
                    <h1 className={style.company__title}>{company.name}</h1>
                    <div className={style.company__industry}>
                      {company.categories.map((cat, ind) => (
                        <a key={ind}  onClick={() => handleCategory(company.catId[ind]) } >
                          {`${cat} ${company.categories.length-1 != ind ? "," : ""}`}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            <div className={style.tab}>
              <div className={style.tab__links}>
                <div
                  className={`${style.tab__link} ${
                    activeTab === "companyInfo" ? style.active : ""
                  }`}
                  onClick={() => handleTabClick("companyInfo")}
                >
                  Şirkət haqqında
                </div>
                <div
                  className={`${style.tab__link} ${
                    activeTab === "companyAllVacancy" ? style.active : ""
                  }`}
                  onClick={() => handleTabClick("companyAllVacancy")}
                >
                  Son iş elanları
                </div>
              </div>
            </div>
            {activeTab === "companyInfo" && <Company_info slug={slug} />}
            {activeTab === "companyAllVacancy" && (
              <Company_All_Vacancy slug={slug} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Company_detail;

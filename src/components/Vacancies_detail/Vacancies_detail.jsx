import React, { useContext,useState } from 'react';
import style from './Vacancies_detail.module.css';
import { VscEye } from "react-icons/vsc";
import { MdOutlineAccessTime } from "react-icons/md";
import { MainContext } from '../../context';
import { FaHeart } from "react-icons/fa";
import {useNavigate,useLocation} from "react-router-dom";
import Job_description from '../Job_description/Job_description';
import About_company from '../About_company/About_company';
import { BsChevronLeft } from "react-icons/bs";




function Vacancies_detail() {
  const { allData,setIsLikes,setVacancyFilter ,getVacancyDetailBySlug} = useContext(MainContext);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const detail = searchParams.get("detail");
  const slug = detail && detail.split(":")[1];
  const tab = detail && detail.split(":")[2];
  
  const vacancyDetails = getVacancyDetailBySlug(allData,slug);
  const companyName = vacancyDetails?.company_id?.name || '';
  const companyImage = vacancyDetails?.company_id?.image || '';
  const categoryName = vacancyDetails?.category_id[0]?.name || '';
  const categoryId = vacancyDetails?.category_id[0]?.id|| '';
  const deadline = vacancyDetails?.deadline || '';
  const views_count = vacancyDetails?.views_count || '';
  const to_choose = vacancyDetails && vacancyDetails.to_choose;
  const [activeTab, setActiveTab] = useState('jobDescription');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  

  function handleCategory(categoryID) {
    setVacancyFilter(categoryID);
    navigate("/")
  }
  
  const nav = useNavigate();
  console.log("Navigate",nav)

  const goBack = (e) => {
    e.preventDefault(); 
    nav("/");
  };

 
  
  return (
    <div className={style.body_block}>
      <div className={style.vacancy}>
        <div className={style.vacancy__header}>
          <div className={style.vacancy__start}>
            <a href="#/" className={style.close_btn} onClick={goBack}>
            <BsChevronLeft />
            </a>
            <span className={style.list__item__logo}>
              {companyImage && <img src={companyImage} alt=""  className={style.img_detail}/>}
            </span>
            <span className={style.company_name}>{companyName}</span>
            
            
          </div>
          <div className={style.list__item__end}>
            <VscEye className={style.list__item__eye} />{views_count}
            <a href="#">
            <FaHeart
                      onClick={() => setIsLikes(slug)}
                      style={{
                        color: to_choose === true ? "#ff8686" : "inherit",
                      }}
                  />
            </a>
          </div>
        </div>
        <div className={style.vacancy__info}>
          <h1 className={style.vacancy__title}>{vacancyDetails?.name || 'Vacancy Title Not Available'}</h1>
          <span className={style.vacancy__deadline}>
            <MdOutlineAccessTime style={{ width: '20px', height: '20px',color:"#de7d0b"}} />
            <span>{`Son tarix ${deadline}`}</span>
          </span>
          <span className={style.company__industry}>
            <a onClick={() => handleCategory(categoryId)}>{categoryName}</a>
          </span>
        </div>
        <div className={style.tab__links}>
        <div
          className={`${style.tab__link} ${activeTab === 'jobDescription' ? style.active : ''}`}
          onClick={() => handleTabClick('jobDescription')}
        >
          İşin təsviri
        </div>
        <div
          className={`${style.tab__link} ${activeTab === 'aboutCompany' ? style.active : ''}`}
          onClick={() => handleTabClick('aboutCompany')}
        >
          Şirkət haqqında
        </div>
      </div>

      {activeTab === 'jobDescription' && <Job_description slug={slug} />}
      {activeTab === 'aboutCompany' && <About_company slug={slug} />}
        </div>
      </div>
  
  );
}

export default Vacancies_detail;

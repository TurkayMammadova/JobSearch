import React, { useContext, useEffect, useState } from 'react';
import style from './About_company.module.css';
import { MainContext } from '../../context';


function About_company({slug}) {
  const { allData, getVacancyDetailBySlug } = useContext(MainContext);
  const vacancyDetails = getVacancyDetailBySlug(allData, slug);
  console.log("vacancyDetail",vacancyDetails)
  useEffect(() => {
    console.log('detail', vacancyDetails);
  }, [vacancyDetails]);

  


  if (!vacancyDetails) {
    // If details are not available yet, you can render a loading state or return null.
    return <div>Loading...</div>;
  }

  const companyDescription = vacancyDetails.company_id?.description || '';
  const companyPhone = vacancyDetails.company_id?.phone || '';
  const companyWebsite = vacancyDetails.company_id?.website || '';
  const companyLocation = vacancyDetails.company_id?.location || '';
  console.log('Location', companyLocation);

  return (
    <div className={style.tab_content}>
      <div className={style.tab_content__item}>
        <div className={style.content}>
          <div className={style.content_text}>
            <h4>
              <span>
                <strong >Şirkət haqqında</strong>
              </span>
            </h4>
            <ul className={style.about}>
              <li>
                {/* Use dangerouslySetInnerHTML to render HTML content */}
                <span dangerouslySetInnerHTML={{ __html: companyDescription }} />
              </li>
            </ul>
            <div className={style.info}>
              {/* <div>
                <h4>
                  <strong>Ünvan</strong>
                </h4>
                <p>{companyLocation}</p>
              </div> */}
              <div>
                <h4>
                  <strong>Əlaqə nömrəsi</strong>
                </h4>
                <p>{companyPhone}</p>
              </div>
              <div>
                <h4>
                  <strong>Vebsayt</strong>
                </h4>
                <a href={`http://${companyWebsite}`} target='_blank'>
                  {companyWebsite}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_company;

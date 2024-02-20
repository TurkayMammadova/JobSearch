import React, { useContext, useEffect} from 'react';
import style from './Company_info.module.css';
import { MainContext } from '../../context';


function Company_info({slug}) {
  const { allData, getCompanyDetailBySlug } = useContext(MainContext);
  const companyDetails = getCompanyDetailBySlug(allData, slug);
  useEffect(() => {
    console.log('detail',companyDetails);
  }, [companyDetails]);

  if (!companyDetails) {
    return <div>Loading...</div>;
  }

  const companyDescription = companyDetails.company_id?.description || '';
  const companyPhone = companyDetails.company_id?.phone || '';
  const companyWebsite = companyDetails.company_id?.website || '';
  const companyLocation = companyDetails.company_id?.location || '';
  

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
                <span style={{ margin: 0, padding: 0 }} dangerouslySetInnerHTML={{ __html: companyDescription }} />
              </li>
            </ul>
            <div className={style.info}>
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

export default Company_info;

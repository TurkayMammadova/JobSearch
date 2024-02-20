import React from 'react'
import style from './About.module.css'

function About() {
  return (
<div className='list_block'>
<div className='about'>
<h2 className='section_title'>Haqqımızda</h2>
<div className={style.tab_content__item}>
  <div className={style.about__banner}>
    <div className={style.about__text}>
      <h1>JobSearch.az</h1>
      <p>Azərbaycanda iş axtarışı üçün nəzərdə tutulmuş onlayn platformadır.</p>
    </div>
    </div>
    <div>
    <p>Yarandığı, 2005-ci ildən bu günədək sayt illər boyu reytinq üzrə Azərbaycanda ən populyar iş axtarışı saytı olaraq qalır. </p>
    <p>Biz ilk növbədə iş axtarışında olanlara dəstək olmağa çalışırıq, onlara iş axtarışı və şirkətləri tədqiq etmək üçün təmənnasız imkanlar yaradırıq. Hər gün minlərlə iş axtarışında olan insanlar üçün yeni iş imkanları yaradırılır. </p>
    <p>Dəyərli müştərilərimiz olan şirkətlər haqqında da daima düşünürük və onların əmək bazarında daha da yaxşı tanıdılmasında və ən yaxşı namizədlərin tapılmasında dəstək oluruq. Müştərilərimiz arasında beynəlxalq və yerli neft və qeyri-neft şirkətləri, dövlət qurumlarını, maliyyə institutlarını, qeyri-hökümət təşkilatlarını, orta və kiçik sahibkarları və s. yer tutur. </p>
    <p>Saytın istifadəçilərini minlərlə müştərilər və on minlərlə iş axtarışında olan istifadəçilər təşkil edir.</p>
    </div>
</div>
      </div>



    </div>
  )
}

export default About
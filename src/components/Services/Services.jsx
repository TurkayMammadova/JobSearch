import React from 'react'
import style from './Services.module.css'
import classNames from 'classnames';

function Services() {
  
  const premium=classNames(style.services__price, style.services__item__premium)
  return (
    <div className='list_block'>
<div className='about'>
<h1 className='section_title'>Xidmətlər</h1>
<ul className={style.services__list}>
  <li className={style.services__item}>
    <div className={style.services__text}>
<h2>Bir vakansiya</h2>
<p>1 ay müddətində aktiv qalır</p>
</div>
<div className={style.services__price}>25 AZN</div>
  </li>
  <li className={style.services__item}>
    <div className={style.services__text}>
<h2>5 və daha çox vakansiya</h2>
<p>Bir gündə 5 və daha çox elan yerləşdirilməsinə 20% endirim tətbiq olunur</p>
</div>
<div className={style.services__price}>20 AZN (5x)</div>
  </li>
  <li className={style.services__item}>
  <div className={style.services__text}>
<h2>Premium</h2>
<p>Premium iş elanı saytda olan digər elanlardan xüsusi dizayn və Premium qeydi ilə fərqlənərək saytın yuxarı hissəsində, ilk onluqda 1 gün ərzində qalacaq</p>
</div>
<div className={premium}>40 AZN</div>
</li>
</ul>
<div className={style.tab_content__item}>
  <h2>İş elanlarının yerləşdirilməsi</h2>
<p>İş elanı yerləşdirmək üçün, sizdən vakant iş yeri haqqında məlumatı 
  <a href="mailto:info@jobsearch.az"> info@jobsearch.az</a> ünvanına Word formatında göndərməyiniz xahiş olunur. Mətnin daha rahat oxunması üçün bizim tərəfdən müəyyən qrammatik düzəlişlər aparıla bilər. </p>
<p>İşədüzəltmə üzrə beynəlxalq standart və prinsiplərə cavab verməyən, dəfələrlə bu prinsipləri pozmuş, həmçinin qeyri-qanuni fəaliyyətlə məşğul olan işəgötürən şirkətlərin elanlarının saytımızda yerləşdirilməsinə imtina verə bilərik. </p>
<p>İşəgötürən şirkət iş elanında öz şirkət adını göstərməmək hüququna malikdir, lakin bununla belə məxfilik saxlanılmaqla saytın administratoru kimi həmin məlumatlar bizə təqdim olunmalıdır. </p>
<p>Bitmə tarixi qeyd olunmayan iş elanları maksimum tarix olaraq 1 aylıq götürüləcək. Bu müddət əlavə ödəniş olunmaqla artırıla bilər. </p>
<p>İş elanının yerləşdirilməsi üçün Əlaqə bölməsinə də müraciət edə bilərsiniz. </p>
<h2>Reklam bannerinin yerləşdirilməsi</h2>
<p>Reklam bannerinin yerləşdirilməsi üçün xidmət haqqımız bannerin ölçüsündən və saytda olan yerindən asılıdır. Əlavə məlumat əldə etmək üçün&nbsp;Əlaqə&nbsp;bölməsindən&nbsp;müraciət edə bilərsiniz.&nbsp;</p>
<h2>İş elanı Storilərinin yerləşdirilməsi </h2>
<p>Bu xüsusi funksiya dəyərli müştərilərimiz üçün yaradılmışdır. Sizin elanın Storisi saytın sol menyusunun bütün bölmələrində əmələ gələcək, bu sizin auditoriyanızın daha da genişlənməsinə imkan yaradacaq, həm də şirkəti işaxtaranlar arasında daha da yaxşı tanıdacaq. Storidə elanın yerləşdirilməsi üçün xidmət haqqı əlavə 5 manat təşkil edir. </p>
<h2>Xidmətin ödənişi</h2>
<p>JobSearch.az rəsmi qeydiyyatdan keçmiş şirkətdir. Ödənişlər bank köçürməsi vasitəsilə həyata keçirilir və bütün vergilər müvafiq qaydada ödənilir. Biz həmçinin digər növ ödənişləri qəbul edirik və qanunvericiliyə uyğun sənədləşmə təqdim edirik. Əməkdaşlıq xidmət müqaviləsi bağlandıqdan sonra başlayır. Yeni müştərilərdən avans olaraq ödəniş tələb oluna bilər, lakin müəyyən vaxt əməkdaşlıqdan sonra ödəniş xidmət göstərildikdən sonra həyata keçirilə bilər.&nbsp;</p>
</div>
</div>


    </div>
  )
}

export default Services
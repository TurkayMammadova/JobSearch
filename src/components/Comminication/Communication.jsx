import React from 'react'
import style from './Communication.module.css'

function Communication() {
  return (
<div className='list_block'>
<div className='about'>
<h1 className='section_title'>Əlaqə</h1>
<div className={style.contacts__item}>
  <div className={style.contacts__text}>
    <h2>Ünvan</h2>
    <ul>
      <li className={style.address}>8 noyabr prospekti, Azure Biznes Mərkəzi, 18-ci mərtəbə. Bakı, AZ 1025, Azərbaycan</li>
    </ul>
  </div>
  <div className={style.contacts__map}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3623922424904!2d49.87192291129041!3d40.37866017132661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5b16f03049%3A0x8b233276e2e00004!2sAzure%20Business%20Center!5e0!3m2!1sru!2saz!4v1705389203665!5m2!1sru!2saz" style={{width:"100%",height:"100%",minHeight: '250px',scrolling:"no",marginheight:"0", frameborder:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
</div>
<div className={style.contacts__item}>
  <div className={style.contacts__text}>
    <h2>Telefon</h2>
    <ul>
      <li><a href="tel:994124345030">+994 12 434 50 30</a></li>
      <li><a href="tel:994124886491"> +994 12 488 64 91</a></li>
      <li><a href="tel:994124886492"> +994 12 488 64 92</a></li>
    </ul>
  </div>

</div>
<div className={style.contacts__item}>
  <div className={style.contacts__text}>
    <h2>Mobil</h2>
    <ul>
      <li><a href="tel:994502056620">+994 50 205 66 20</a></li>
      <li><a href="tel:994502089025">  +994 50 208 90 25</a></li>
      </ul>
  </div>
</div>
<div className={style.contacts__item}>
  <div className={style.contacts__text}>
    <h2>E-mail</h2>
    <ul>
      <li><a href="mailto:info@jobsearch.az">info@jobsearch.az</a></li>
     </ul> 
  </div>
</div>


    </div>
</div>

  )
}

export default Communication
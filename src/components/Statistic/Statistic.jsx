import React from 'react'
import style from './Statistic.module.css'
function Statistic() {
  return (
    <div className={style.body_block}>
      {/* <div className={style.sponsor}> */}
        <div className={style.statistic}>
          <p>Saytda dərc edilmiş vakansiyaların sayı</p>
          <div className={style.statistic__block}>
<ul className={style.statistic__info} >
  <li>
Günlük
<span>35</span>
  </li>
  <li>Həftəlik
    <span>230</span>
  </li>
</ul>
<div className={style.statistic__month}>
Aylıq
<span>826</span>
</div>
    </div>
    </div>
     {/* </div> */}
       
    </div>
   
  
  )
}

export default Statistic
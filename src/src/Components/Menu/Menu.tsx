import React, { useState } from 'react'
import styles from "./Menu.module.css"
import Prajwal from '../Tables/prajwal'
import Susanktable from '../Tables/susanktable'
const Menu = () => {
  const [active,setActive]=useState(null);
  const showPrajwal=()=>{
    setActive('Prajwal')
  }
  const showSusank=()=>{
    setActive('Susanktable')
  }
  
  
  return (
    <div className={styles.menu}>
        <div className={styles.menuwrapper}>
<div onClick={showPrajwal} className={styles.menufirstdiv}>Prajwal</div>
<div onClick={showSusank}className={styles.menuseconddiv}>Susank</div>
        </div>
      
          <div className={styles.menubody}>
        {active === 'Prajwal' && <Prajwal />}
      {active === 'Susanktable' && <Susanktable/>}
      {active === null && <h1>Click a div to show a component</h1>}
        </div>
    </div>
  )
}

export default Menu
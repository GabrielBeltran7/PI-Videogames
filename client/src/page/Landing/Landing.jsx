import React from 'react'
import {NavLink} from "react-router-dom"
import style from "./Landing.module.css"
const Landing = () => {
  return (
    
    <div>
    <div className={style.imghome}>
    <NavLink to={"/home"}>
    <button  className={style.btn}>Home</button>
    </NavLink>
    
    </div>
    
   
    </div>
  )
}

export default Landing
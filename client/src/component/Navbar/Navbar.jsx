import React from 'react'
import style from  "./Navbar.module.css"
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div className={style.container}>
        <div className={style.imgcontainer}>
            <img src="https://cdn.theorg.com/d3119e0e-8202-4034-85ce-d0356382515e_thumb.jpg" alt='HenryLogo'/>
        </div>
        <div className={style.linkcontainer}>
          
        <Link to={"/"} className={style.page}>Landing Page</Link>
        <Link to={"/Home"} className={style.page}>Home</Link>     
        <Link to={"/Create"} className={style.page}>Create</Link>
        <Link to={"/Details"} className={style.page}>Details</Link>
        
        
        </div>
    </div>
  )
}

export default Navbar
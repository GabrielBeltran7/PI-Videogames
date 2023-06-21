import React from 'react'
import style from "./Card.module.css"
import { Link } from 'react-router-dom'
const Card = (props) => {
    const id = props.id
  return (
  
    <article className={style.cardcontainer}>
      
      <div className={style.cardtitle}>
      <Link  to={`/Details/${id}`}>
      <img src={props.image}  className={style.image } alt="img"/> 
      </Link>
      </div>
      <div className={style.carddivisor}/>
      <div className={style.cardinfo}>
        <h4>{props.name}</h4>
        <br></br>
        <h4>{props.release_date}</h4>
        <h4>{props.rating}, rating</h4>   
      </div>
     
    </article>
   
  )
}

export default Card


import React from 'react'
// import Card  from "../Card/Card"
import Card from "../Card/Card"
import  style from "./Cards.module.css"
import { useSelector } from 'react-redux'
const Cards = () => {
  const allVideogames = useSelector((state)=> state.allVideogames)
  const allVideogamesdbapi = useSelector((state)=> state.allVideogamesdbapi)
  const allVideogamesOrder = useSelector((state)=> state.allVideogamesOrder)
  
  return (
<div>
<div className={style.cardscontainer}>
      {allVideogames.map((videogames)=> <Card 
      id={videogames.id} 
      name={videogames.name}  
      image={videogames.image} 
      release_date={videogames.release_date}  
      rating={videogames.rating}
      key={videogames.id}    />)}
  
   </div>


  
</div>

   
  )
}

export default Cards

import React, { useEffect} from 'react'
import Cards from '../../component/Cards/Cards'
import {useDispatch} from "react-redux"

import { getVideogames, filter, DbApifilter } from '../../Redux/Actions/Action'
import SearchBar from '../../component/SearchBar/SearchBar'
import style from "./Home.module.css"
import { useSelector } from 'react-redux'

const Home = () => {
  const allVideogamesdbapi = useSelector((state)=> state.allVideogamesdbapi)
  const filters = useSelector((state)=> state.filters)
  const allVideogames = useSelector((state)=> state.allVideogames)
  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(getVideogames())
  },[])




  const filterOrder = (event)=>{
    dispatch(filter(event.target.value))
  }

const FilterDbApi = (event)=>{
  dispatch(DbApifilter(event.target.value))
}




  return (
    <div className={style.containerhome}>
  


     <label className={style.label}>Ordenar Videogames</label>
     
     <select  className= {style.select}onChange={filterOrder}  name="" id="">
     <option defaultChecked value="asc">-</option>
     <option value="asc">Ascendente</option>
     <option value="des">Descendente</option>
     <option value="rating">Mayor Rating</option>
     <option value="menorrating">Menor Rating</option>
 
  </select>


      <label className={style.label}>Filtrar Videogames</label>
     
     <select  className= {style.select} onChange={FilterDbApi} name="" id="">
     <option defaultChecked value="Database">-</option>
    
     <option value="Api">Api</option>
     <option value="Database">Database</option>
     
 
  </select>

  <div> 
  <div >{<SearchBar/>}</div>
  </div>
  {console.log("DBAPI", allVideogamesdbapi)}

  {console.log("GAMESTODOS", allVideogames)}

  {filters? <Cards  allVideogames={allVideogamesdbapi} />:<Cards  allVideogames={allVideogames} /> }
 

    
    </div>
  )
}

export default Home




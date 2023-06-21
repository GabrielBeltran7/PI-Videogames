import React, { useEffect, useState } from 'react'
import style from "./SearchBar.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getVideogamexname } from '../../Redux/Actions/Action'
import Card from '../Card/Card'


export default function SearchBar() {




  const dispatch = useDispatch()
  const videogamesxname = useSelector((state) => state.videogamesxname)
  const [name, setName] = useState("")

  const handleChange = (event) => {
    setName(event.target.value)
  }
  const onSearch = (event) => {
    event.preventDefault()
    dispatch(getVideogamexname(name))
  }



  return (



    <div className={style.div}>

<br />

      <form onSubmit={onSearch}>
        <input className={style.SearchBar} type="search" onChange={handleChange} placeholder='Digita el nombre de Videogames para buscar' required />
        <button className={style.btn} type='submit'>Search</button>
      </form>
      <br />
      <div className={style.center}>
        {videogamesxname.map((videogames) => <Card
          id={videogames.id}
          name={videogames.name}
          image={videogames.image}
          release_date={videogames.release_date || videogames.released}
          rating={videogames.rating}
          key={videogames.id} />)}

      </div>
    </div>
  )
}

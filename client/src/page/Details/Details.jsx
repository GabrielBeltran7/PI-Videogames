import React, { useEffect } from 'react'
import styles from "./Details.module.css"
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getVideogameId } from '../../Redux/Actions/Action';





const Details = () => {
  const { id } = useParams()
  const videogamesxid = useSelector(state => state.videogamesxid)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideogameId(id))
  }, [dispatch, id])



  return (

  
<div className={styles.Container}>

{(videogamesxid.length) !== 0 ?
<>
  <div className={styles.card}>
    <h1 className={styles.text}>{`${videogamesxid.name} Details`}</h1>
    <h2 className={styles.text}>ID: {videogamesxid.id}</h2>
    <img className={styles.image} src={videogamesxid.background_image || videogamesxid.image} alt="" />

    <div className={styles.text}>
      <h2>Description</h2>
      <article dangerouslySetInnerHTML={{ __html: videogamesxid.description }} />
    </div>
    <div className={styles.card1}>



      <div>
        <h2 className={styles.text}>Platforms</h2>
        {videogamesxid.platformsName && (
          <ul className={styles.text}>
            {videogamesxid.platformsName.map((el) => (
              <li key={el}>{el}</li>
              ))}
          </ul>
        )}
    </div>


    
    <div>
        <h2 className={styles.text}>Genres</h2>
        {videogamesxid.genresName && (
          <ul className={styles.text}>
            {videogamesxid.genresName.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        )}
        </div>
      <div>
        <p className={styles.text}>Release date: {videogamesxid.released}</p>
        <p className={styles.text}>Rating: {videogamesxid.rating}</p>
        </div>
      </div>
                <div className={styles.Containerbtn}>
                <Link to="/home">
                <button className={styles.button}>Home</button>
                </Link>
                </div>
      </div>

      </>
: (<div className={styles.Container}>
  <h2 >Loading...</h2>
<img className={styles.imageloading} src="https://i.pinimg.com/originals/b0/d5/41/b0d541d77c57ddf7f6b077524fbf52f1.gif" alt="gif"/> 
<br />
<img className={styles.imageloading} src="https://64.media.tumblr.com/4fabe31ee0f7b6e875442f0c3b8aba67/tumblr_pur35wLvnq1vd5kceo9_r1_540.gif" alt="gif"/> 
<br />
<img className={styles.imageloading} src="https://287524.fs1.hubspotusercontent-na1.net/hubfs/287524/Imported_Blog_Media/habilidades-que-desarrollan-los-videojuegos-1-Dec-17-2022-07-54-40-3107-PM.gif" alt="gif"/> 
</div>)

}

  </div>

        

  )
}
export default Details





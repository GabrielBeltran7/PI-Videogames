import React, { useState, useEffect } from 'react'

import style from "./Form.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { postVideogames, getGenres } from '../../Redux/Actions/Action';
// import Select from "react-select" 




const Form = () => {

  // creamos la funcion despachadora 
  const dispatch = useDispatch()



  useEffect(() => {
    
      dispatch(getGenres())
    
  }, [])

  const allGenres = useSelector((state) => state.allGenres)



  const [errors, setErrors] = useState({
    name: "nombre es requerido",
    description: "description requerida",
    platforms: "plataforma  requerida",
    release_date: "fecha de lanz. requerida",
    rating: "rating  requerido",
    image: "Url imagen  requerida",
    GenreId: "genero requerido"
  });






  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false
      else {
        disabled = true
        break
      }
    }
    return disabled
  }

  const validate = (input, name) => {


    if (name === "name") {

      if (input.name !== "") setErrors({ ...errors, name: "" })

      else setErrors({ ...errors, name: "nombre requerido" })

    }

    else if (name === "image") {

      if (input.image !== "") setErrors({ ...errors, image: "" })

      else setErrors({ ...errors, image: "Url imagen requerida" })

    }

    else if (name === "description") {

      if (input.description !== "") setErrors({ ...errors, description: "" })

      else setErrors({ ...errors, description: "descripcion  requerida" })

    }



    else if (name === "release_date") {

      if (input.release_date !== "") setErrors({ ...errors, release_date: "" })

      else setErrors({ ...errors, release_date: "fecha de lanz. requerida" })

    }

    else if (name === "GenreId") {

      if (input.GenreId !== "") setErrors({ ...errors, GenreId: "" })

      else setErrors({ ...errors, GenreId: "generos requerido" })

    }

    else if (name === "platforms") {

      if (input.platforms !== "") setErrors({ ...errors, platforms: "" })

      else setErrors({ ...errors, platforms: "plataforma requerida" })

    }

    else if (name === "rating") {

      const regexRating = /^([0-9])*$/



      if (input.rating !== "")
        setErrors({ ...errors, rating: "" })
      else {
        setErrors({ ...errors, rating: "rating  requerido" })
        return
      }

      if (regexRating.test(input.rating)) setErrors({ ...errors, rating: "" })
      else setErrors({ ...errors, rating: "digite solo numeros" })



    }
  }





  const [input, setInput] = useState({

    name: "",
    image: "",
    descripcion: "",
    platforms: "",
    release_date: "",
    rating: "",
    GenreId: "",
  })




  // funcion para enviar el formulario y crear un nuveo video juego
  const handleSubmit = (event) => {
    
     event.preventDefault()// Esta funcion no permite que el formulario se  resetee cuando se hace el submit
   
     dispatch(postVideogames(input))
    

  }

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
    validate({
      ...input,
      [event.target.name]: event.target.value
    }, event.target.name)
  }



  return (
    <div className={style.container}>



      <form className={style.form} onSubmit={handleSubmit}>


        <div >

          <label className={style.label}>Nombre</label>

          <input className={style.input} name='name' type="text" onChange={handleChange} />

        </div>
        <span className={style.span}>{errors.name}</span>
        <div>
          <label className={style.label}>Descripcion</label>
          <input className={style.input} name="description" type="text" onChange={handleChange} />

        </div>
        <span className={style.span}>
          {errors.description}
        </span>
        <div>

        </div>

        <div>
          <label className={style.label}>Fecha</label>
          <input className={style.input} name="release_date" type="date" onChange={handleChange} />

        </div>
        <span className={style.span}>
          {errors.release_date}
        </span>

        <div>
          <label className={style.label}> Rating</label>
          <input className={style.input} name="rating" type="text" onChange={handleChange} />

        </div>
        <span className={style.span}>{errors.rating}</span>
        <div>
          <label className={style.label}> url Imagen</label>
          <input className={style.input} name="image" type="url" onChange={handleChange} />
        </div>
        <span className={style.span}>{errors.image}</span>


        <div>
          <label className={style.label}> Generos</label>
          <select className={style.select} name='GenreId' onChange={handleChange}>
          <option value=""></option>
          { allGenres.map(element =>  (
            
             <option  key= { element.id } value= { element.id } > { element.name }</option>
          )
          ,)},
           

          </select>
         

</div>
<span className={style.span}>{errors.GenreId}</span>








        <div>
          <label className={style.label}> Plataformas</label>
          <select className={style.select} name='platforms' onChange={handleChange}>
            <option value=""></option>
            <option value="Xbox">Xbox</option>
            <option value="Pc">Pc</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Celular">Celular</option>

          </select>
       
        
        
        </div>
        <span className={style.span}>{errors.platforms}</span>
        <input className={style.button} disabled={disable()} type="submit" name='submit' />

      </form>
    </div>
  )
}

export default Form
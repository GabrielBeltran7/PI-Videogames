const { Videogame, Genres, Videogame_Genres} = require("../db")
const { default: axios } = require("axios");
const { Op } = require("sequelize");
require('dotenv').config();
const {
    API_KEY,
} = process.env;

// CON ESTA FUNCION CREAMOS EL VIDEO JUEGO Y LO RELACIONAMOS A UN GENERO....
const createVideogameDb = async (name, description, platforms, image, release_date, rating, GenreId) => {
    const newVideogame = await Videogame.create({ name, description, platforms, image, release_date, rating})
    

    const relacion = newVideogame.id
   

     
 const VideogameId = relacion
const newVideogame_Genres = await Videogame_Genres.create({ GenreId, VideogameId})
    
return newVideogame_Genres
    

   
}




//consultamos el video juego po id o pk

const getVideogamesByIdDbyApi = async (id) => {
    if (isNaN(id)) {
        const videogamePkdb = await Videogame.findByPk(id,{
            include:{
                model:Genres,
                atributes:["name","id"],
                through: {
                    attributes: [],
                }
            }
        })
        return videogamePkdb
    }
    
    const videogamePkapi = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data
    
     return videogamePkapi
    
}







// con esta funcion  traemos todos los Videogames de la base de datos modelo Videogames y le concatenamos los del modelo genres
const getVideogamesAllDb = async () => {
    const getVideogamesDb = await Videogame.findAll({
        include:{
            model:Genres,
            atributes:["name","id"],
            through: {
                attributes: [],
            }
        }
    })
    return getVideogamesDb
}
// con esta funcion traemos todos los usuarios de la Api
const getVideogamesAllApi = async () => {
    const getVideogamesApi = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results
    const apiInfoMap = getVideogamesApi.map((videogames) =>{
        return {
         id: videogames.id,
         name: videogames.name,
         // description: videogames.description, // falta
          platforms: videogames.platforms,
         image: videogames.background_image,
         release_date: videogames.released,
         rating: videogames.rating,
         Genres: videogames.genres
        }
     })
     return apiInfoMap
}
// con esta funcion  unificamos los videogames  api y la db
const getVideogamesAllApiyDb = async () => {
    const getVideogamesDb = await getVideogamesAllDb()
    const getVideogamesApi = await getVideogamesAllApi()
    const videogamesAllApiyDb = [...getVideogamesDb, ...getVideogamesApi]
    return videogamesAllApiyDb
}




// con esta funcion traemos los datos por query, le aplicamos un filtro para que no tenga en cuenta si es minusculas o mayusculas, tambien trae por coincidencia de la db


const getVideogamesCoincidenceDb = async(name)=>{
    if(name){
        
     const videogameBynameDb = await Videogame.findAll({ limit: 2,where:{name: {[Op.iLike]: "%" +  name + "%"}},
     include:{
        model:Genres,
        atributes:["name","id"],
        through: {
            attributes: [],
        }
    }
    });
             
         return videogameBynameDb
    }

   
}

const getVideogameCoincidenceApi = async () => {
    const getVideogamesApi = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results

    const apiInfoMap = getVideogamesApi.map((videogames) =>{
       return {
        id: videogames.id,
        name: videogames.name,
        // description: videogames.description, // falta
        // platforms: videogames.platforms,
        image: videogames.background_image,
        released: videogames.released,
        rating: videogames.rating,
        Genres: videogames.genres
       }
    })
    return apiInfoMap
}
 
const getVideogamesCoincidenceDbyApi = async(name)=>{
    const VideogamesCoincidenceDb = await getVideogamesCoincidenceDb(name)
    const VideogameCoincidenceApi = await getVideogameCoincidenceApi(name)
     const videoCoincidenceDbApi = [...VideogamesCoincidenceDb, ...VideogameCoincidenceApi]
     let filterVideogames = videoCoincidenceDbApi.filter (filtername => filtername.name.toLowerCase() ===name.toLowerCase())
    console.log("PRUEBA",videoCoincidenceDbApi)
     if(filterVideogames.length ===0){
        throw new Error ("No se encontro Ningun Videogame con este nombre")
     } 
     if(filterVideogames.length !==0){
        return filterVideogames
     } 
        
     }
     
   

module.exports = {
    createVideogameDb,
    getVideogamesByIdDbyApi,
    getVideogamesAllApiyDb,
    getVideogamesCoincidenceDbyApi
}

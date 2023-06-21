const {Genres, Videogame, Videogame_Genres} = require("../db")

const { default: axios } = require("axios");
const { Op } = require("sequelize");
require('dotenv').config();
const {
    API_KEY,
} = process.env;




// con esta funcion se visualizan todos los generos de la db
const getGenresAllDb = async()=>{
    const GenresAllDb = await Genres.findAll()
    return GenresAllDb
}

// con esta funcion  traen todos los generos de la api, y luego que esten en un array de objetos , se envian a la base de datos
const getGenresAllApi = async () => {
    const getVideogamesApi = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results

    if(getVideogamesApi){
        const GenresAllDb = await Genres.findAll()
        if(GenresAllDb.length===0){

            const apiGenresMap = getVideogamesApi.map((gen) =>{
        
                return {
                 name: gen.name,
                 id: gen.id
                }
                
             })
              const resapiGenresMap = apiGenresMap.map( async g =>{
                     await Genres.create({
                         id: g.id,
                         name: g.name  
                     }) 
                 }) 

        }
        else {
           console.log("Los Genres ya Existen, no los puede volver a crear")
    
        }
       
    }
   
   
        
    }

   





//CON ESTA FUNCION GUARDAMOS LOS DATOS DE GEERO DE LA API EN DB
// const getGenresAllApi = async () => {
//     const getVideogamesApi = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results

//     const apiGenresMap = getVideogamesApi.map((gen) =>{
//        return {
//         name: gen.name,
//        }
//     })
   
//         const resapiGenresMap = apiGenresMap.map( async g =>{
//             await Genres.create({
//                 name: g.name  
//             }) 
//         }) 
        
//     }


module.exports={
    
    getGenresAllDb,
    getGenresAllApi
}






















// const createGenresdeApiaDB = async (id, name,)=>{
    
//     const genresAllApi = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results
//     const  genresAllApiFilter = genresAllApi.map((genres)=>{
//         return {
//             id: genres.id,
//          name: genres.name,
//         }

//     })
//     return genresAllApiFilter
    
  

// }
// const getGenresAllApi = async()=>{
//     const genresAllApi = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results
//     if(genresAllApi){
//         const createGenresDb =  createGenresdeApiaDB()
//         return createGenresDb
//     } else {
//         throw new Error ("No se encontraron Generos")
//     }
    
// }



// module.exports ={
//     // getGenresAllApi,
    
// }
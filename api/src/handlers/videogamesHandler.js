const { createVideogameDb, getVideogamesAllApiyDb, getVideogamesByIdDbyApi,getVideogamesCoincidenceDbyApi} = require ("../controllers/VideogamesController")
// creamos el video juego en la base de datos, esto se hace ppor body
const createVideogameHandler = async (req, res) =>{
    const {name, description, platforms, image, release_date, rating, GenreId, VideogameId} = req.body
    try {
        const response = await createVideogameDb (name, description, platforms, image, release_date, rating,GenreId, VideogameId)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// aca estamos haciendo un get tanto a los usuarios de la db como de la api

const getVidogamesHandlers = async (req, res) =>{
    try {
     const response = await getVideogamesAllApiyDb()
     return res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}

// estamos trayendo por params(id) los datos ya sean de la db o de la api

const getVideogamesByIdHandler = async(req, res)=>{
    const {id}= req.params
    try {
        const response = await getVideogamesByIdDbyApi(id)
       res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


const getVideogamesCoincidenceHnadler = async(req, res) => {
    const {name} = req.query;
    try {
    
      const response = await getVideogamesCoincidenceDbyApi(name);
      return   res.status(200).json(response)
    
    }catch (error){
      res.status(400).json({error: error.message})
    }
    };
    


module.exports= {
    createVideogameHandler,
    getVidogamesHandlers,
    getVideogamesByIdHandler,
    getVideogamesCoincidenceHnadler
}
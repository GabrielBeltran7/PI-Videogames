const {getGenresAllDb, getGenresAllApi} = require("../controllers/GenersController")



const getGenresAllDbHandler= async(req, res)=>{
    try {
        const response = await getGenresAllDb()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({error:error.massage})
    }
}



const getGenresAllApiHandler= async(req, res)=>{
    try {
        const response = await getGenresAllApi()
       return res.status(200).json(response)
    } catch (error) {
      return  res.status(400).json({error:error.massage})
    }
}

module.exports ={
   
   
    getGenresAllDbHandler,
    getGenresAllApiHandler
}
const { getGenresAllDbHandler, getGenresAllApiHandler} = require("../handlers/GenersHandler")

const {Router} = require ("express")

const genersRouter  = Router();

genersRouter.get("/", getGenresAllDbHandler)
genersRouter.get("/Api", getGenresAllApiHandler)


module.exports = genersRouter 

const {Router} = require ("express")
const {createVideogameHandler, getVidogamesHandlers, getVideogamesByIdHandler, getVideogamesCoincidenceHnadler} = require("../handlers/videogamesHandler")

const videosgamesRouter = Router();

videosgamesRouter.post ("/", createVideogameHandler)
videosgamesRouter.get ("/", getVidogamesHandlers)
videosgamesRouter.get ("/name", getVideogamesCoincidenceHnadler)
videosgamesRouter.get ("/:id", getVideogamesByIdHandler)

module.exports = videosgamesRouter



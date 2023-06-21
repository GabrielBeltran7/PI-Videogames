const videosgamesRouter  = require("./VideogamesRouters")
const genersRouter  = require("./GenersRouter")


const { Router } = require('express');
// Ejemplo: const authRouter = require('./auth.js');

// Importar todos los routers;


const router = Router();
// Configurar los routers


router.use("/Videogames", videosgamesRouter) 
router.use ("/Genres", genersRouter)




module.exports = router

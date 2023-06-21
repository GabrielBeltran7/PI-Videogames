import { GET_GENRES,  GET_VIDEOGAMES, GET_VIDEOGAMESXID, GET_VIDEOGAMESXNAME, ORDERVIDEOGAMES, FILTER_GAMES_DB_API } from "../Actions/Action"

let initialState = {
    allGenres: [],
    allVideogames: [],
    videogamesxid: [],
    videogamesxname: [],
    videogamesOrder: [],
    allVideogamesdbapi:[],
 
    filters: false

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GENRES:
            return {
                ...state,
                allGenres: action.payload
            }


        case GET_VIDEOGAMESXNAME:
            return {
                ...state,
                videogamesxname: action.payload
            }



        case GET_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload
            }
        default: return state









        case GET_VIDEOGAMESXID:
            return {
                ...state,
                videogamesxid: action.payload

            }








        case ORDERVIDEOGAMES:


            if (action.payload === "asc") {
                return {
                    ...state,
                  
                    allVideogames: [...state.allVideogames].sort((prev, next) => {
                        if (prev.name > next.name) return 1
                        if (prev.name < next.name) return -1
                        return 0
                    })
                }

            } else if (action.payload === "des") {
                return {
                    ...state,
                   
                    allVideogames: [...state.allVideogames].sort((prev, next) => {
                        if (prev.name > next.name) return -1
                        if (prev.name < next.name) return 1
                        return 0
                    })

                }


            }
            else if (action.payload === "rating") {
                return {
                    ...state,
                    
                    allVideogames: [...state.allVideogames].sort((prev, next) => {
                        if (prev.rating > next.rating) return -1
                        if (prev.rating < next.rating) return 1
                        return 0
                    })

                }
            }
            else if (action.payload === "menorrating") {
                return {
                    ...state,
                   
                    allVideogames: [...state.allVideogames].sort((prev, next) => {
                        if (prev.rating > next.rating) return 1
                        if (prev.rating < next.rating) return -1
                        return 0
                    })

                }


            }


            case FILTER_GAMES_DB_API:  
             if (action.payload === "Api") {
                const GamesDB = [...state.allVideogames]; 

                const api = GamesDB.filter((game)=> game.id >0)
                return {
                    ...state,
                    filters: true,
                    allVideogamesdbapi: api,

            } 

        } else  if (action.payload === "Database") {
            const GamesAPI = [...state.allVideogames]; 

            const db = GamesAPI.filter((game)=> game.id.length >0)
            return {
                ...state,
                filters: true,
                allVideogamesdbapi: db,

        } 

    }  

   
   
        

    }


}






        

export default rootReducer
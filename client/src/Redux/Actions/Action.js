import axios from "axios";
// ACTION TYPE
export const GET_GENRES = "GET_GENRES"
export const ORDERVIDEOGAMES = "ORDERVIDEOGAMES"
export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
export const GET_VIDEOGAMESXID = "GET_VIDEOGAMESXID"
export const GET_VIDEOGAMESXNAME = "GET_VIDEOGAMESXNAME"
export const FILTER_GAMES_DB_API=  "FILTER_GAMES_DB_API"
//


// ACTION 
export function postVideogames(info) {
    return async function (dispatch) {
        try {

            const response = await axios.post("http://localhost:3001/Videogames/", info);
        
            alert("la informacion se guardo de forma exitosa")
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}





export function getGenres() {
    return async function (dispatch) {
        try {
            const response = (await axios.get("http://localhost:3001/genres/")).data
        
            return dispatch({
                type: GET_GENRES,
                payload: response
            })

        } catch (error) {
            
                alert("Sucedio un error al requerir los Genres")
            
           

          
        }
    }

}

export function getVideogames() {
    return async function (dispatch) {
        try {
            const response = (await axios.get(`http://localhost:3001/Videogames/`)).data
        
            return dispatch({
                type: GET_VIDEOGAMES,
                payload: response
            })

        } catch (error) {
            
                alert("Sucedio un error al requerir los Videogames")
            
           

          
        }
    }
}


export function getVideogameId (id){
    return async function (dispatch){
        try {
            const response = (await axios.get(`http://localhost:3001/Videogames/${id}`)).data
            return dispatch({
                type:GET_VIDEOGAMESXID,
                payload: response
            })
        } catch (error) {
            
        }
    }
}





export function getVideogamexname (name){
return async function (dispatch){
    try {

                                          
        const response = (await axios.get(`http://localhost:3001/videogames/name?name=${name}`)).data

        return dispatch({
            type: GET_VIDEOGAMESXNAME,
            payload: response
        })
    } catch (error) {
        alert("El nombre de ese Videogame no existe")
    }
}
}

export function filter(order){
    return  function (dispatch){
       return dispatch ({
           type: ORDERVIDEOGAMES, 
           payload:order

       })
    }
}


export function DbApifilter(datatype){
    return  function (dispatch){
       return dispatch ({
           type: FILTER_GAMES_DB_API, 
           payload:datatype

       })
    }
}

//
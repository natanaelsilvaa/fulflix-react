import axios from "axios";


export const getList = (setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_FLIX_KEY}&language=pt-BR&page=1`)
    .then((response) => {
        
        setState(response.data.results)
    }).catch((error) => {
        console.log(error)
    })

}


export const getDetail = async(id, setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_FLIX_KEY}&language=pt-BR`)
    .then((response) => {
        
        setState(response.data)
     }).catch((error) => {
        console.log(error)
     })
}


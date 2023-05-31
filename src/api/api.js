import axios from "axios"

export const getList = (setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cd14786698559924cc02c1c5fc375b06&language=pt-BR&page=1`)
    .then((response) => {
        console.log(response)
        setState(response.data.results)
    }).catch((error) => {
        console.log(error)
    })

}


export const getDetail = async(id, setState) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cd14786698559924cc02c1c5fc375b06&language=pt-BR`)
    .then((response) => {
        console.log(response)
        setState(response.data)
     }).catch((error) => {
        console.log(error)
     })
}


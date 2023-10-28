import { MainContainer } from "./CardStyled";
import { getDetail } from "../../services/api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovieInfo } from "../../redux/fullflixSlice";

    export const Card = ({movie}) =>{
    const [movieDetail, setMovieDetail] = useState()
    const dispatch = useDispatch()

     
     const onHoverDetail = async(e) =>{
     getDetail(e.target.id, setMovieDetail)
     
     }

    useEffect(() => {
    dispatch(getMovieInfo(movieDetail))
    },[dispatch, movieDetail])
 
    return (
        <MainContainer to={"/Detail"} onMouseEnter={onHoverDetail} id={movie.id}>
            
            <img 
                
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                 id={movie.id}
            
            />
        

            <div className="infoContainer">
            
                <h4>Titulo:{movie.title}</h4>
                <h4>Nota:{movie.vote_average}</h4>
           
            </div>
        
        </MainContainer>
       
 );
 };
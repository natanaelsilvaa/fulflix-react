
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Footer } from "../../componentes/footer/Footer";
import { Header } from "../../componentes/header/Header";
import { Grid, MainContainer, RigthSide } from "./DetailStyle";
//import backgroundImage from "../../assets/imagens/fundo.png"

export default function Detail(){
    const state = useSelector((state) => state.fullflix.movie )
   
    return(
        <MainContainer>
            <Header />
                <Grid>             
                    <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt={state.title}/>
                    <RigthSide>
                        <p><b>Titulo:</b> {state.title}</p>
                        <p><b>Sinopse:</b> {state.overview}</p>
                        <p><b>Data de lançamento:</b> {state.release_date}</p>
                        <p><b>Nota:</b>{state.vote_average} </p>
                        <Link to={"/Home"}>Voltar Para Home</Link>
                    </RigthSide>
                    
                </Grid>
            <Footer />
               
        </MainContainer>
            
    );
}
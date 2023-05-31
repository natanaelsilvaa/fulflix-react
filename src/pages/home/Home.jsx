
import { useEffect, useState } from "react";
import { getList } from "../../api/api";
import { Card } from "../../componentes/card/Card";
import { Footer } from "../../componentes/footer/Footer";
import { Grid, MainContainer, Part1, Part2 } from "./HomeStyle";



export function Home(){
 
    const [movies, setMovies] = useState ([])


    useEffect (() => {
        getList(setMovies)
    },[])
        
    return(
        <MainContainer>
            <Part1 />
               
            <Part2>
                <h1>Filmes Populares</h1>
            </Part2>
           
                <Grid>      
                    {movies.map((movie)=> {
                    return  <Card movie={movie}/>;  
                
                    })}
                </Grid>  
            
                
            <Footer />
        </MainContainer>
            
    );
}
 export default Home;


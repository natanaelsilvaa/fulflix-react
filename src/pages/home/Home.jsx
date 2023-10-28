
import { useEffect, useState } from "react";
import { getList } from "../../services/api";
import { Card } from "../../componentes/card/Card";
import { Grid, MainContainer, Part1, Part2 } from "./HomeStyle";



export function Home() {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        getList(setMovies)
    }, [])

    return (
            <MainContainer>
                <Part1 />

                <Part2>
                    <h1>Filmes Populares</h1>
                </Part2>

                <Grid>
                    {movies.map((movie) => {
                        return <Card movie={movie} />;

                    })}
                </Grid>


            </MainContainer>
    );
}
export default Home;


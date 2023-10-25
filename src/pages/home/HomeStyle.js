import styled from "styled-components";
import backgroundImage from "../../assets/imagens/background.png"


export const MainContainer = styled.div`

justify-content: center;
align-items: center;
height: fit-content;
background-color: rgba(0,0,0,.70);

`

export const Part1 = styled.div`

height: 100vh;
background-image: url(${backgroundImage});
background-position: center;
background-size: cover;

`
export const Part2 = styled.div`

height: 10vh;
color: #fff;
font-size: 4vh;
padding-left: 2vw;

`




export const Grid = styled.div`

display: grid;
justify-content: center; 
align-items: center;
width: 100%;
min-height: 20vh;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
color: #fff;
padding: 10vh 0;
gap: 3vw;
margin: auto;


`



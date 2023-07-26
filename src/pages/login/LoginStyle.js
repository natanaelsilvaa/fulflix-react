import styled from "styled-components";
import backgroundImage from "../../assets/imagens/result.png"



export const Container = styled.div`
    display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;
     min-width: 100vw;
     background-image: url(${backgroundImage});
     background-position: center;
     background-size: cover;
`

export const Form = styled.div`
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:  rgba(0,0,0,.70)  ;
    border-radius: 5px;
    width: 100%;
    max-width: 450px;
    gap: 30px 0px;

    h1 {
    color: #e40c14;
    font-size: 35px;
    font-weight: light;
    }

    h2 {
        color: white;
        font-size: 25px;
        font-weight: light;
        }

    p {
    color: white;
    font-size: 16px;
    font-weight: bold
    }

    a {
    color: white;
    :hover{
        opacity: 0.8;
    }

    }
`


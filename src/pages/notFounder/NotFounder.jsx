import CircumIcon from "@klarr-agency/circum-icons-react";
import styled from "styled-components";

export function NotFounder(){
 
    return(
     <Container value="404" text="Página não encontrada">
        
            <h1>404 Página Não Encontrada!</h1>
            <Icon> 
            <CircumIcon name="circle_remove" size={100} /> 
            </Icon>
            
       
        </Container>
    );
}
export default NotFounder;

export const Container = styled.div`
display: flex;
align-items: center;
justify-content:center;
font-size: 2vw;
height: fit-content;
min-height: 100vh;
background-color:rgba(0,0,0,.70) ;


h1 {
    color: white;
    align-items: center;
    :hover{
        opacity: 0.8;
        color: red;
    }
    cursor: pointer;
}
`
export const Icon = styled.div`
 color: white;
 cursor:pointer;

`





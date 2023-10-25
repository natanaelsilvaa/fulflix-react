import styled from "styled-components";



export const Container = styled.div`
    display: flex;
     justify-content: center;
     align-items: center;
    
 
    

   
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
    margin-top: 20px;
    background-color:  rgba(0,0,0,.70);
    color: #fff;
    border-radius: 5px;
    width: 100%;
    max-width: 450px;
    h1 {
        color: #e40c14;
        font-size: 35px;
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
    

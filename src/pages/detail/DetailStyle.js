import styled from "styled-components";


export const MainContainer = styled.div`

    img{
        width: 100%;
        height: 100%;
    }

`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 35% 65%;
    height: 100%;
`

export const RigthSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5vw;
    p{
        font-size: 1.5vw;
    }
    a{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;
        width: 14vw;
        border-radius: 1.5vw;
        background-color: #e40c14;
        color: #fff;
        font-size: 1.5vw;
        text-decoration: none;
        :hover{
            opacity: 0.8;
        }
}
`



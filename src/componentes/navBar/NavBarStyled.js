import styled from "styled-components";


export const Nav = styled.nav`
    display: flex;
    box-shadow: rgba(0,0,0, .15) 0px -2px 10px;
    align-items: center;
    padding: .5em 2em;
    background-color: #000;

`
export const NavBrand = styled.a`

    font-size: 1.2em;
    

    span{
        font-weight: 900;
        text-transform: uppercase;
        color: #e40c14;
    }

`

export const NavList = styled.a`

   ul { 
    display: flex;
    list-style: none;
    }

    li {
    padding: .4em .6em;

    }

    .active {

        color: #fff;
    }

`
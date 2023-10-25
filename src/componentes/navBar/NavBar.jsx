import React from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, NavBrand, NavList } from './NavBarStyled';

const NavBar = () => {
    return (
        <Nav>
            <NavBrand>
                <NavLink to={'/'}>
                    <span>FULLFLIX</span>
                </NavLink>
            </NavBrand>

            <NavList>
                <ul>
                    <li>
                        <NavLink to={'/'}>
                            Início
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/login'}>
                            Entrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/register'}>
                            Cadastrar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/abount'}>
                            Sobre
                        </NavLink>
                    </li>
                </ul>
            </NavList>

        </Nav>
    )
}

export default NavBar
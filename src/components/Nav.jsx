import React from 'react'
import { Link } from "react-router-dom"
import pokeballClic from '../images/pokeballClic.png'

const Nav = () => {
    return (
        <nav className="pokeCards_nav">
            <li className="pokeCards_list">
                <Link to="/">
                    <img src={pokeballClic} alt="Pokeball Icon"/>
                </Link>
                <h1>Poke App</h1>
            </li>
        </nav>
    )
}

export default Nav

import React from 'react'
import { Link } from 'react-router-dom'
import pokeballClic from '../images/pokeballClic.png'
import home from '../images/home.png'
import { useDispatch } from 'react-redux'
import { getPokemonsAction } from '../redux/reducer/pokeReducer'

const NavPokeDetail = () => {
    const dispatch = useDispatch()

    const handleHomeClick = () => {
        dispatch(getPokemonsAction())
    }

    return (
        <nav className="pokeDetail_nav animate__animated animate__bounce">
            <li className="pokeDetail_list">
                <Link to="/">
                    <img src={pokeballClic} alt="Pokeball Icon" className="pokeDetail_pokeball" />
                 </Link>
                <h1>Poke App</h1>
            </li>
            <Link to="/pokecards" onClick={handleHomeClick}>
                <img src={home} alt="Home Icon" className="pokeDetail_home" />
            </Link>
        </nav>
    )
}

export default NavPokeDetail

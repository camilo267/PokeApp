import React from 'react'
import { Link } from "react-router-dom"
import pokeBall from '../images/pokeBall.png'
import pokeballClic from '../images/pokeballClic.png'
import {useDispatch } from 'react-redux'
import { getPokemonsAction } from '../redux/reducer/pokeReducer'

const PokeScreen = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(getPokemonsAction())
    }

    return (
        <div className="index_container animate__animated animate__pulse">
            <div className="index_ball">
                <h1>pokemon app</h1>
                <img src={pokeBall} alt="Poke Ball" />
            </div>
            <div className="index_pokeBall">
                <div className="index_pokeBallContainer">
                    <Link to="/pokecards" className="index_link" onClick={handleClick}>
                        <img src={pokeballClic} alt="Pokeball Triger"/>
                        <p>Click Here</p>
                    </Link>
                </div>
                <p className="index_author">Created by Camilo Cuervo</p>
            </div>
        </div>
    )
}

export default PokeScreen

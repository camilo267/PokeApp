import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {pokeDetailAction} from '../redux/reducer/pokeReducer'

const Card = ({name, idx}) => {
    const offset = useSelector(store => store.pokemons.offset)
    const dispatch = useDispatch()

    const hanldeDetailClick = () => {
        dispatch(pokeDetailAction(idx+offset+1))
    }

    return (
        <Link
            onClick={hanldeDetailClick}
            to={`./pokecards/${idx+offset+1}`}
            className="pokeCards_link"
        >
            <div className="pokeCards_card">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx+offset+1}.png`} alt={name}/>
                <p>{idx+offset+1}</p>
                <h2>{name}</h2>
            </div>
        </Link>
    )
}

export default Card

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useFetch } from '../helpers/useFetch'
import {pokeDetailAction} from '../redux/reducer/pokeReducer'

const Card = ({name, idx, url}) => {
    const offset = useSelector(store => store.pokemons.offset)
    const dispatch = useDispatch()
    const {data, loading} = useFetch(url)

    const hanldeDetailClick = () => {
        dispatch(pokeDetailAction(url))
    }

    return (
        <Link
            onClick={hanldeDetailClick}
            to={`./pokecards/${idx+offset+1}`}
            className="pokeCards_link"
        >
            {
                loading ? 
                    <div className="pokeCards_card">
                        Loading
                    </div>
                :
                    <div className="pokeCards_card">
                        <img src={data.sprites.front_default} alt={name}/>
                        <p>{data.id}</p>
                        <h2>{data.name}</h2>
                    </div>
            }
        </Link>
    )
}

export default Card

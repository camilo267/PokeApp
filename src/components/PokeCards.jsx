import React from 'react'
import Nav from './Nav'
import {useSelector, useDispatch} from 'react-redux'
import Card from './Card'
import { beforePokemonsAction, nextPokemonsAction } from '../redux/reducer/pokeReducer'

const PokeCards = () => {
    const pokemons = useSelector(store => store.pokemons.array)
    const offset = useSelector(store => store.pokemons.offset)
    const dispatch = useDispatch()

    const handleBeforeClick = () => {
        dispatch(beforePokemonsAction())
    }

    const handleNextClick = () => {
        dispatch(nextPokemonsAction())
    }

    return (
        <div>
            <Nav />
            <div className="pokeCards_pokes">
                <div className="pokeCards_search">
                    <h3>Search Pokemons</h3>
                    <input placeholder="Search by name of pokemons" type="text"/>
                    <div className="pokeCards_buttons">
                        <div className="pokeCards_buttonBefore">
                            <button
                                disabled={offset === 0 ? true : false}
                                onClick={handleBeforeClick}
                            >
                                Before
                            </button>
                        </div>
                        <div className="pokeCards_buttonNext">
                            <button onClick={handleNextClick} >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pokeCards_container">
                    {
                        pokemons.map((pokemon, idx) => 
                            <Card key={pokemon.name} name={pokemon.name} idx={idx} />    
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default PokeCards

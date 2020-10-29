import React, { useRef, useCallback, useState } from 'react'
import Nav from './Nav'
import {useSelector, useDispatch} from 'react-redux'
import Card from './Card'
import { beforePokemonsAction, nextPokemonsAction } from '../redux/reducer/pokeReducer'
import { useCallPokemons } from '../hooks/useCallPokemons'

const PokeCards = () => {
    const offset = useSelector(store => store.pokemons.offset)
    const dispatch = useDispatch()

    const [pageNumber, setPageNumber] = useState(offset)

    const {loading, error, pokemonsArray, hasMore} =useCallPokemons(pageNumber)

    const observed = useRef()
    const lastPokemonRef = useCallback(node => {
        if(loading) return
        if(observed.current) observed.current.disconnect()
        observed.current = new IntersectionObserver(entires => {
            if(entires[0].isIntersecting && hasMore){
                setPageNumber(prevPageNumber => prevPageNumber + 20)
            }
        })
        if(node) observed.current.observe(node)
    }, [loading, hasMore])

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
                <div className="pokeCards_search animate__animated animate__backInUp">
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
                <div className="pokeCards_container animate__animated animate__backInUp">
                    {
                        pokemonsArray.map((pokemon, idx) => {
                            if(pokemonsArray.length === idx + 1) {
                                return (
                                    <div ref={lastPokemonRef} key={pokemon.name}>
                                        <Card name={pokemon.name} idx={idx} />  
                                    </div>
                                )
                            } else {
                                return <Card key={pokemon.name} name={pokemon.name} idx={idx} />  
                            } 
                        })
                    }
                </div>
                {
                    loading && <div>Loading...</div>
                }

                {
                    error && <div>Error</div>
                }
            </div>
        </div>
    )
}

export default PokeCards

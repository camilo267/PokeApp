import React, { useRef, useCallback, useState } from 'react'
import Nav from './Nav'
import {useSelector, useDispatch} from 'react-redux'
import Card from './Card'
import { beforePokemonsAction, getPokemonsAction, nextPokemonsAction, pokeFilter } from '../redux/reducer/pokeReducer'
import { useCallPokemons } from '../hooks/useCallPokemons'

const PokeCards = () => {

    document.addEventListener('DOMContentLoaded', () => {
        dispatch(getPokemonsAction())
    })

    const offset = useSelector(store => store.pokemons.offset)
    const array = useSelector(store => store.pokemons.array)

    const dispatch = useDispatch()

    const [pageNumber, setPageNumber] = useState(offset)
    const [inputValue, setInputValue] = useState('')

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
        setPageNumber(offset + 20)
        console.log(pageNumber)
        lastPokemonRef()
        dispatch(nextPokemonsAction())
    }

    const handleInputchage = (e) => {
        setInputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(pokeFilter(inputValue))
    }

    return (
        <div>
            <Nav />
            <div className="pokeCards_pokes">
                <div className="pokeCards_search animate__animated animate__backInUp">
                    <h3>Search Pokemons</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Search by name of pokemons"
                            type="text"
                            value={inputValue}
                            onChange={handleInputchage}
                        />
                    </form>
                    <div className="pokeCards_buttons">
                        <div className="pokeCards_buttonBefore">
                            <button
                                disabled={offset === 0 || array.length < 20 ? true : false}
                                onClick={handleBeforeClick}
                            >
                                Before
                            </button>
                        </div>
                        <div className="pokeCards_buttonNext">
                            <button
                                onClick={handleNextClick}
                                disabled={array.length < 20 ? true : false}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pokeCards_container animate__animated animate__backInUp">
                    {
                        array.length < 20 ?
                            array.map((pokemon, idx) => {
                                if(array.length === idx + 1) {
                                    return (
                                        <div ref={lastPokemonRef} key={pokemon.name}>
                                            <Card name={pokemon.name} idx={idx} url={pokemon.url}/>  
                                        </div>
                                    )
                                } else {
                                    return <Card key={pokemon.name} name={pokemon.name} idx={idx} url={pokemon.url} />  
                                } 
                            })
                        :
                            pokemonsArray.map((pokemon, idx) => {
                                if(pokemonsArray.length === idx + 1) {
                                    return (
                                        <div ref={lastPokemonRef} key={pokemon.name}>
                                            <Card name={pokemon.name} idx={idx} url={pokemon.url} />  
                                        </div>
                                    )
                                } else {
                                    return <Card key={pokemon.name} name={pokemon.name} idx={idx} url={pokemon.url} />  
                                } 
                            })
                    }
                </div>
                {
                    loading && <div></div>
                }

                {
                    error && <div>Error</div>
                }
            </div>
        </div>
    )
}

export default PokeCards

import {useEffect, useState} from 'react'
import Axios from 'axios'

export const useCallPokemons = (page) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokemonsArray, setPokemonsArray] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setError(false)
        Axios({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`
        }).then(res => {
            setPokemonsArray(prevPokemons => {
                return [...prevPokemons, ...res.data.results]
            })
            setHasMore(res.data.results.length > 0)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setError(true)
        })
    }, [page])

    return {loading, error, pokemonsArray, hasMore}
}

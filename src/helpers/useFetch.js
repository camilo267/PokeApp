import { useState, useEffect, useRef } from "react"

export const useFetch = (name) => {

    const isMounted = useRef(true)

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    },[])

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null
        })
        fetch(`https://pokeapi.co/api/v2/ability/${name}`)
            .then(res => res.json())
            .then(data => {
                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data: data.effect_entries[0]
                    })
                }
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })
    }, [name])

    return state
}
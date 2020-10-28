import { useState } from "react"
import Axios from 'axios'

export const AxiosURL = (name) => {
    const [state, setState] = useState({})

    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {
            setState(res.data)
        })

    // console.log(state)
    return state
}
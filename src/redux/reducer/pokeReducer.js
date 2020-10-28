import Axios from 'axios'

// constantes
const initialState = {
    array: [],
    offset: 0
}

//Types
const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS'
const NEXT_POKEMONS_SUCCESS = 'NEXT_POKEMONS_SUCCESS'
const BEFORE_POKEMONS_SUCCESS = 'BEFORE_POKEMONS_SUCCESS'
const POKE_DETAIL_SUCCESS = 'POKE_DETAIL_SUCCESS'

//Reducer
export const pokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                array: action.payload
            }

        case NEXT_POKEMONS_SUCCESS:
            return {
                ...state,
                array: action.payload.array,
                offset: action.payload.offset
            }

        case BEFORE_POKEMONS_SUCCESS:
            return {
                ...state,
                array: action.payload.array,
                offset: action.payload.offset
            }

        case POKE_DETAIL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

//Acciones
export const getPokemonsAction = () => async (dispatch, getState) => {
    const offset = getState().pokemons.offset

    try {
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: GET_POKEMONS_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}

export const nextPokemonsAction = () => async (dispatch, getState) => {
    const offset = getState().pokemons.offset
    const next = offset + 20

    try {
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=20`)
        dispatch({
            type: NEXT_POKEMONS_SUCCESS,
            payload: {
                array: res.data.results,
                offset: next
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const beforePokemonsAction = () => async (dispatch, getState) => {
    const offset = getState().pokemons.offset
    const before = offset - 20

    try {
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${before}&limit=20`)
        dispatch({
            type: BEFORE_POKEMONS_SUCCESS,
            payload: {
                array: res.data.results,
                offset: before
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const pokeDetailAction = (name) => async (dispatch) => {
    try {
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        console.log(res.data)
        dispatch({
            type: POKE_DETAIL_SUCCESS,
            payload: {
                details: res.data
            }
        })
    } catch (error) {
        console.log(error)
    }
}
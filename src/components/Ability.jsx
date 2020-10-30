import React from 'react'
import { useFetch } from '../helpers/useFetch'

const Ability = ({name}) => {
    const {data, loading} = useFetch(`https://pokeapi.co/api/v2/ability/${name}`)
    return (
        <div className="pokeDetail_ability">
            <h4>{name}</h4>
            <p>
                <b>Efeect: </b>
                {
                    loading ? 'Loadind...' : data.effect_entries[0].effect
                }
            </p>
            <p>
                <b>Short Efeect: </b>
                {
                    loading ? 'Loadind...' : data.effect_entries[0].short_effect
                }
            </p>
        </div>
    )
}

export default Ability

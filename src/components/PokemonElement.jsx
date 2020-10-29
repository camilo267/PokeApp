import React from 'react'
import { pokeTypes } from '../helpers/pokemonsTypes'

const PokemonElement = ({name}) => {
    const color = pokeTypes.filter(type => type.name === name)

    return (
        <div className="pokeDetail_typeElement">
            <img src={color[0].img} alt={name} />
            <p className="pokeDetail_typeElementName">
                {name}
            </p>
        </div>
    )
}

export default PokemonElement

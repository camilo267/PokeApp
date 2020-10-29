import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { pokeTypes } from '../helpers/pokemonsTypes'
import Ability from './Ability'
import NavPokeDetail from './NavPokeDetail'
import PokemonElement from './PokemonElement'
import TableInfo from './TableInfo'
import TableStats from './TableStats'

const PokeDetail = ({history}) => {
    const {details} = useSelector(store => store.pokemons)
    let typeName = ''
    let color = 'white'
    if(details)
    {
        typeName = details.types[0].type.name
        color = pokeTypes.filter(type => type.name === typeName)
    }

    return (
        <div>
            {
                details === undefined ? 
                    'Loading...'
                    :
                    <Fragment>
                        <NavPokeDetail />
                        <div className="pokeDetail_details">
                            <div
                                className="pokeDetail_info animate__animated animate__headShake"
                                style={{background: `linear-gradient(${color[0].backgroundColor} 0%, transparent 100%)`}}
                            >
                                <div className="pokeDetail_title">
                                    <h3>{details.id}</h3>
                                    <h1 style={{color: color[0].textColor}}>
                                        {details.name}
                                    </h1>
                                    <div className="pokeDetail_pokeElements">
                                        {
                                            details.types.map(type => (
                                                <PokemonElement name={type.type.name} key={type.type.name}/>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="pokeDetail_about">
                                    <div className="pokeDetail_contentImg">
                                        <h3>
                                            XP: {details.base_experience}
                                        </h3>
                                        <img src={details.sprites.front_default} alt={details.name}/>
                                    </div>
                                    <div className="pokeDetail_contentInfo">
                                        <h3>About</h3>
                                        <TableInfo />
                                    </div>
                                    <div className="pokeDetail_contentInfo">
                                        <h3>Basics Stats</h3>
                                        <TableStats />
                                    </div>
                                    <div className="pokeDetail_contentInfoAbilities">
                                        <h3>Abilities</h3>
                                        {
                                            details.abilities.map(ability => (
                                                <Ability name={ability.ability.name} key={ability.ability.name} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
            }
        </div>
    )
}

export default PokeDetail

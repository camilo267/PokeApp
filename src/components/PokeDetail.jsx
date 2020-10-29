import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Ability from './Ability'
import NavPokeDetail from './NavPokeDetail'
import TableInfo from './TableInfo'
import TableStats from './TableStats'

const PokeDetail = ({history}) => {
    const {details} = useSelector(store => store.pokemons)

    return (
        <div>
            {
                details === undefined ? 
                    'Loading...'
                    :
                    <Fragment>
                        <NavPokeDetail />
                        <div className="pokeDetail_details">
                            <div className="pokeDetail_info animate__animated animate__headShake">
                                <div className="pokeDetail_title">
                                    <h3>{details.id}</h3>
                                    <h1>{details.name}</h1>
                                    <div className="pokeDetail_pokeElements">

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

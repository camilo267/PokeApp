import React from 'react'
import { useSelector } from 'react-redux'

const TableStats = () => {
    const {details} = useSelector(store => store.pokemons)
    const {stats} = details

    return (
        <table className="pokeDetail_tableInfo">
            <tbody>
                {
                    stats.map(stat => (
                        <tr className="pokeDetail_tableRow" key={stat.stat.name}>
                            <td className="pokeDetail_tableRowName">
                                {stat.stat.name}
                            </td>
                            <td className="pokeDetail_tableRowValue">
                                <div className="pokeDetail_progress">
                                    <div
                                        className="pokeDetail_progressStat" 
                                        style={{width: `${stat.base_stat}%`, background: `${stat.base_stat < 50 ? 'rgb(232, 86, 92)' : 'rgb(255, 163, 94)'}`}}
                                    >
                                        {stat.base_stat}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    )
}

export default TableStats

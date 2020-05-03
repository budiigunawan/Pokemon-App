import React from 'react'
import {useSelector} from 'react-redux'
import {Card} from '../components'

export default function Favorite () {
    const pokemons = useSelector((state)=>state.pokemonReducer.favorites)

    return (
        <>
            <h2 style={{textAlign:"center"}}>Favorite list</h2>
            {pokemons ? 
                <Card pokemons={pokemons} /> :
                <h4 style={{textAlign:"center"}}>No Pokemon add yet</h4>
            }
        </>
    )
}


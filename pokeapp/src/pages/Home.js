import React,{useEffect} from 'react'
import {Navbar, Card} from '../components'
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons} from '../store/actions/pokemonAction'

export default function Home () {
    const pokemons = useSelector((state)=> state.pokemonReducer.pokemons)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons(6))
    },[dispatch])

    return (
        <>
            <Card pokemons={pokemons} />
        </>
    )
}
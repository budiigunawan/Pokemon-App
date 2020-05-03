export function setFavorites(pokemons) {
    return {
        type: 'SET_FAVORITES',
        payload: pokemons
    }
}

export function deleteFavorites(name) {
    return {
        type: 'DEL_FAVORITES',
        payload: name
    }
}

export function getPokemons(number) {
    return (dispatch) => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`)
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type: 'GET_POKEMONS',
                payload: data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export function getPokemonDetail(pokemonId) {
    return (dispatch) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response=>response.json())
        .then(data=>{
            dispatch({
                type: 'GET_POKEMON_DETAIL',
                payload: data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
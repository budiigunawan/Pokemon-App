const initialState = {
    favorites = [],
    pokemons = [],
    pokemon = null
}

function pokemonReducer (state = initialState, action) {
    switch (action.type) {
        case 'SET_FAVORITES':
            return {...state, favorites: [...state.favorites, action.payload]};
        case 'DEL_FAVORITES':
            let index = state.favorites.indexOf(state.favorites.find(poke=> poke.name === action.payload));
            let pokemons = [...state.favorites];
            pokemons.splice(index,1);
            return {...state, favorites: pokemons};
        case 'GET_POKEMONS':
            return {...state, pokemons: action.payload};
        case 'GET_POKEMON_DETAIL':
            return {...state, pokemon: action.payload};
        default:
            return state;
    }
}

export default pokemonReducer;
import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setFavorites, deleteFavorites} from '../store/actions/pokemonAction'

export default function Card (props) {
    const dispatch = useDispatch()
    const favorites = useSelector((state)=> state.pokemonReducer.favorites)
    let dataCard

    if (props.pokemons.results) {
        dataCard = props.pokemons.results
    } else {
        dataCard = props.pokemons
    }

    function doAddFavorite(event){
        const data = event.target.value
        const newObj ={
            id: data[0],
            name: data.substring(2)
        }
        dispatch(setFavorites(newObj))
    }

    function doDeleteFavorite(event){
        let pokemonName = event.target.value
        dispatch(deleteFavorites(pokemonName))
    }

    return (
        <>
        <h4 style={{textAlign:"center"}}>Pokemons List</h4>
        <div className="row">
            {dataCard && dataCard.map((pokemon,idx)=>{
                return (
                    <div className="col-md-4" key={idx}>
                        <div class="card mt-3 mr-3 mb-3 ml-3" style={{maxWidth: "20 rem"}}>
                            {pokemon.id ? 
                                <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} class="card-img-top" alt="pokemon" loading="lazy" /> :
                                <img src={`https://pokeres.bastionbot.org/images/pokemon/${idx+1}.png`} class="card-img-top" alt="pokemon" loading="lazy" />
                            }
                            
                            <div class="card-body">
                                <h5 class="card-title">{pokemon.name}</h5>
                            </div>
                            <div class="card-footer">
                                {pokemon.id ?
                                    <Link to={`/pokemon/${pokemon.id}`} className="btn btn-primary">Detail</Link> :
                                    <Link to={`/pokemon/${idx+1}`} className="btn btn-primary">Detail</Link>
                                }
                                {favorites.find(cek => cek.name === pokemon.name) ? 
                                    <button data-testid="remove-fav-btn" onClick={doDeleteFavorite} value={pokemon.name} className="btn btn-danger ml-2">Remove Favorite</button> :
                                    <button data-testid="add-fav-btn" onClick={doAddFavorite} value={[idx+1,pokemon.name]} className="btn btn-success ml-2">Add Favorite</button>
                                }
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
        </>
    )
}
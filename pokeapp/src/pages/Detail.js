import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getPokemonDetail} from '../store/actions/pokemonAction'
import {useParams, useHistory} from 'react-router-dom'

export default function Detail () {
    const {pokemonId} = useParams();
    const detail = useSelector((state)=>state.pokemonReducer.pokemon);
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=>{
        dispatch(getPokemonDetail(pokemonId))
    },[dispatch,pokemonId])

    return (
        <>
            <h2 style={{textAlign:"center"}}>Pokemon Detail</h2>
            {!detail && <img style={styles.loading} src="https://thumbs.gfycat.com/FairSinfulCottontail-max-1mb.gif" alt="loading" />}
            {detail && <div className="row">
                <div className="col-md-6">
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${detail.id}.png`} className="card-img" alt="pokemon" loading="lazy" />
                </div>
                <div className="col-md-6">
                    <h3 className="card-title">{detail.name}</h3>
                    <h5 className="card-text">height: {detail.height/10} meter(s)</h5>
                    <h5 className="card-text">weight: {detail.weight/10} kg(s)</h5>
                    <h5 className="card-test mb-0">type: </h5>
                    {detail.types.map((tipe,idx)=>{
                        return (
                            <div key={idx}>
                                <li>{tipe.type.name}</li>
                            </div>
                        )
                    })}
                    <button  onClick={history.goBack} className="btn btn-danger mt-4">Close</button>
                </div>
            </div>
            }
        </>
    )
}

const styles = {
    loading: {
        display: "block",
        margin: "0 auto"
    }
}
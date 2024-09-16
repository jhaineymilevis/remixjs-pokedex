import React, { useEffect } from 'react'
import {usePokemon} from "../hooks/usePokemon";
export default function PokeItem(props) {
    const {url} = props
   
    const {loading, pokemon, getPokemonByUrlFnc} = usePokemon();
  
    console.log(pokemon);

    
    useEffect(() =>
        {
            getPokemonByUrlFnc(url)
        }, []
    )
    
    if(loading) {
        return <p>Loading...</p>
    }
  return (
    <div>
      <span>{pokemon.name}</span>
    </div>
  )
}

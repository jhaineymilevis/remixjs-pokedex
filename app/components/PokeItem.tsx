import React, { useEffect } from 'react'
import {usePokemon} from "../hooks/usePokemon";
import { AiOutlineReload } from "react-icons/ai";
export default function PokeItem(props) {
    const {url, checkPokemon, pokemonSelected} = props
   
    const {loading, pokemon, getPokemonByUrlFnc} = usePokemon();
  
    
    useEffect(() =>
        {
            getPokemonByUrlFnc(url)
        }, []
    )
    
    const setPokemon = () => {
        checkPokemon(pokemon)
    }

    if(!pokemonSelected){
        setPokemon();
    }
    if(loading) {
        return <div className='w-24 h-24 flex items-center justify-center'><AiOutlineReload className='animate-spin w-7 h-7'/></div>
    }
  return (
    <div className='hover:bg-slate-500 h-24 rounded-md hover:cursor-pointer w-full flex item-center justify-center' onClick={setPokemon}>
        <img className='w-24 h-24' src={pokemon.sprites.front_default} alt={pokemon.name}/>   
    </div>
  )
}

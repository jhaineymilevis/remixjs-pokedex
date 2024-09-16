import React, { useState } from 'react'
import {getPokemonByUrl} from '../api/pokemon'
export function usePokemon() {

    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)

    const getPokemonByUrlFnc = async (url) =>{
        try{
            setLoading(true)
            const data =  await getPokemonByUrl(url)

            setLoading(false)
            setPokemon(data)
           

        }catch(err){
            return null
        }
    }
  
    return {pokemon, loading, getPokemonByUrlFnc}
}
  
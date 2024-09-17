import React, { useEffect, useState } from 'react'
import { getPokemonsAllApi } from '~/api'
import SearchInput, {createFilter} from 'react-search-input'
const KEYS_TO_FILTER = ["name"]
export default function Search(props) {
    const {className, loadPokemons} = props
    const [pokemons, setpokemons] = useState([])
    const [searchText, setSearchText] = useState("")
    const filerPokemon=pokemons.filter(createFilter(searchText, KEYS_TO_FILTER))
    
    useEffect(() => {
     (async () =>{

        try{
            const response = await getPokemonsAllApi();
            setpokemons(response.results);           

        }catch(error){
            console.log(error);
            
        }
     })()
    }, [])

    const onSearched = (e) =>{
        e.preventDefault()
       if(!searchText)loadPokemons(null)
       else loadPokemons(filerPokemon);

    
    }
    
  return (
    <form className={`w-full ${className}` } onSubmit={onSearched}>
      <input placeholder='Busca tu pokemon' className='w-full outline-0 bg-slate-300 py-4 px-6 md:rounded-bl-md' onChange={(e)=>{setSearchText(e.target.value);
      }}></input>
    </form>
  )
}

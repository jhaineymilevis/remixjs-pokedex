/* eslint-disable import/no-unresolved */
import { MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { getPokemons, getPokemonsByUrl } from "~/api";
import Header from "~/components/Header";
import PokeGrid from "~/components/PokeGrid";
import PokeInfo from "~/components/PokeInfo";
import Search from "~/components/Search";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = useLoaderData();

  const [pokemons, setPokemons] = useState(data?.results);
  const [nextUrl, setNextUrl] = useState(data.next)
  const [pokemonSelected, setPokemonSelected] = useState()
  const [pokemonSearch, setpokemonSearch] = useState(null)
  
  
  const loadMore = async () =>{
    if(nextUrl) {
      const response = await getPokemonsByUrl(nextUrl)
      setNextUrl(response.next)
      setPokemons([...pokemons,...response.results])
      
    }
  }

  const checkPokemon = (pokemon)=>{
    setPokemonSelected(pokemon)
  }
  return (
    <div>
      <Header />
      <div className="md:flex">

        <Search className="md:hidden" loadPokemons={setpokemonSearch}/>
        <div className="w-full h-[200px] flex flex-col items-end px-9 pb-5 md:hidden">
        <PokeInfo pokemon={pokemonSelected}/>
        </div>
        <div className="w-6/6 md:w-4/6">
          <PokeGrid pokemons={pokemonSearch||pokemons
          } loadMore={loadMore} checkPokemon={checkPokemon} nextUrl={nextUrl} pokemonSelected={pokemonSelected} pokemonSearch={pokemonSearch} />
        </div>
        <div className="w-6/6 hideen md:w-2/6 md:h[calc(100vh-72px)] md:flex md:flex-col md:items-center md:justify-between">
        <Search loadPokemons={setpokemonSearch}/>
        <PokeInfo pokemon={pokemonSelected} />
      
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  try {
    const response = await getPokemons();
    return json(response);
  } catch (error) {
    console.error(error);
  }
}

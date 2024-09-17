import InfiniteScroll from 'react-infinite-scroller';
import PokeItem from "./PokeItem";
import Loading from './Loading';

export default function PokeGrid(props: any) {
  const { pokemons, loadMore, checkPokemon, pokemonSearch, nextUrl,pokemonSelected} = props;
  let scrollref = null;
  return (
    <div className="h-[calc(100vh-320px)] md:h-[calc(100vh-72px)] overflow-scroll" ref={(ref)=>scrollref=ref}>
      <InfiniteScroll 
      loadMore={loadMore}
      hasMore={nextUrl&& !pokemonSearch ? true:false }
      loader={<Loading key={0}></Loading>}
      useWindow={false} 
      scrollParent={()=> scrollref} >
      <div
        className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-5
      lg:grid-cols-7"
      >
        {pokemons.map((pokemon) => (
          <PokeItem key={pokemon.name} url={pokemon.url} checkPokemon={checkPokemon} pokemonSelected={pokemonSelected}></PokeItem>
        ))}
      </div>
      </InfiniteScroll>
    </div>
  );
}

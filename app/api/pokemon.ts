/* eslint-disable import/no-unresolved */
import { env } from "~/utils/constants";

export async function getPokemons() {
  const url = `${env.BASE_PATH}/pokemon?limit=100`;

  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export async function getPokemonByUrl(url: string){
  try{

    const response = await fetch(url);
    const result = await response.json();
    return result;
  }catch(err){
    throw err;
  }
}
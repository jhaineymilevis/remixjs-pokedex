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

export async function getPokemonsByUrl(url: string){
  try{

    const response = await fetch(url);
    const result = await response.json();
    return result;
  }catch(err){
    throw err;
  }
}

export async function getPokemonsAllApi(){
  const url = `${env.BASE_PATH}/pokemon?limit=100000000000`;
  try{
    const response = await fetch(url);
    const result = await response.json();
    return result;

  }catch(err){
    throw err;    
  }

}
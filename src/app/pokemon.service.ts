import { Injectable } from '@angular/core';
import { mockPokemon } from './mock-pokemon';
import { IPokemon } from './Ipokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  fetchAllPokemon(){
    return mockPokemon;
  }

  fetchByName(pokemon:string){
    return pokemon;
  }
}

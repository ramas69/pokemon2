import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { IPokemon } from '../Ipokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons:IPokemon[] = [];

  constructor(private service:PokemonService){

  }

  ngOnInit(){
  this.getPokemons();
  this.getName(this.pokemons[5])

  }

 
    getPokemons(){
     this.pokemons =this.service.fetchAllPokemon();
     return this.pokemons;
    }

    getName(pokemon:IPokemon){
      console.log(this.service.fetchByName(pokemon.name));
      
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonData } from '../model/pokemon-data';
@Injectable({
  providedIn: 'root',
})
export class TestPokeapiService {
  constructor(private http: HttpClient) {}
  getPokemons(numberPoke: number) {
    return this.http.get<any>(
      `https://pokeapi.co/api/v2/pokemon?limit=${numberPoke}`
    );
  }
  getPokemon(pokemonName: string) {
    return this.http.get<PokemonData>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
  }
}

import { createReducer, on } from '@ngrx/store';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonState } from 'src/app/models/pokemons.state';
import {
  addPokemons,
  editPokemons,
  loadedPokemons,
  loadPokemons,
} from '../actions/pokemon.actions';

export const initialState: PokemonState = { loading: false, pokemons: [] };

export const pokemonsReducer = createReducer(
  initialState,
  on(loadPokemons, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedPokemons, (state, { pokemons }) => {
    return { ...state, loading: false, pokemons };
  }),
  on(addPokemons, (state, { pokemonItem }) => {
    return {
      ...state,
      loading: false,
      pokemons: [...state.pokemons, pokemonItem],
    };
  }),
  on(editPokemons, (state, { pokemonItem }) => {
    let filteredArray: any[] = [];

    state.pokemons.map((poke) => {
      if (poke?.id !== pokemonItem.id) {
        filteredArray.push(poke);
      } else if (poke?.id === pokemonItem.id) {
        filteredArray.push(pokemonItem);
      }
    });

    return { ...state, loading: false, pokemons: [...filteredArray] };
  })
);

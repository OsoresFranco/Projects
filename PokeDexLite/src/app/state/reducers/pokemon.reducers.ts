import { createReducer, on } from '@ngrx/store';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonState } from 'src/app/models/pokemons.state';
import { loadedPokemons, loadPokemons } from '../actions/pokemon.actions';

export const initialState: PokemonState = { loading: false, pokemons: [] }

export const pokemonsReducer = createReducer(
  initialState,
  on(loadPokemons, (state) => {
    return {...state, loading: true }
  }),
  on(loadedPokemons, (state, {pokemons}) => {
    console.log(pokemons)
    return {...state, loading: false, pokemons }
  })
);
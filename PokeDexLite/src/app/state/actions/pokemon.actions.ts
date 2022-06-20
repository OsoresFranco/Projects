import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/models/Pokemon';

export const loadPokemons = createAction('[Pokemon List] Load Pokemons');

export const loadedPokemons = createAction(
  '[Pokemon List] Loaded Success',
  props<{ pokemons: Pokemon[] }>()
);

export const addPokemons = createAction(
  '[Pokemon List] Add Success',
  props<{ pokemonItem: Pokemon }>()
);

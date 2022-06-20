import { createSelector } from '@ngrx/store';
import { PokemonState } from 'src/app/models/pokemons.state';
import { AppState } from '../app.state';
 
export const selectPokemonsFeature = (state: AppState) => state.pokemons;
 
export const selectPokemonsList = createSelector(
  selectPokemonsFeature,
  (state: PokemonState) => state.pokemons
);

export const selectLoading = createSelector(
    selectPokemonsFeature,
    (state: PokemonState) => state.loading
  );
  
import { ActionReducerMap } from "@ngrx/store";
import { PokemonState } from "../models/pokemons.state";
import { pokemonsReducer } from "./reducers/pokemon.reducers";

export interface AppState {
  pokemons: PokemonState;
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    pokemons: pokemonsReducer
};
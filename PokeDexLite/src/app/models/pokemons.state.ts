import { Pokemon } from './Pokemon';

export interface PokemonState {
  loading: boolean;
  pokemons: ReadonlyArray<Pokemon>;
}

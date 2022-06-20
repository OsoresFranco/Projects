import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PokemonService } from 'src/app/core/services/pokemon.service';
 
@Injectable()
export class PokemonsEffects {
 
  loadPokemons$ = createEffect(() => this.actions$.pipe(
    ofType('[Pokemon List] Load Pokemons'),
    mergeMap(() => this.pokemonService.getPokemonList()
      .pipe(
        map(pokemons => ({ type: '[Pokemon List] Loaded Success', pokemons })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private pokemonService:PokemonService
  ) {}
}
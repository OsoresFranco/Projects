import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPokemons } from 'src/app/state/actions/pokemon.actions';
import { Observable } from 'rxjs';
import {
  selectLoading,
  selectPokemonsList,
} from 'src/app/state/selectors/pokemon.selectors';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  loaded$: Observable<any> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.loaded$ = this.store.select(selectPokemonsList);

    this.store.dispatch(loadPokemons());
  }
}

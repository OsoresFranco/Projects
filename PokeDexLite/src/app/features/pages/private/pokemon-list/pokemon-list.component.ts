import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import {
  loadedPokemons,
  loadPokemons,
} from 'src/app/state/actions/pokemon.actions';
import { Observable } from 'rxjs';
import { selectLoading, selectPokemonsList } from 'src/app/state/selectors/pokemon.selectors';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  loaded$: Observable<any> = new Observable();
  auxArray: Pokemon[] = [];

  constructor(
    private store: Store<any>,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.loaded$ = this.store.select(selectPokemonsList)

    this.store.dispatch(loadPokemons());

    this.pokemonService.getPokemonList().subscribe((res: Pokemon[]) => {
      res.map((item) => {
        if (item != null) {
          this.auxArray.push(item);
        }
      });
      this.store.dispatch(loadedPokemons({ pokemons: this.auxArray }));
    });
  }

  page_size: number = 4;
  page_number: number = 1;
  pageSizeOptions: number[] = [4, 8];
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
}

/*   constructor(private pokemon: PokemonService) {
    this.pokemon.getPokemonList().subscribe((res) => {
      let auxArray:any[] = [];
      res.map((item: any) => {
        if (item != null) {
          auxArray.push(item);
        }
      });
      this.pokemonList = auxArray;
    });
  } */

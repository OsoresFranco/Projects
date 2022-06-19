import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: any = [];

  constructor(private pokemon: PokemonService) {}

  ngOnInit(): void {
    this.pokemon.getPokemonList().subscribe((res) => {
      this.pokemonList = res;
      console.log(this.pokemonList);
    });
  }

  page_size: number = 4;
  page_number: number = 1;
  pageSizeOptions: number[] = [4,8];
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
}

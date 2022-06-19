import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { PageEvent } from "@angular/material/paginator";
import {MatDialog} from '@angular/material/dialog';
import { PokemonModalComponent } from 'src/app/features/components/pokemon-modal/pokemon-modal.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: any = [];

  constructor(private pokemon: PokemonService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.pokemon.getPokemonList().subscribe((res) => {
      this.pokemonList = res;
      console.log(this.pokemonList);
    });
  }

  openModal(pokemon:any) {
    this.dialog.open(PokemonModalComponent, {data:{
      name: pokemon.name,
      image: pokemon.image,
      lvl: pokemon.lvl,
      evolutionId: pokemon.evolutionId,
      abilities: pokemon.abilities
    }})
  }

  page_size: number = 4;
  page_number: number = 1;
  pageSizeOptions: number[] = [4,8];
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
}

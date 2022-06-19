import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList:any = []

  constructor(private pokemon:PokemonService) { }

  ngOnInit(): void {
    this.pokemon.getPokemonList().subscribe(res=>{
      this.pokemonList = res;
      console.log(this.pokemonList)
    })
  }

}

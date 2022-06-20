import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/Pokemon';
import { selectPokemonsList } from 'src/app/state/selectors/pokemon.selectors';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss'],
})
export class PokemonModalComponent implements OnInit {
  normalizedUrl: string = '';
  loaded$: Observable<any> = new Observable ();

  constructor(@Inject(MAT_DIALOG_DATA) public data: Pokemon, private store:Store<any>) {}

  handleMissingImage() {
    this.data.image = '../../../../assets/whosthat.png';
  }

pruebita(){
  console.log(this.loaded$.subscribe)
}

  getEvolution(evolutionId: number) {
    let imageAdress =
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
    if (evolutionId < 9) {
      this.normalizedUrl = imageAdress + '00' + evolutionId + '.png';
    } else if (evolutionId > 9 && evolutionId < 100) {
      this.normalizedUrl = imageAdress + '0' + evolutionId + '.png';
    } else if (evolutionId > 99){
      this.normalizedUrl = imageAdress + evolutionId + '.png';
    }
  }

  handleMissingEvolution() {
    this.normalizedUrl = '../../../../assets/unknownEvo.png';
  }

  ngOnInit(): void {
    this.getEvolution(this.data.evolutionId);
    this.loaded$ = this.store.select(selectPokemonsList)
  }
}

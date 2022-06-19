import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss'],
})
export class PokemonModalComponent implements OnInit {
  normalizedUrl: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: Pokemon) {}

  handleMissingImage() {
    this.data.image = '../../../../assets/whosthat.png';
  }

  getEvolution(evolutionId: number) {
    let imageAdress =
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
    if (evolutionId < 9) {
      this.normalizedUrl = imageAdress + '00' + evolutionId + '.png';
    } else if (evolutionId > 9) {
      this.normalizedUrl = imageAdress + '0' + evolutionId + '.png';
    } else {
      this.normalizedUrl = imageAdress + evolutionId + '.png';
    }
  }

  handleMissingEvolution() {
    this.normalizedUrl = '../../../../assets/unknownEvo.png';
  }

  ngOnInit(): void {
    this.getEvolution(this.data.evolutionId);
  }
}

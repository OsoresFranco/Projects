import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss'],
})
export class PokemonModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Pokemon) {}

  handleMissingImage() {
    this.data.image = '../../../../assets/whosthat.png';
  }

  getEvolution(){

  }

  ngOnInit(): void {}
}

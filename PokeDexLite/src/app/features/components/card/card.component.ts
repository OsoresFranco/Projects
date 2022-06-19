import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonModalComponent } from 'src/app/features/components/pokemon-modal/pokemon-modal.component';
import { PokemonEditFormComponent } from '../pokemon-edit-form/pokemon-edit-form.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input() name: any = '';
  @Input() image: any = '';
  @Input() lvl: any = '';
  @Input() type: any[] = [];
  @Input() pokemon: any;

  handleMissingImage() {
    this.image = '../../../../assets/whosthat.png';
  }

  handleMissingtype() {
    this.image = '../../../../assets/types/unknown.png';
  }

  openModal(pokemon: any) {
    this.dialog.open(PokemonModalComponent, {
      data: {
        name: pokemon.name,
        image: pokemon.image,
        lvl: pokemon.lvl,
        evolutionId: pokemon.evolutionId,
        abilities: pokemon.abilities,
      },
    });
  }

  editModal(pokemon: any) {
    this.dialog.open(PokemonEditFormComponent, {
      data: {
        name: pokemon.name,
        image: pokemon.image,
        lvl: pokemon.lvl,
        evolutionId: pokemon.evolutionId,
        abilities: pokemon.abilities,
        type: pokemon.type,
        id: pokemon.id,
      },
    });
  }
  ngOnInit(): void {}
}

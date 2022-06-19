import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon-edit-form',
  templateUrl: './pokemon-edit-form.component.html',
  styleUrls: ['./pokemon-edit-form.component.scss'],
})
export class PokemonEditFormComponent implements OnInit {
  editionForm: FormGroup;
  types: string[] = [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Pokemon,
    private fb: FormBuilder,
    private pokemonservice: PokemonService,
    private alert: AlertsService
  ) {
    this.editionForm = this.fb.group({
      name: [this.data.name, [Validators.required]],
      image: [this.data.image, [Validators.required]],
      type: [this.data.type, [Validators.required]],
      evolutionId: [this.data.evolutionId],
      lvl: [this.data.lvl],
      abilities: [this.data.abilities],
      id: [this.data.id],
    });
  }

  submit() {
    let pokemon = this.editionForm.value;
    this.pokemonservice.putPokemon(pokemon).subscribe(
      () => {
        this.alert.editionSuccess(this.editionForm.get('name')?.value);
      },
      () => {
        this.alert.editionFail(this.editionForm.get('name')?.value);
      }
    );
  }

  ngOnInit(): void {}
}

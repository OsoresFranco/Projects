import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Pokemon } from 'src/app/models/Pokemon';
import { editPokemons } from 'src/app/state/actions/pokemon.actions';

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
    private store: Store<any>
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
    this.store.dispatch(editPokemons({ pokemonItem: pokemon }));
  }

  ngOnInit(): void {}
}

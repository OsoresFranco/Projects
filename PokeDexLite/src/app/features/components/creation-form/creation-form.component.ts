import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { addPokemons } from 'src/app/state/actions/pokemon.actions';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.scss'],
})
export class CreationFormComponent implements OnInit {
  creationForm:any;
  abilitiesForm:any

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
    private fb: FormBuilder,
    private alert: AlertsService,
    private store: Store<any>
  ) {
    
    this.creationForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(''),
      image:new FormControl(''),
      type: new FormControl([]),
      evolutionId: new FormControl(0),
      lvl: new FormControl(0),
    });
    this.abilitiesForm = new FormGroup(
      {
        name: new FormControl(''),
        description: new FormControl('')
      }
    )
  }

  submit() {
    let pokemon = this.creationForm.value;
    let abilities = this.abilitiesForm.value;
    let merged = { ...pokemon, abilities: [abilities] }
    this.store.dispatch(addPokemons({ pokemonItem: merged }));
  }

  ngOnInit(): void {}
}
